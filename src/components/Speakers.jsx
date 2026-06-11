const speakers = [
  {
    name: 'Tournament Committee',
    title: 'Organising Team',
    company: 'EPAM Premiere League',
    bio: 'The dedicated team behind EPL Season 8, working tirelessly to make the tournament bigger and better every year.',
    initials: 'TC',
    color: '#f97316',
  },
  {
    name: 'Team Owners',
    title: 'Franchise Owners',
    company: 'EPL Season 8',
    bio: 'The team owners bring passion, strategy, and competitive spirit to the auction table, battling to assemble the strongest squad possible.',
    initials: 'TO',
    color: '#fbbf24',
  },
  {
    name: 'Team Captains',
    title: 'On-field Leaders',
    company: 'EPL Season 8',
    bio: 'Captains play a crucial role in the auction, handpicking players who fit their game plan and leading their teams to glory on the field.',
    initials: 'TC',
    color: '#fb923c',
  },
  {
    name: 'EPL Players Pool',
    title: '150+ Registered Players',
    company: 'EPAM Yelahanka',
    bio: 'Over 150 talented cricketers registered for Season 8, each waiting to hear their name called at the grand auction.',
    initials: 'PP',
    color: '#f59e0b',
  },
]

function Speakers() {
  return (
    <section className="speakers">
      <div className="container">
        <h2 className="section-title">Key Participants</h2>
        <p className="section-subtitle">The people who make EPL Season 8 happen</p>
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
