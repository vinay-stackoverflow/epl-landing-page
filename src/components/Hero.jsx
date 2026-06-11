import { useState, useEffect } from 'react'

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

function pad(n) {
  return String(n).padStart(2, '0')
}

function Hero() {
  const timeLeft = useCountdown()

  const handleRegisterClick = () => {
    const section = document.getElementById('registration')
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  const floats = ['🏏', '🏏', '🎯', '🏆', '🏏', '⚡', '🏏', '🎯', '🏆', '🏏']

  return (
    <section className="hero">
      {/* bowling action background image */}
      <img
        src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=1400&q=85&fit=crop&crop=center"
        alt=""
        aria-hidden="true"
        className="hero-bg-image"
      />

      {/* floating cricket icons */}
      <div className="hero-floats">
        {floats.map((icon, i) => (
          <span key={i} className="hero-float">{icon}</span>
        ))}
      </div>

      <div className="hero-content">
        <span className="hero-badge">EPAM Premiere League · Season 8</span>
        <h1 className="hero-title">EPAM Premiere League Season 8</h1>
        <p className="hero-subtitle">The most awaited cricket tournament of the year is back!</p>
        <div className="hero-meta">
          <span className="hero-meta-item">
            <span className="hero-meta-icon">📅</span> 27th June 2026
          </span>
          <span className="hero-meta-item">
            <span className="hero-meta-icon">📍</span> VKCA, Yelahanka
          </span>
        </div>

        {/* Countdown Timer */}
        <div className="countdown-wrap">
          <p className="countdown-label">Registration closes · 19th June 2026, 11:59 PM</p>
          {timeLeft ? (
            <div className="countdown-timer">
              <div className="countdown-block">
                <span className="countdown-value">{pad(timeLeft.days)}</span>
                <span className="countdown-unit">Days</span>
              </div>
              <span className="countdown-sep">:</span>
              <div className="countdown-block">
                <span className="countdown-value">{pad(timeLeft.hours)}</span>
                <span className="countdown-unit">Hours</span>
              </div>
              <span className="countdown-sep">:</span>
              <div className="countdown-block">
                <span className="countdown-value">{pad(timeLeft.minutes)}</span>
                <span className="countdown-unit">Mins</span>
              </div>
              <span className="countdown-sep">:</span>
              <div className="countdown-block">
                <span className="countdown-value">{pad(timeLeft.seconds)}</span>
                <span className="countdown-unit">Secs</span>
              </div>
            </div>
          ) : (
            <div className="countdown-ended">🏏 Registration Closed · Event Started!</div>
          )}
        </div>

        <button className="btn-primary" onClick={handleRegisterClick}>
          Register Now
        </button>
      </div>
    </section>
  )
}

export default Hero

