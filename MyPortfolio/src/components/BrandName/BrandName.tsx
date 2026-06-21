import { useState, type CSSProperties } from 'react'
import LogoFont from '../LogoFont/LogoFont'
import './BrandName.css'

const PARTICLE_COUNT = 14
const PARTICLE_GLYPHS = ['🌴', '✨', '🥥', '🌟', '🌺', '🏝️']

type Particle = { dx: number; dy: number; glyph: string }

// Radial burst vectors — even spread, varied reach, cycling tropical glyphs.
const PARTICLES: Particle[] = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
  const angle = (i / PARTICLE_COUNT) * Math.PI * 2
  const reach = 34 + (i % 3) * 16
  return {
    dx: Math.cos(angle) * reach,
    dy: Math.sin(angle) * reach,
    glyph: PARTICLE_GLYPHS[i % PARTICLE_GLYPHS.length],
  }
})

type BrandNameProps = {
  active: boolean
  onToggle: () => void
}

/**
 * The sidebar brand. Click to toggle the name between "Leo Lai 🏝️" and the
 * Chinese name (黎佩德, in Rampart One); each click fires a tropical particle
 * burst. Both names use LogoFont so they share the same per-character
 * animation. The active flag also drives the swarm's glyphs (see App).
 */
const BrandName = ({ active, onToggle }: BrandNameProps) => {
  const [burst, setBurst] = useState(0) // bumping this re-triggers the burst animation

  const handleClick = () => {
    setBurst((count) => count + 1)
    onToggle()
  }

  return (
    <button
      type="button"
      className={`brandName ${active ? 'brandName--active' : ''}`}
      aria-pressed={active}
      aria-label="Toggle name between Leo Lai and 黎佩德"
      onClick={handleClick}
    >
      <span className="brandName--en" aria-hidden="true">
        <LogoFont root="Leo Lai" suffix=" 🏝️" />
      </span>

      <span className="brandName--zh" aria-hidden="true">
        <LogoFont root="黎佩德" suffix=" 🏝️" className="brandName--zhFont" />
      </span>

      {burst > 0 && (
        <span className="brandName--particles" key={burst} aria-hidden="true">
          {PARTICLES.map((particle, index) => (
            <span
              key={index}
              className="brandName--particle"
              style={
                {
                  '--dx': `${particle.dx}px`,
                  '--dy': `${particle.dy}px`,
                  '--delay': `${(index % 4) * 25}ms`,
                } as CSSProperties
              }
            >
              {particle.glyph}
            </span>
          ))}
        </span>
      )}
    </button>
  )
}

export default BrandName
