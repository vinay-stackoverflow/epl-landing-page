const schedule = [
  {
    time: '20 Jun · EPAM Office',
    title: 'Player Auction — Bidding Session',
    description:
      'The grand auction kicks off at the Bangalore EPAM office! Over 150 players go under the hammer as team owners and captains battle it out to build their dream squads. Expect bidding wars, strategic picks, and nail-biting moments.',
    type: 'highlight',
  },
  {
    time: '27 Jun · VKCA',
    title: 'Opening Ceremony & Season 8 Kick-off',
    description:
      'A grand opening ceremony to mark the start of EPAM Premiere League Season 8 at VKCA, Yelahanka. Prepare for an unforgettable cricketing experience.',
    type: 'ceremony',
  },
  {
    time: '27 Jun · VKCA',
    title: 'Season 8 Matches — Day 1',
    description:
      'The cricketing action gets underway! Teams take the field for the first matches of the season at VKCA, Yelahanka. May the best team win!',
    type: 'match',
  },
  {
    time: '28 Jun · VKCA',
    title: 'Season 8 Matches — Day 2 · Semi Finals & Final',
    description:
      'The ultimate showdown! The top teams battle it out in the Semi Finals before the two best sides clash in the Grand Final. Who will lift the EPL Season 8 trophy at VKCA, Yelahanka?',
    type: 'final',
  },
]

const typeLabel = {
  highlight: { label: 'Auction', color: 'tag-talk' },
  match: { label: 'Match', color: 'tag-workshop' },
  ceremony: { label: 'Ceremony', color: 'tag-break' },
  final: { label: 'Final', color: 'tag-final' },
}

function Program() {
  return (
    <section className="program">
      <div className="container">
        <h2 className="section-title">Event Program</h2>
        <p className="section-subtitle">20th June · EPAM Bangalore Office &nbsp;|&nbsp; 27th & 28th June · VKCA, Yelahanka</p>

        <div className="program-layout">
          {/* Player image column */}
          <div className="program-image-col">
            <div className="program-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=80&fit=crop&crop=center"
                alt="Cricket players in batting stance"
                className="program-image"
              />
              <div className="program-image-overlay">
                <span className="program-image-label">🏏 Season 8 · VKCA, Yelahanka</span>
              </div>
            </div>
          </div>

          {/* Timeline column */}
          <div className="timeline">
            {schedule.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-time">{item.time}</div>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <h3>{item.title}</h3>
                    <span className={`tag ${typeLabel[item.type].color}`}>
                      {typeLabel[item.type].label}
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
