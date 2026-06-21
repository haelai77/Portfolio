import type { Boid, SwarmBounds, SwarmMovementConfig } from './types';

const MIN_BOIDS = 8;
const BOID_AREA_PX = 100_000;
const MIN_SPEED_FACTOR = 0.2;

/**
 * Converts area and density into a practical boid count.
 */
export const resolveBoidCount = ({
  width,
  height,
  dpr,
  density,
  numBoids,
}: {
  width: number;
  height: number;
  dpr: number;
  density: number;
  numBoids?: number;
}): number => {
  if (typeof numBoids === 'number') {
    return Math.max(1, Math.floor(numBoids));
  }

  const areaInCssPx = (width * height) / (dpr * dpr);
  return Math.max(MIN_BOIDS, Math.round((areaInCssPx / BOID_AREA_PX) * density));
};

const randomGlyph = (glyphPool: string): string => {
  if (glyphPool.length <= 1) {
    return glyphPool || '?';
  }

  const index = Math.floor(Math.random() * glyphPool.length);
  return glyphPool[index] ?? '?';
};

export const createBoids = ({
  count,
  glyphPool,
  bounds,
}: {
  count: number;
  glyphPool: string;
  bounds: SwarmBounds;
}): Boid[] => {
  const { width, height, bleed } = bounds;

  return Array.from({ length: count }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.5 + Math.random() * 1.2;

    return {
      glyph: randomGlyph(glyphPool),
      x: Math.random() * (width + bleed * 2) - bleed,
      y: Math.random() * (height + bleed * 2) - bleed,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
    };
  });
};

const wrapDelta = (delta: number, span: number): number => {
  const halfSpan = span / 2;

  if (delta > halfSpan) {
    return delta - span;
  }

  if (delta < -halfSpan) {
    return delta + span;
  }

  return delta;
};

const wrapPosition = (value: number, min: number, max: number, span: number): number => {
  if (value < min) {
    return value + span;
  }

  if (value > max) {
    return value - span;
  }

  return value;
};

/**
 * Applies one boid simulation step.
 * Uses toroidal distance so boids near opposite edges still influence each other naturally.
 */
export type PointerInfluence = {
  x: number;
  y: number;
  radius: number;
  strength: number;
  attract: boolean;
};

export const stepBoids = ({
  boids,
  bounds,
  config,
  dpr,
  pointer,
}: {
  boids: Boid[];
  bounds: SwarmBounds;
  config: SwarmMovementConfig;
  dpr: number;
  pointer?: PointerInfluence | null;
}): void => {
  if (boids.length === 0) {
    return;
  }

  const { width, height, bleed } = bounds;
  const { alignment, cohesion, separation, perception, jitter, speed, maxSpeed } = config;
  const simWidth = width + bleed * 2;
  const simHeight = height + bleed * 2;
  const perceptionPx = perception * dpr;
  const perceptionSq = perceptionPx * perceptionPx;
  const maxVelocity = maxSpeed * speed * dpr;
  const minVelocity = maxVelocity * MIN_SPEED_FACTOR;

  const nextVx = new Array<number>(boids.length);
  const nextVy = new Array<number>(boids.length);

  for (let i = 0; i < boids.length; i += 1) {
    const boid = boids[i];
    let alignX = 0;
    let alignY = 0;
    let cohesionX = 0;
    let cohesionY = 0;
    let separationX = 0;
    let separationY = 0;
    let weightSum = 0;

    for (let j = 0; j < boids.length; j += 1) {
      if (i === j) {
        continue;
      }

      const other = boids[j];
      const rawDx = wrapDelta(other.x - boid.x, simWidth);
      const rawDy = wrapDelta(other.y - boid.y, simHeight);
      const distanceSq = rawDx * rawDx + rawDy * rawDy;

      if (distanceSq <= 0.01 || distanceSq > perceptionSq) {
        continue;
      }

      const distance = Math.sqrt(distanceSq);
      const normalizedDistance = Math.min(1, distance / perceptionPx);
      const weight = 1 - normalizedDistance * normalizedDistance;

      alignX += other.vx * weight;
      alignY += other.vy * weight;
      cohesionX += rawDx * weight;
      cohesionY += rawDy * weight;
      weightSum += weight;

      const repel = 1 / distanceSq;
      separationX -= rawDx * repel;
      separationY -= rawDy * repel;
    }

    let vx = boid.vx;
    let vy = boid.vy;

    if (weightSum > 0) {
      vx += (alignX / weightSum - vx) * alignment;
      vy += (alignY / weightSum - vy) * alignment;

      vx += (cohesionX / weightSum) * cohesion;
      vy += (cohesionY / weightSum) * cohesion;

      vx += separationX * separation;
      vy += separationY * separation;
    }

    // Light randomized steering keeps large swarms from locking into rigid lanes.
    vx += (Math.random() - 0.5) * jitter;
    vy += (Math.random() - 0.5) * jitter;

    // Cursor influence: push away (flee) or pull toward (attract) within radius.
    if (pointer) {
      const awayX = boid.x - pointer.x;
      const awayY = boid.y - pointer.y;
      const distSq = awayX * awayX + awayY * awayY;
      const radiusSq = pointer.radius * pointer.radius;
      if (distSq < radiusSq && distSq > 0.01) {
        const dist = Math.sqrt(distSq);
        const falloff = 1 - dist / pointer.radius;
        const sign = pointer.attract ? -1 : 1;
        vx += (awayX / dist) * falloff * pointer.strength * sign;
        vy += (awayY / dist) * falloff * pointer.strength * sign;
      }
    }

    const velocity = Math.hypot(vx, vy) || 1e-6;
    if (velocity > maxVelocity) {
      const scale = maxVelocity / velocity;
      vx *= scale;
      vy *= scale;
    } else if (velocity < minVelocity) {
      const scale = minVelocity / velocity;
      vx *= scale;
      vy *= scale;
    }

    nextVx[i] = vx;
    nextVy[i] = vy;
  }

  const minX = -bleed;
  const maxX = width + bleed;
  const minY = -bleed;
  const maxY = height + bleed;

  for (let i = 0; i < boids.length; i += 1) {
    const boid = boids[i];
    boid.vx = nextVx[i] ?? boid.vx;
    boid.vy = nextVy[i] ?? boid.vy;

    boid.x = wrapPosition(boid.x + boid.vx, minX, maxX, simWidth);
    boid.y = wrapPosition(boid.y + boid.vy, minY, maxY, simHeight);
  }
};
