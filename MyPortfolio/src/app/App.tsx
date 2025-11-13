import { Route, Routes } from 'react-router-dom'
import { CV, Home } from './pages'
import { Navbar, BoidsBackground } from '../components'

const App = () => {
  return (
      <div className=".container--NavAndPageContent">
        <Navbar />
        <BoidsBackground color="--color-boids"/>

        <div className=".container--pageContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </div>

      </div>
  )
}

export default App