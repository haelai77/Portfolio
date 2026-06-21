import { useEffect, useRef, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { CV, Home, Projects, Recipies } from './pages'
import { Navbar, BoidsBackground } from '../components'

const DEFAULT_GLYPHS = 'LEO᯽➤'
// Chinese mode: just the name characters, no symbols.
const CHINESE_GLYPHS = '黎佩德'

const App = () => {
  const { pathname } = useLocation()
  const pageContentRef = useRef<HTMLDivElement | null>(null)
  const [chineseMode, setChineseMode] = useState(false)

  useEffect(() => {
    pageContentRef.current?.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return (
      <div className="container--NavAndPageContent">
        <Navbar chineseMode={chineseMode} onToggleName={() => setChineseMode((on) => !on)} />

        <div className="container--pageShell">
          <BoidsBackground color="--color-boids" glyph={chineseMode ? CHINESE_GLYPHS : DEFAULT_GLYPHS} density={4} opacity={0.38} />
          <div className="container--pageContent" ref={pageContentRef}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/recipies" element={<Recipies />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<div>Not Found</div>} />
            </Routes>
          </div>
        </div>

      </div>
  )
}

export default App
