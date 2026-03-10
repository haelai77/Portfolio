import { Route, Routes } from 'react-router-dom'
import { CV, Home, Projects, Recipies } from './pages'
import { Navbar, BoidsBackground } from '../components'

const App = () => {
  return (
      <div className="container--NavAndPageContent">
        <Navbar />

        <div className="container--pageContent">
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
