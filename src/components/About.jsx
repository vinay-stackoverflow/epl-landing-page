function About() {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About the Event</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Together We Grow is a one-day community meetup designed for curious minds who love
              learning, sharing, and connecting with like-minded people. Whether you're a seasoned
              professional or just starting your journey, this event is your place to belong.
            </p>
            <p>
              We bring together speakers, practitioners, and enthusiasts from across the region to
              share stories, practical knowledge, and fresh ideas. Expect inspiring talks, hands-on
              workshops, and plenty of time for open conversations over coffee.
            </p>
            <p>
              Our goal is simple: build a stronger local community where everyone feels welcome to
              contribute, ask questions, and grow together. Come as you are — leave with new friends,
              new skills, and new motivation.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <span className="highlight-icon">🎤</span>
              <h3>10+ Speakers</h3>
              <p>Local and regional experts sharing real-world experience</p>
            </div>
            <div className="highlight-card">
              <span className="highlight-icon">🤝</span>
              <h3>Open Networking</h3>
              <p>Dedicated time to connect, chat, and exchange ideas</p>
            </div>
            <div className="highlight-card">
              <span className="highlight-icon">🛠️</span>
              <h3>Workshops</h3>
              <p>Hands-on sessions you can apply the very next day</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
