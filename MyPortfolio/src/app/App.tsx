import { useEffect, useRef, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { CV, Home, Projects, Recipies, SwarmLab, DEFAULT_SWARM } from './pages'
import { Navbar, BoidsBackground } from '../components'

const DEFAULT_GLYPHS = 'LEO᯽➤'
// Chinese mode: just the name characters, no symbols.
const CHINESE_GLYPHS = '黎佩德'

const App = () => {
  const { pathname } = useLocation()
  const pageContentRef = useRef<HTMLDivElement | null>(null)
  const [chineseMode, setChineseMode] = useState(true)
  const [swarm, setSwarm] = useState(DEFAULT_SWARM)
  const [cursorReaction, setCursorReaction] = useState(true)
  const [cursorAttract, setCursorAttract] = useState(false)

  useEffect(() => {
    pageContentRef.current?.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  // Reveal .fade-up elements as they scroll into view (per route).
  useEffect(() => {
    const root = pageContentRef.current
    if (!root) return
    const els = Array.from(root.querySelectorAll<HTMLElement>('.fade-up'))
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    if (prefersReduced) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { root, threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return (
      <div className="container--NavAndPageContent">
        <Navbar chineseMode={chineseMode} onToggleName={() => setChineseMode((on) => !on)} />

        <div className="container--pageShell">
          <BoidsBackground
            color="--color-boids"
            glyph={chineseMode ? CHINESE_GLYPHS : DEFAULT_GLYPHS}
            cursorReaction={cursorReaction}
            cursorAttract={cursorAttract}
            {...swarm}
          />
          <div className="container--pageContent" ref={pageContentRef}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/recipies" element={<Recipies />} />
              <Route path="/projects" element={<Projects />} />
              <Route
                path="/settings"
                element={
                  <SwarmLab
                    swarm={swarm}
                    setSwarm={setSwarm}
                    cursorReaction={cursorReaction}
                    setCursorReaction={setCursorReaction}
                    cursorAttract={cursorAttract}
                    setCursorAttract={setCursorAttract}
                  />
                }
              />
              <Route path="*" element={<div>Not Found</div>} />
            </Routes>
          </div>
        </div>

      </div>
  )
}

export default App
