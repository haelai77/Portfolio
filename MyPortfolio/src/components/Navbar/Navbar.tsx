import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleToggle = () => {
    setIsCollapsed((prev) => !prev)
  }

  return (
    <nav className={`navbar ${isCollapsed ? 'navbar--collapsed' : ''}`}>

      <div className="navbar--content">

        <div className="logoFont">
          {"Leo Lai".split("").map((char, i, arr) => {
            // Count only visible letters for delay
            const visibleIndex = arr.slice(0, i).filter(c => c !== " ").length;

            return (
              <span
                key={i}
                style={{ transitionDelay: `${visibleIndex * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char} {/* non-breaking space */}
              </span>
            );
          })} 🏝️
        </div>

        <div>buttons</div>
      </div>

      <button
        type="button"
        className="navbar--collapseBtn"
        onClick={handleToggle}
        aria-label={isCollapsed ? 'Expand navigation' : 'Collapse navigation'}
        aria-expanded={!isCollapsed}
      >
        <img
          className="navbar--collapseIcon"
          src={isCollapsed ? '/icons/sidebar-right.svg' : '/icons/sidebar-left.svg'}
          alt=""
          aria-hidden="true"
        />
      </button>
    </nav>
  )
}

export default Navbar	
