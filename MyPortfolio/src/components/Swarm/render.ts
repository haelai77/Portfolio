import type { Boid } from './types';

type DrawBoidsInput = {
  ctx: CanvasRenderingContext2D;
  boids: Boid[];
  width: number; // canvas width
  height: number; // canvas height
  dpr: number; // device pixel ratio
  baseSize: number; // base size font size, will be multiplied by dpr.
  opacity: number;
  color: string;
};

/**
 * Draws boids as glyphs rotated along their velocity vectors.
 */
export const drawBoids = ({
  ctx,
  boids,
  width,
  height,
  dpr,
  baseSize,
  opacity,
  color,
}: DrawBoidsInput): void => {
  ctx.clearRect(0, 0, width, height);
  ctx.save();

  ctx.fillStyle = color; // Anchor text horizontally on the boid's translated x position.
  ctx.textAlign = 'center'; // Anchor text vertically on the boid's translated y position.
  ctx.textBaseline = 'middle'; // Combined with `textAlign: center`, glyphs rotate around their midpoint.

  const fontPx = Math.max(8, baseSize * dpr);
  ctx.font = `bold ${fontPx}px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"`;

  for (const boid of boids) {
    const angle = Math.atan2(boid.vy, boid.vx);

    ctx.globalAlpha = opacity;
    ctx.save();
    ctx.translate(boid.x, boid.y);
    ctx.rotate(angle);
    ctx.fillText(boid.glyph ?? '?', 0, 0);
    ctx.restore();
  }

  ctx.restore();
};
