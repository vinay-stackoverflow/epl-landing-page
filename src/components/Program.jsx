import { useLang } from '../LanguageContext'
import translations from '../translations'

const tagColors = {
  highlight: 'tag-talk',
  match: 'tag-workshop',
  ceremony: 'tag-break',
  final: 'tag-final',
}

function Program() {
  const { lang } = useLang()
  const t = translations[lang].program

  return (
    <section className="program">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>

        <div className="program-layout">
          <div className="program-image-col">
            <div className="program-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=80&fit=crop&crop=center"
                alt="Cricket players in batting stance"
                className="program-image"
              />
              <div className="program-image-overlay">
                <span className="program-image-label">{t.imageLabel}</span>
              </div>
            </div>
          </div>

          <div className="timeline">
            {t.schedule.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-time">{item.time}</div>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <h3>{item.title}</h3>
                    <span className={`tag ${tagColors[item.type]}`}>
                      {t.tags[item.type]}
                    </span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Program
