import { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { CV, Home, Projects, Recipies } from './pages'
import { Navbar, BoidsBackground } from '../components'

const App = () => {
  const { pathname } = useLocation()
  const pageContentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    pageContentRef.current?.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return (
      <div className="container--NavAndPageContent">
        <Navbar />

        <div className="container--pageContent" ref={pageContentRef}>
          <BoidsBackground color="--color-boids"/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/recipies" element={<Recipies />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </div>

      </div>
  )
}

export default App
