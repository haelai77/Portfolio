'use client'
import "./Swarm.css";
import getCssVariableValue from '@utils/StringParsing/CssVariables';

import React, { useEffect, useMemo, useRef } from "react";

type BoidsBackgroundProps = {
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
	jitter?: number; // new: small random steering noise
	className?: string;
	style?: React.CSSProperties;
	paused?: boolean;
};

type Boid = {
	glyph?: string;
	x: number;
	y: number;
	vx: number;
	vy: number;
};

const BoidsBackground: React.FC<BoidsBackgroundProps> = ({
	numBoids,
	density = 3,
	// glyph = "LEO᯽",
	glyph = "➤",
	baseSize = 25,
	opacity = 0.55,
	color = "--color-boids",
	speed = 0.5-0.1,
	maxSpeed = 0.7-0.1,
	separation = 0.5,
	cohesion = 0.0003,
	alignment = 0.03,
	perception = 80,
	jitter = 0.001,
	paused = false,
}) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const rafRef = useRef<number | null>(null);
	const boidsRef = useRef<Boid[]>([]);
	const dprRef = useRef<number>(1);
	const reducedMotion = useMemo(
		() =>
		typeof window !== "undefined" &&
		window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches,
		[]
	);
	const BLEED_CSS_PX = 40;

	// Resize & DPI setup
	const resize = () => {
		const canvas = canvasRef.current!;
		const rect = canvas.getBoundingClientRect();
		const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
		dprRef.current = dpr;

		// Canvas buffer matches visible size (no scaling / no overflow)
		canvas.width  = Math.max(1, Math.floor(rect.width  * dpr));
		canvas.height = Math.max(1, Math.floor(rect.height * dpr));
		canvas.style.width  = `${Math.floor(rect.width)}px`;
		canvas.style.height = `${Math.floor(rect.height)}px`;
	};
	
	const initBoids = () => {
	const canvas = canvasRef.current!;
	const w = canvas.width;
	const h = canvas.height;
	const bleed = BLEED_CSS_PX * dprRef.current;

	// density from visible pixels (not the virtual area)
	const pxArea = (w * h) / (dprRef.current * dprRef.current);
	const count = numBoids ?? Math.max(8, Math.round((pxArea / 100000) * density));

	boidsRef.current = Array.from({ length: count }, () => {
		const angle = Math.random() * Math.PI * 2;
		const speed0 = 0.5 + Math.random() * 1.2;
		return {
		x: Math.random() * (w + 2 * bleed) - bleed, // [-bleed, w+bleed]
		y: Math.random() * (h + 2 * bleed) - bleed, // [-bleed, h+bleed]
		vx: Math.cos(angle) * speed0,
		vy: Math.sin(angle) * speed0,
		glyph: (glyph.length === 1 ? glyph : glyph[(Math.random() * glyph.length) | 0]) as string,
		};
	});
	};


