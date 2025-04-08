import './hamburgerMenuStyles.css'

interface HamburgerMenuProps {
  isOpen: boolean
  toggleMenu: () => void
}

export default function HamburgerMenu({
  isOpen,
  toggleMenu,
}: HamburgerMenuProps) {
  return (
    <div className="hamburger-menu">
      <input
        type="checkbox"
        id="menu-toggle"
        className="menu-toggle"
        checked={isOpen}
        onChange={toggleMenu}
      />
      <label htmlFor="menu-toggle" className="menu-icon">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </label>
    </div>
  )
}
