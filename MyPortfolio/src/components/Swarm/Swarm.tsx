'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import getCssVariableValue from '@utils/StringParsing/CssVariables';

import './Swarm.css';
import { drawBoids, isCjk } from './render';
import { createBoids, resolveBoidCount, stepBoids } from './simulation';

export type SwarmProps = {
  numBoids?: number;
  density?: number;
  glyph?: string;
  baseSize?: number;
  opacity?: number;
  color?: string;
  speed?: number;
  separation?: number;
  cohesion?: number;
  alignment?: number;
  maxSpeed?: number;
  perception?: number;
  jitter?: number;
  className?: string;
  style?: React.CSSProperties;
  paused?: boolean;
};

const BLEED_CSS_PX = 40;

const wrapToRange = (value: number, min: number, max: number): number => {
  const span = max - min;
  if (span <= 0) {
    return min;
  }

  return ((((value - min) % span) + span) % span) + min;
};

const resizeCanvas = (canvas: HTMLCanvasElement): { width: number; height: number; dpr: number } => {
  const host = canvas.parentElement;
  const rect = host ? host.getBoundingClientRect() : canvas.getBoundingClientRect();
  const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  const width = Math.max(1, Math.floor(rect.width * dpr));
  const height = Math.max(1, Math.floor(rect.height * dpr));

  const previousWidth = canvas.width;
  const previousHeight = canvas.height;
  let snapshot: HTMLCanvasElement | null = null;

  if (previousWidth > 0 && previousHeight > 0) {
    snapshot = document.createElement('canvas');
    snapshot.width = previousWidth;
    snapshot.height = previousHeight;
    const snapshotCtx = snapshot.getContext('2d');
    if (snapshotCtx) {
      snapshotCtx.drawImage(canvas, 0, 0);
    }
  }

  canvas.width = width;
  canvas.height = height;

  if (snapshot) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(snapshot, 0, 0, previousWidth, previousHeight, 0, 0, width, height);
    }
  }

  return { width, height, dpr };
};

/**
 * Animated boids background rendered into a full-size canvas.
 *
 * Responsibilities:
 * 1) Own the canvas lifecycle and resize behavior.
 * 2) Own animation scheduling (requestAnimationFrame).
 * 3) Delegate boid movement and rendering to dedicated modules.
 */
const Swarm: React.FC<SwarmProps> = ({
  numBoids,
  density = 5,
  glyph = 'LEO᯽➤',
  baseSize = 25,
  opacity = 0.55,
  color = '--color-boids',
  speed = 0.4,
  maxSpeed = 0.6,
  separation = 0.5,
  cohesion = 0.0003,
  alignment = 0.03,
  perception = 80,
  jitter = 0.001,
  className,
  style,
  paused = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const boidsRef = useRef<ReturnType<typeof createBoids>>([]);
  const dprRef = useRef<number>(1);
  const previousSizeRef = useRef<{ width: number; height: number; dpr: number } | null>(null);

  const reducedMotion = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches,
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const initializeBoids = (): void => {
      const { width, height, dpr } = resizeCanvas(canvas);
      dprRef.current = dpr;

      const bounds = {
        width,
        height,
        bleed: BLEED_CSS_PX * dpr,
      };

      const count = resolveBoidCount({
        width,
        height,
        dpr,
        density,
        numBoids,
      });

      const currentBoids = boidsRef.current;
      const previousSize = previousSizeRef.current;

      if (!previousSize || currentBoids.length === 0) {
        boidsRef.current = createBoids({
          count,
          glyphPool: glyph,
          bounds,
        });
        previousSizeRef.current = { width, height, dpr };
        return;
      }

      const minX = -bounds.bleed;
      const maxX = bounds.width + bounds.bleed;
      const minY = -bounds.bleed;
      const maxY = bounds.height + bounds.bleed;

      // Preserve boid state across resize; only remap positions into next bounds.
      for (const boid of currentBoids) {
        boid.x = wrapToRange(boid.x, minX, maxX);
        boid.y = wrapToRange(boid.y, minY, maxY);
      }

      if (currentBoids.length < count) {
        const additionalBoids = createBoids({
          count: count - currentBoids.length,
          glyphPool: glyph,
          bounds,
        });
        currentBoids.push(...additionalBoids);
      } else if (currentBoids.length > count) {
        currentBoids.length = count;
      }

      boidsRef.current = currentBoids;
      previousSizeRef.current = { width, height, dpr };
    };

    initializeBoids();

    let resizeRaf: number | null = null;
    const scheduleResize = (): void => {
      if (resizeRaf !== null) {
        cancelAnimationFrame(resizeRaf);
      }

      resizeRaf = requestAnimationFrame(() => {
        resizeRaf = null;
        initializeBoids();
      });
    };

    const observer = new ResizeObserver(scheduleResize);
    if (canvas.parentElement) {
      observer.observe(canvas.parentElement);
    } else {
      observer.observe(canvas);
    }

    return () => {
      if (resizeRaf !== null) {
        cancelAnimationFrame(resizeRaf);
      }
      observer.disconnect();
    };
  }, [density, glyph, numBoids]);

  // Canvas can't paint a webfont the browser hasn't downloaded, and it never
  // triggers the download itself. Google serves CJK fonts in many unicode-range
  // subsets, so we must pass the actual characters — otherwise only the Latin
  // subset loads and the canvas falls back for 黎佩德.
  useEffect(() => {
    const cjkChars = Array.from(glyph).filter(isCjk).join('');
    if (cjkChars) {
      document.fonts?.load(`20px "Zhi Mang Xing"`, cjkChars).catch(() => {});
    }
  }, [glyph]);

  // Re-glyph existing boids when the pool changes (keeps motion, swaps characters).
  useEffect(() => {
    const boids = boidsRef.current;
    if (boids.length === 0) {
      return;
    }

    const pickGlyph = (): string => {
      if (glyph.length <= 1) {
        return glyph || '?';
      }
      return glyph[Math.floor(Math.random() * glyph.length)] ?? '?';
    };

    for (const boid of boids) {
      boid.glyph = pickGlyph();
    }
  }, [glyph]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    if (paused || reducedMotion) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const animate = (): void => {
      const width = canvas.width;
      const height = canvas.height;
      const dpr = dprRef.current;

      stepBoids({
        boids: boidsRef.current,
        bounds: {
          width,
          height,
          bleed: BLEED_CSS_PX * dpr,
        },
        config: {
          alignment,
          cohesion,
          separation,
          perception,
          jitter,
          speed,
          maxSpeed,
        },
        dpr,
      });

      drawBoids({
        ctx,
        boids: boidsRef.current,
        width,
        height,
        dpr,
        baseSize,
        opacity,
        color: getCssVariableValue(color),
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = null;
    };
  }, [
    alignment,
    baseSize,
    cohesion,
    color,
    jitter,
    maxSpeed,
    opacity,
    paused,
    perception,
    reducedMotion,
    separation,
    speed,
  ]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className ? `boidsBackground ${className}` : 'boidsBackground'}
      style={style}
    />
  );
};

export default Swarm;