// ------------------------------------------
// Animation loop
// ------------------------------------------
const tick = () => {
	const canvas = canvasRef.current;
	if (!canvas) return;

	const ctx = canvas.getContext("2d");
	if (!ctx) return;

	const w = canvas.width, h = canvas.height;
	const bleed = BLEED_CSS_PX * dprRef.current;
	const simW = w + 2 * bleed;
	const simH = h + 2 * bleed;
	const boids = boidsRef.current;
	const perceptionR = perception * dprRef.current;

	for (let i = 0; i < boids.length; i++) {
	const b = boids[i];

	let vxAlign = 0,
		vyAlign = 0;
	let cx = 0,
		cy = 0;
	let sx = 0,
		sy = 0;
	let wSum = 0;

	// --- Distance-weighted neighborhood forces ---
	for (let j = 0; j < boids.length; j++) {
		if (i === j) continue;
		const other = boids[j];
		const dx = other.x - b.x;
		const dy = other.y - b.y;
		const dist2 = dx * dx + dy * dy;

		if (dist2 < perceptionR * perceptionR && dist2 > 0.01) {
			const dist = Math.sqrt(dist2); // linear distance
			const t = Math.min(1, dist / perceptionR); // normalized distance [0..1]
			const w = 1 - t * t; // quadratic falloff weighting

			// Alignment + cohesion
			vxAlign += other.vx * w;
			vyAlign += other.vy * w;
			cx += other.x * w;
			cy += other.y * w;
			wSum += w;

			// Separation (repel close neighbors)
			const inv = 1 / dist2;
			sx -= dx * inv;
			sy -= dy * inv;
		}
	}

	// Combine weighted contributions
	if (wSum > 0) {
		// Alignment
		b.vx += (vxAlign / wSum - b.vx) * alignment;
		b.vy += (vyAlign / wSum - b.vy) * alignment;

		// Cohesion
		b.vx += (cx / wSum - b.x) * cohesion;
		b.vy += (cy / wSum - b.y) * cohesion;

		// Separation
		b.vx += sx * separation;
		b.vy += sy * separation;
	}

	// --- Small jitter to avoid synchronization ---
	b.vx += (Math.random() - 0.5) * jitter;
	b.vy += (Math.random() - 0.5) * jitter;

	// Limit both minimum and maximum speed
	const s = Math.hypot(b.vx, b.vy) || 1e-6;
	const maxV = maxSpeed * speed * dprRef.current;
	const minV = 0.2 * maxV; // ~20% of max speed; tweak as needed

	if (s > maxV) {
		// Cap high speed
		b.vx = (b.vx / s) * maxV;
		b.vy = (b.vy / s) * maxV;
	} else if (s < minV) {
		// Boost low speed
		b.vx = (b.vx / s) * minV;
		b.vy = (b.vy / s) * minV;
	}

	// Move
	b.x += b.vx;
	b.y += b.vy;

	// Wrap edges
    // wrap on [-bleed, w+bleed] × [-bleed, h+bleed]
    if (b.x < -bleed) b.x += simW;
    if (b.x > w + bleed) b.x -= simW;
    if (b.y < -bleed) b.y += simH;
    if (b.y > h + bleed) b.y -= simH;
	}

	// Draw
	ctx.clearRect(0, 0, w, h);
	ctx.save();
	ctx.fillStyle = getCssVariableValue(color);

	const fontPx = Math.max(8, baseSize * dprRef.current);
	ctx.font = `bold ${fontPx}px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"`;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";

	for (const b of boids) {
		const angle = Math.atan2(b.vy, b.vx);
		ctx.globalAlpha = opacity;
		ctx.save();
		ctx.translate(b.x, b.y);
		ctx.rotate(angle);
		ctx.fillText(b.glyph ?? "?", 0, 0);
		ctx.restore();
	}
	ctx.restore();

	rafRef.current = requestAnimationFrame(tick);
};

// ------------------------------------------
// Setup and teardown
// ------------------------------------------
useEffect(() => {
	const canvas = canvasRef.current;
	if (!canvas) return;

	const handleResize = () => {
		const prevCount = boidsRef.current.length;
		resize();
		initBoids();

		// Adjust boid count if numBoids prop changes
		if (typeof numBoids === "number" && boidsRef.current.length !== prevCount) {
			boidsRef.current = boidsRef.current.slice(0, numBoids);
			while (boidsRef.current.length < numBoids) {
			boidsRef.current.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: (Math.random() - 0.5) * 2,
				vy: (Math.random() - 0.5) * 2,
			});
			}
		}
	};

	handleResize();
	const ro = new ResizeObserver(handleResize);
	ro.observe(canvas);

	if (!paused && !reducedMotion) {
		rafRef.current = requestAnimationFrame(tick);
	}

	return () => {
		ro.disconnect();
		if (rafRef.current) cancelAnimationFrame(rafRef.current);
	};
		// eslint-disable-next-line react-hooks/exhaustive-deps
}, [
	numBoids,
	density,
	glyph,
	baseSize,
	opacity,
	color,
	speed,
	separation,
	cohesion,
	alignment,
	maxSpeed,
	perception,
	paused,
	reducedMotion,
	jitter,
]);

// Pause/resume
useEffect(() => {
	if (!canvasRef.current) return;

	if (paused || reducedMotion) {
		if (rafRef.current) cancelAnimationFrame(rafRef.current);
		rafRef.current = null;
	} else if (!rafRef.current) {
		rafRef.current = requestAnimationFrame(tick);
	}
	// eslint-disable-next-line react-hooks/exhaustive-deps
}, [paused, reducedMotion]);

return (
	<canvas
		ref={canvasRef}
		aria-hidden="true"
		className="boidsBackground"
	/>
);
};

export default BoidsBackground;
