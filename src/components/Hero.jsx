function Hero() {
  const handleRegisterClick = () => {
    const section = document.getElementById('registration')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">Community Event 2026</span>
        <h1 className="hero-title">Together We Grow</h1>
        <p className="hero-subtitle">A warm gathering for makers, learners, and doers</p>
        <div className="hero-meta">
          <span className="hero-meta-item">
            <span className="hero-meta-icon">📅</span> July 19, 2026
          </span>
          <span className="hero-meta-item">
            <span className="hero-meta-icon">📍</span> Kyiv Creative Hub, Ukraine
          </span>
        </div>
        <button className="btn-primary" onClick={handleRegisterClick}>
          Register Now
        </button>
      </div>
    </section>
  )
}

export default Hero
