import '@css/Lab.css'
import { type Dispatch, type SetStateAction } from 'react'
import { PageHeader } from '@components/index'

export type SwarmParams = {
  density: number
  opacity: number
  speed: number
  separation: number
  cohesion: number
  alignment: number
  perception: number
  jitter: number
}

export const DEFAULT_SWARM: SwarmParams = {
  density: 4,
  opacity: 0.38,
  speed: 0.4,
  separation: 0.5,
  cohesion: 0.0003,
  alignment: 0.03,
  perception: 80,
  jitter: 0.001,
}

type Slider = {
  key: keyof SwarmParams
  label: string
  min: number
  max: number
  step: number
  digits: number
}

const SLIDERS: Slider[] = [
  { key: 'density', label: 'Density', min: 1, max: 10, step: 0.5, digits: 1 },
  { key: 'opacity', label: 'Opacity', min: 0.05, max: 1, step: 0.01, digits: 2 },
  { key: 'speed', label: 'Speed', min: 0.1, max: 1.5, step: 0.05, digits: 2 },
  { key: 'separation', label: 'Separation', min: 0, max: 2, step: 0.05, digits: 2 },
  { key: 'cohesion', label: 'Cohesion', min: 0, max: 0.0015, step: 0.00005, digits: 5 },
  { key: 'alignment', label: 'Alignment', min: 0, max: 0.2, step: 0.005, digits: 3 },
  { key: 'perception', label: 'Perception', min: 20, max: 200, step: 5, digits: 0 },
  { key: 'jitter', label: 'Jitter', min: 0, max: 0.02, step: 0.001, digits: 3 },
]

type SwarmLabProps = {
  swarm: SwarmParams
  setSwarm: Dispatch<SetStateAction<SwarmParams>>
  cursorReaction: boolean
  setCursorReaction: Dispatch<SetStateAction<boolean>>
  cursorAttract: boolean
  setCursorAttract: Dispatch<SetStateAction<boolean>>
}

const SwarmLab = ({
  swarm,
  setSwarm,
  cursorReaction,
  setCursorReaction,
  cursorAttract,
  setCursorAttract,
}: SwarmLabProps) => {
  const update = (key: keyof SwarmParams, value: number) =>
    setSwarm((current) => ({ ...current, [key]: value }))

  return (
    <main className="page">
      <PageHeader
        eyebrow="Interactive"
        title="Settings"
        subtitle="Tune the swarm that drifts behind everything - changes apply live and follow you across the site."
      />

      <section className="section fade-up">
        <div className="card lab-panel">
          <div className="lab-grid">
            {SLIDERS.map((slider) => (
              <label key={slider.key} className="lab-field">
                <span className="lab-field__label">{slider.label}</span>
                <input
                  type="range"
                  min={slider.min}
                  max={slider.max}
                  step={slider.step}
                  value={swarm[slider.key]}
                  onChange={(event) => update(slider.key, Number(event.target.value))}
                />
                <span className="lab-field__value">{swarm[slider.key].toFixed(slider.digits)}</span>
              </label>
            ))}
          </div>

          <div className="lab-controls">
            <label className="lab-switch">
              <input
                type="checkbox"
                checked={cursorReaction}
                onChange={(event) => setCursorReaction(event.target.checked)}
              />
              <span>React to cursor</span>
            </label>

            {cursorReaction && (
              <div className="btn-row">
                <button
                  type="button"
                  className={`btn ${cursorAttract ? 'btn--ghost' : 'btn--primary'}`}
                  onClick={() => setCursorAttract(false)}
                >
                  Flee
                </button>
                <button
                  type="button"
                  className={`btn ${cursorAttract ? 'btn--primary' : 'btn--ghost'}`}
                  onClick={() => setCursorAttract(true)}
                >
                  Attract
                </button>
              </div>
            )}

            <button type="button" className="btn btn--ghost" onClick={() => setSwarm(DEFAULT_SWARM)}>
              Reset
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SwarmLab
