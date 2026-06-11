import { useState, useEffect } from 'react'
import { useLang } from '../LanguageContext'
import translations from '../translations'

const DEADLINE = new Date('2026-06-19T23:59:00')

function useCountdown() {
  const getTimeLeft = () => {
    const diff = DEADLINE - new Date()
    if (diff <= 0) return null
    const totalSeconds = Math.floor(diff / 1000)
    const days    = Math.floor(totalSeconds / 86400)
    const hours   = Math.floor((totalSeconds % 86400) / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    return { days, hours, minutes, seconds }
  }
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])
  return timeLeft
}

function pad(n) { return String(n).padStart(2, '0') }

function Hero() {
  const { lang } = useLang()
  const t = translations[lang].hero
  const timeLeft = useCountdown()

  const handleRegisterClick = () => {
    const section = document.getElementById('registration')
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  const floats = ['🏏', '🏏', '🎯', '🏆', '🏏', '⚡', '🏏', '🎯', '🏆', '🏏']

  return (
    <section className="hero">
      <img
        src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=1400&q=85&fit=crop&crop=center"
        alt=""
        aria-hidden="true"
        className="hero-bg-image"
      />
      <div className="hero-floats">
        {floats.map((icon, i) => (
          <span key={i} className="hero-float">{icon}</span>
        ))}
      </div>
      <div className="hero-content">
        <span className="hero-badge">{t.badge}</span>
        <h1 className="hero-title">{t.title}</h1>
        <p className="hero-subtitle">{t.subtitle}</p>
        <div className="hero-meta">
          <span className="hero-meta-item"><span className="hero-meta-icon">📅</span> {t.date}</span>
          <span className="hero-meta-item"><span className="hero-meta-icon">📍</span> {t.location}</span>
          <span className="hero-meta-item hero-meta-register" onClick={handleRegisterClick}>
            <span className="hero-meta-icon">📝</span> {t.registerHere}
          </span>
        </div>
        <div className="countdown-wrap">
          <p className="countdown-label">{t.countdownLabel}</p>
          {timeLeft ? (
            <div className="countdown-timer">
              <div className="countdown-block">
                <span className="countdown-value">{pad(timeLeft.days)}</span>
                <span className="countdown-unit">{t.days}</span>
              </div>
              <span className="countdown-sep">:</span>
              <div className="countdown-block">
                <span className="countdown-value">{pad(timeLeft.hours)}</span>
                <span className="countdown-unit">{t.hours}</span>
              </div>
              <span className="countdown-sep">:</span>
              <div className="countdown-block">
                <span className="countdown-value">{pad(timeLeft.minutes)}</span>
                <span className="countdown-unit">{t.mins}</span>
              </div>
              <span className="countdown-sep">:</span>
              <div className="countdown-block">
                <span className="countdown-value">{pad(timeLeft.seconds)}</span>
                <span className="countdown-unit">{t.secs}</span>
              </div>
            </div>
          ) : (
            <div className="countdown-ended">{t.ended}</div>
          )}
        </div>
        <button className="btn-primary" onClick={handleRegisterClick}>{t.registerBtn}</button>
      </div>
    </section>
  )
}

export default Hero
