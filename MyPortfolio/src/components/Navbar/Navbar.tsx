import { useEffect, useRef, useState } from 'react'
import LogoFont from '../LogoFont/LogoFont'
import './Navbar.css'

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false) // triggers re-render when toggled
  const contentRef = useRef<HTMLDivElement>(null) // useRef for navbar content reference

  const handleToggle = () => {
    setIsCollapsed((prev) => !prev)
  }

  // side effect to set --nav-item-index for each child of content (triggers on rerender)
  useEffect(() => {
    const contentEl = contentRef.current
    if (!contentEl) return

    // arrow function to set --nav-item-index for each child
    const setChildIndexes = () => {
      Array.from(contentEl.children).forEach((child, index) => {
        (child as HTMLElement).style.setProperty('--nav-item-index', String(index))
      })
    }

    setChildIndexes()

    const observer = new MutationObserver(setChildIndexes) // observe changes to content's children and update indexes accordingly
    observer.observe(contentEl, { childList: true })

    return () => observer.disconnect()
  }, []) // no dependencies to trigger i.e. only runs on mount and content changes via observer

  return (
    <nav className={`navbar ${isCollapsed ? 'navbar--collapsed' : ''}`}>

      <div className="navbar--content" ref={contentRef}>

        <LogoFont root="Leo Lai" suffix=" 🏝️" />
        <LogoFont root="Home" />
        <LogoFont root="Projects" />
        <LogoFont root="Recipies" />

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
          src={isCollapsed ? '/icons/expansion/sidebar-right.svg' : '/icons/expansion/sidebar-left.svg'}
          alt=""
          aria-hidden="true"
        />
      </button>
    </nav>
  )
}

export default Navbar	
