# Swarm Component Notes

This document explains what happens in `Swarm.tsx`, how boid behavior is computed, and what occurs during canvas resizing.

## Files and Responsibilities

- `Swarm.tsx`
  - Owns canvas lifecycle, resize handling, animation loop, and boid state refs.
- `simulation.ts`
  - Computes boid count from area (`resolveBoidCount`), creates boids (`createBoids`), and updates movement (`stepBoids`).
- `render.ts`
  - Draws boids to canvas each frame as rotated glyphs.
- `Swarm.css`
  - Positions canvas as an absolutely positioned background layer.

## `Swarm.tsx` Flow

### 1) Props and defaults
`Swarm` accepts optional props like:
- `density`, `numBoids`
- movement controls (`speed`, `maxSpeed`, `alignment`, `cohesion`, `separation`, `perception`, `jitter`)
- visual controls (`glyph`, `baseSize`, `opacity`, `color`)
- `paused`, `className`, `style`

Defaults are set in the component signature.

### 2) Internal refs
`Swarm.tsx` stores mutable runtime state in refs:
- `canvasRef`: `<canvas>` DOM element
- `rafRef`: active `requestAnimationFrame` id
- `boidsRef`: boid array (positions + velocity + glyph)
- `dprRef`: current device pixel ratio used by simulation/render
- `previousSizeRef`: tracks previous canvas size so resize can distinguish first init vs updates

### 3) Reduced motion
A memoized check of `prefers-reduced-motion` disables animation loop when true.

## Canvas Resize Behavior

Resizing is handled by `resizeCanvas(canvas)` + `initializeBoids()`.

### `resizeCanvas(canvas)` does:
1. Measure bounds from `canvas.parentElement` (fallback to canvas bounds).
2. Compute DPR-clamped pixel size (`dpr` in `[1,2]`).
3. Snapshot previous frame to a temporary in-memory canvas.
4. Set `canvas.width`/`canvas.height` to new pixel dimensions.
5. Draw snapshot back onto resized canvas (`drawImage`) so there is no blank flash.

Why snapshot is needed:
- Assigning `canvas.width` or `canvas.height` clears the bitmap by browser design.
- Snapshot/repaint masks that clear between resize and next animation frame.

### Resize event source
A `ResizeObserver` watches the parent element (fallback to canvas). The handler is RAF-throttled:
- Multiple resize events in one visual frame are collapsed.
- `initializeBoids()` runs once per animation frame during active resizing.

## Boid Initialization and Reconciliation on Resize

Inside `initializeBoids()`:

1. `resizeCanvas` returns latest `width`, `height`, `dpr`.
2. Bounds are built:
   - `{ width, height, bleed: BLEED_CSS_PX * dpr }`
3. Target boid count is computed from area using `resolveBoidCount(...)` unless `numBoids` is explicitly provided.

Then one of two paths runs:

### First initialization
If there is no previous size or no existing boids:
- Create all boids with `createBoids(...)`.

### Resize update (state-preserving)
If boids already exist:
- Existing boids are kept (same objects, same `vx/vy`, same glyph).
- Their `x/y` are wrapped into the new bounds using `wrapToRange(...)`.
- Count is reconciled:
  - If too few boids for new area: append new boids via `createBoids`.
  - If too many boids: truncate array.

Result:
- Boids do **not** hard-reset on resize.
- Positions/directions are retained for existing boids.
- Density remains approximately stable as visible area changes.

## Animation Loop (`useEffect` #2)

When not paused and not reduced-motion:

1. Get `2d` context.
2. Start RAF loop (`animate`).
3. Each frame:
   - Read `canvas.width/height` and `dprRef`.
   - Call `stepBoids(...)` to update boid velocities/positions.
   - Call `drawBoids(...)` to clear and redraw glyphs.
4. On cleanup: cancel RAF.

## Boid Simulation Logic (`simulation.ts`)

### Data model
Each boid has:
- `x`, `y` (position)
- `vx`, `vy` (velocity)
- `glyph` (character drawn)

### Count calculation
`resolveBoidCount`:
- Uses area in CSS pixels (`(width * height) / dpr^2`)
- Scales by `density` and `BOID_AREA_PX`
- Enforces minimum boid count (`MIN_BOIDS`)
- `numBoids` prop overrides auto-density

### Movement update (`stepBoids`)
For each boid:
- Evaluate neighbors within `perception` radius.
- Compute weighted contributions:
  - **Alignment**: steer toward neighbors' average heading.
  - **Cohesion**: steer toward neighbors' center.
  - **Separation**: steer away from nearby boids.
- Add small random `jitter` to avoid lockstep patterns.
- Clamp speed between min and max thresholds.
- Advance position and wrap around bounds (toroidal space).

Toroidal behavior means leaving one edge re-enters from the opposite edge.

## Render Logic (`render.ts`)

`drawBoids` does per frame:
1. `clearRect` entire canvas.
2. Configure text style and computed font size (`baseSize * dpr`, min 8).
3. For each boid:
   - Rotate canvas by `atan2(vy, vx)`.
   - Draw glyph centered at boid position.

This makes each glyph point in its movement direction.

## Practical Notes

- The component intentionally stores boids in refs, not React state, to avoid per-frame re-renders.
- Canvas redraw every frame is required for animation; React render is not involved in frame updates.
- Resize still redraws (canvas is imperative), but current implementation avoids visible blank gaps and avoids full boid resets.
