import ThemeChanger from 'simple-theme-changer'
import './headerStyles.css'
import { useRef, useState } from 'react'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import { useTranslation } from 'react-i18next'
import Select from 'react-select'

export default function Header() {
  const { t, i18n } = useTranslation('global')

  const navRef = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleChange = (selectedOption: any) => {
    i18n.changeLanguage(selectedOption.value)
  }

  const languageOptions = [
    {
      value: 'es',
      label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="./es-icon.png"
            alt="Spanish"
            style={{ width: 20, marginRight: 10 }}
          />
          ES
        </div>
      ),
    },
    {
      value: 'en',
      label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="./en-icon.png"
            alt="English"
            style={{ width: 20, marginRight: 10 }}
          />
          EN
        </div>
      ),
    },
  ]

  return (
    <header className="header">
      <div className="header-container">
        <div className="hamburger-container">
          <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} ref={navRef}>
          <a className="nav-link" aria-label="experience" href="/#experience">
            {t('HeaderText.btn1')}
          </a>
          <a className="nav-link" aria-label="studies" href="/#studies">
            {t('HeaderText.btn2')}
          </a>
          <a className="nav-link" aria-label="projects" href="/#projects">
            {t('HeaderText.btn3')}
          </a>
          <a className="nav-link" aria-label="about-me" href="/#about-me">
            {t('HeaderText.btn4')}
          </a>
          <a className="nav-link" aria-label="skills" href="/#skills">
            {t('HeaderText.btn5')}
          </a>
          <a className="nav-link" aria-label="contacto" href="#contact">
            {t('HeaderText.btn6')}
          </a>

          <Select
            options={languageOptions}
            onChange={handleChange}
            className="language-select"
            defaultValue={languageOptions[0]}
          />

          <a href="#" style={{ cursor: 'default' }}>
            <ThemeChanger defaultTheme="dark" />
          </a>
        </nav>
      </div>
    </header>
  )
}
