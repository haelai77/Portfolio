import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LogoFont, BrandName } from '../index'
import './Navbar.css'

const MOBILE_QUERY = '(max-width: 768px)'

// Start collapsed on mobile (top-bar + hamburger), expanded on desktop.
const getInitialCollapsed = () =>
  typeof window !== 'undefined' && !!window.matchMedia?.(MOBILE_QUERY)?.matches

type NavbarProps = {
  chineseMode: boolean
  onToggleName: () => void
}

const Navbar = ({ chineseMode, onToggleName }: NavbarProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(getInitialCollapsed) // triggers re-render when toggled
  const menuRef = useRef<HTMLDivElement>(null) // ref for the nav links container

  const handleToggle = () => {
    setIsCollapsed((prev) => !prev)
  }

  // Keep collapse state sensible when crossing the mobile breakpoint.
  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY)
    const handleChange = (event: MediaQueryListEvent) => setIsCollapsed(event.matches)
    mql.addEventListener('change', handleChange)
    return () => mql.removeEventListener('change', handleChange)
  }, [])

  // On mobile, close the menu after navigating.
  const handleNavClick = () => {
    if (window.matchMedia(MOBILE_QUERY).matches) {
      setIsCollapsed(true)
    }
  }

  // side effect to set --nav-item-index for each link (drives the staggered animation)
  useEffect(() => {
    const menuEl = menuRef.current
    if (!menuEl) return

    const setChildIndexes = () => {
      Array.from(menuEl.children).forEach((child, index) => {
        (child as HTMLElement).style.setProperty('--nav-item-index', String(index))
      })
    }

    setChildIndexes()

    const observer = new MutationObserver(setChildIndexes)
    observer.observe(menuEl, { childList: true })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`navbar ${isCollapsed ? 'navbar--collapsed' : ''}`}>

      <div className="navbar--brand">
        <BrandName active={chineseMode} onToggle={onToggleName} />
      </div>

      <div className="navbar--menu" ref={menuRef}>
        <NavLink to="/" onClick={handleNavClick} className={({ isActive }) => `navbar--link ${isActive ? 'navbar--linkActive' : ''}`}>
          <LogoFont root="Home" />
        </NavLink>
        <NavLink to="/projects" onClick={handleNavClick} className={({ isActive }) => `navbar--link ${isActive ? 'navbar--linkActive' : ''}`}>
          <LogoFont root="Projects" />
        </NavLink>
        <NavLink to="/recipies" onClick={handleNavClick} className={({ isActive }) => `navbar--link ${isActive ? 'navbar--linkActive' : ''}`}>
          <LogoFont root="Recipies" />
        </NavLink>
        <NavLink to="/cv" onClick={handleNavClick} className={({ isActive }) => `navbar--link ${isActive ? 'navbar--linkActive' : ''}`}>
          <LogoFont root="CV" />
        </NavLink>
        <NavLink to="/settings" onClick={handleNavClick} className={({ isActive }) => `navbar--link ${isActive ? 'navbar--linkActive' : ''}`}>
          <LogoFont root="Settings" />
        </NavLink>
      </div>

      <button
        type="button"
        className="navbar--collapseBtn"
        onClick={handleToggle}
        aria-label={isCollapsed ? 'Expand navigation' : 'Collapse navigation'}
        aria-expanded={!isCollapsed}
      >
        <span className="navbar--burger" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <img
          className="navbar--collapseIcon"
          src={isCollapsed ? `${import.meta.env.BASE_URL}icons/expansion/sidebar-right.svg` : `${import.meta.env.BASE_URL}icons/expansion/sidebar-left.svg`}
          alt=""
          aria-hidden="true"
        />
      </button>
    </nav>
  )
}

export default Navbar
