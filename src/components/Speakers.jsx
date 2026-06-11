const speakers = [
  {
    name: 'Olena Marchenko',
    title: 'Community Lead',
    company: 'Open Cities Initiative',
    bio: 'Olena has spent 8 years building grassroots communities across Ukraine. She believes every city deserves a thriving local tech scene.',
    initials: 'OM',
    color: '#f97316',
  },
  {
    name: 'Dmytro Koval',
    title: 'Product Designer',
    company: 'Freelance',
    bio: 'Dmytro helps non-profits and community projects create products people actually love to use. He is a regular speaker at local design meetups.',
    initials: 'DK',
    color: '#fbbf24',
  },
  {
    name: 'Sofia Bondarenko',
    title: 'Software Engineer',
    company: 'DevBridge',
    bio: 'Sofia is passionate about making tech more accessible. She runs coding workshops for beginners every month and mentors junior developers.',
    initials: 'SB',
    color: '#fb923c',
  },
  {
    name: 'Ivan Petrenko',
    title: 'Social Entrepreneur',
    company: 'GrowLocal',
    bio: 'Ivan founded GrowLocal to connect small businesses with their communities. He is on a mission to prove that local economies can thrive in a digital world.',
    initials: 'IP',
    color: '#f59e0b',
  },
]

function Speakers() {
  return (
    <section className="speakers">
      <div className="container">
        <h2 className="section-title">Speakers</h2>
        <p className="section-subtitle">Meet the people sharing their stories with you</p>
        <div className="speakers-grid">
          {speakers.map((speaker, index) => (
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
