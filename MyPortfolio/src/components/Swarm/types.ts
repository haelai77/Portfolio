export type Boid = {
  glyph: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export type SwarmBounds = {
  width: number;
  height: number;
  bleed: number;
};

export type SwarmMovementConfig = {
  alignment: number;
  cohesion: number;
  separation: number;
  perception: number;
  jitter: number;
  speed: number;
  maxSpeed: number;
};
