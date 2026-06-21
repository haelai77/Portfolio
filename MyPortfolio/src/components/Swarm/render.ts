import type { Boid } from './types';

const DEFAULT_FONT_STACK =
  'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"';
// Chinese name glyphs (黎佩德) render in the brush-script Zhi Mang Xing.
const CJK_FONT_STACK = `"Zhi Mang Xing", ${DEFAULT_FONT_STACK}`;

export const isCjk = (glyph: string): boolean => /[㐀-鿿豈-﫿]/.test(glyph);

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
  const defaultFont = `bold ${fontPx}px ${DEFAULT_FONT_STACK}`;
  const cjkFont = `${fontPx}px ${CJK_FONT_STACK}`; // no faux-bold: Zhi Mang Xing ships one weight
  let currentFont = defaultFont;
  ctx.font = currentFont;

  for (const boid of boids) {
    const glyph = boid.glyph ?? '?';
    const angle = Math.atan2(boid.vy, boid.vx);

    const wantFont = isCjk(glyph) ? cjkFont : defaultFont;
    if (wantFont !== currentFont) {
      ctx.font = wantFont;
      currentFont = wantFont;
    }

    ctx.globalAlpha = opacity;
    ctx.save();
    ctx.translate(boid.x, boid.y);
    ctx.rotate(angle);
    ctx.fillText(glyph, 0, 0);
    ctx.restore();
  }

  ctx.restore();
};
