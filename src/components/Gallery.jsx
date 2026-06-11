import { useState } from 'react'
import { useLang } from '../LanguageContext'
import translations from '../translations'

// All 7 images verified as cricket-specific from Pexels
const seasonImages = [
  { src: 'https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?auto=compress&cs=tinysrgb&w=800', thumb: 'https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { src: 'https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=800', thumb: 'https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { src: 'https://images.pexels.com/photos/3602833/pexels-photo-3602833.jpeg?auto=compress&cs=tinysrgb&w=800', thumb: 'https://images.pexels.com/photos/3602833/pexels-photo-3602833.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { src: 'https://images.pexels.com/photos/3718433/pexels-photo-3718433.jpeg?auto=compress&cs=tinysrgb&w=800', thumb: 'https://images.pexels.com/photos/3718433/pexels-photo-3718433.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { src: 'https://images.pexels.com/photos/8422410/pexels-photo-8422410.jpeg?auto=compress&cs=tinysrgb&w=800', thumb: 'https://images.pexels.com/photos/8422410/pexels-photo-8422410.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { src: 'https://images.pexels.com/photos/9828007/pexels-photo-9828007.jpeg?auto=compress&cs=tinysrgb&w=800', thumb: 'https://images.pexels.com/photos/9828007/pexels-photo-9828007.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { src: 'https://images.pexels.com/photos/13509805/pexels-photo-13509805.jpeg?auto=compress&cs=tinysrgb&w=800', thumb: 'https://images.pexels.com/photos/13509805/pexels-photo-13509805.jpeg?auto=compress&cs=tinysrgb&w=400' },
]

function Gallery() {
  const { lang } = useLang()
  const t = translations[lang].gallery
  const [lightbox, setLightbox] = useState(null) // index or null

  const open = (i) => setLightbox(i)
  const close = () => setLightbox(null)
  const prev = () => setLightbox((lightbox + 6) % 7)
  const next = () => setLightbox((lightbox + 1) % 7)

  return (
    <section className="gallery">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>

        <div className="gallery-grid">
          {seasonImages.map((img, i) => (
            <button
              key={i}
              className="gallery-item"
              onClick={() => open(i)}
              aria-label={t.seasons[i]}
            >
              <img src={img.thumb} alt={t.seasons[i]} className="gallery-img" loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-season-label">{t.seasons[i]}</span>
                <span className="gallery-zoom-icon">🔍</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox" onClick={close}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={close} aria-label={t.close}>✕</button>
            <button className="lightbox-nav lightbox-prev" onClick={prev} aria-label="Previous">‹</button>
            <img
              src={seasonImages[lightbox].src}
              alt={t.seasons[lightbox]}
              className="lightbox-img"
            />
            <button className="lightbox-nav lightbox-next" onClick={next} aria-label="Next">›</button>
            <div className="lightbox-caption">{t.seasons[lightbox]}</div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
