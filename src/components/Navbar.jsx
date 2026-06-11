import { useState, useRef, useEffect } from 'react'
import { useLang } from '../LanguageContext'
import translations from '../translations'

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'sa', label: 'संस्कृतम्' },
  { code: 'kn', label: 'ಕನ್ನಡ' },
]

function Navbar() {
  const { lang, setLang } = useLang()
  const t = translations[lang].nav
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const current = LANGUAGES.find(l => l.code === lang)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <span className="navbar-brand">🏏 {t.title}</span>
        <div className="lang-dropdown" ref={ref}>
          <button
            className="lang-switcher"
            onClick={() => setOpen(o => !o)}
            aria-label="Switch language"
            aria-expanded={open}
          >
            <span className="lang-icon">🌐</span>
            {current.label}
            <span className="lang-caret">{open ? '▲' : '▼'}</span>
          </button>
          {open && (
            <ul className="lang-menu" role="listbox">
              {LANGUAGES.map(l => (
                <li key={l.code}>
                  <button
                    className={`lang-menu-item ${lang === l.code ? 'lang-menu-item--active' : ''}`}
                    onClick={() => { setLang(l.code); setOpen(false) }}
                    role="option"
                    aria-selected={lang === l.code}
                  >
                    {lang === l.code && <span className="lang-check">✓</span>}
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
