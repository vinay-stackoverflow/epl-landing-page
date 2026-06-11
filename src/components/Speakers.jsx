import { useLang } from '../LanguageContext'
import translations from '../translations'

function Speakers() {
  const { lang } = useLang()
  const t = translations[lang].speakers

  return (
    <section className="speakers">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
        <div className="speakers-grid">
          {t.list.map((speaker, index) => (
            <div className="speaker-card" key={index}>
              <div className="speaker-avatar" style={{ backgroundColor: speaker.color }}>
                {speaker.initials}
              </div>
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-role">{speaker.title}</p>
              <p className="speaker-company">{speaker.company}</p>
              <p className="speaker-bio">{speaker.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Speakers
