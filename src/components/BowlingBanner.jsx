import { useLang } from '../LanguageContext'
import translations from '../translations'

function BowlingBanner() {
  const { lang } = useLang()
  const t = translations[lang].banner

  return (
    <div className="bowling-banner">
      <img
        src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=1400&q=85&fit=crop&crop=center"
        alt="Cricketer in bowling action"
        className="bowling-banner-img"
      />
      <div className="bowling-banner-overlay">
        <span className="bowling-banner-label">{t.label}</span>
      </div>
    </div>
  )
}

export default BowlingBanner
