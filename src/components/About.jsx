import { useLang } from '../LanguageContext'
import translations from '../translations'

function About() {
  const { lang } = useLang()
  const t = translations[lang].about

  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <span className="highlight-icon">🏏</span>
              <h3>{t.h1}</h3>
              <p>{t.p_h1}</p>
            </div>
            <div className="highlight-card">
              <span className="highlight-icon">⚡</span>
              <h3>{t.h2}</h3>
              <p>{t.p_h2}</p>
            </div>
            <div className="highlight-card">
              <span className="highlight-icon">🏆</span>
              <h3>{t.h3}</h3>
              <p>{t.p_h3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
