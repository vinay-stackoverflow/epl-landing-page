const schedule = [
  {
    time: '09:00 – 09:30',
    title: 'Doors Open & Welcome Coffee',
    description: 'Arrive, grab a drink, and meet fellow attendees.',
    type: 'break',
  },
  {
    time: '09:30 – 10:15',
    title: 'Opening Keynote: Building Communities That Last',
    description: 'An inspiring talk on what makes communities thrive over the long term.',
    type: 'talk',
  },
  {
    time: '10:30 – 11:30',
    title: 'Workshop: From Idea to Action in 60 Minutes',
    description: 'A hands-on session where you turn a rough idea into a concrete first step.',
    type: 'workshop',
  },
  {
    time: '12:00 – 13:00',
    title: 'Lunch & Open Networking',
    description: 'Shared lunch with structured icebreakers to help you connect.',
    type: 'break',
  },
  {
    time: '13:00 – 14:00',
    title: 'Panel: Real Stories from Local Changemakers',
    description: 'Four community leaders share wins, failures, and lessons learned.',
    type: 'talk',
  },
  {
    time: '14:15 – 15:00',
    title: 'Lightning Talks: 5 Ideas in 5 Minutes Each',
    description: 'Short, punchy talks on topics chosen by the community.',
    type: 'talk',
  },
  {
    time: '15:15 – 16:00',
    title: 'Closing Fireside Chat & Next Steps',
    description: 'Wrap up, key takeaways, and how to stay involved after today.',
    type: 'talk',
  },
]

const typeLabel = {
  talk: { label: 'Talk', color: 'tag-talk' },
  workshop: { label: 'Workshop', color: 'tag-workshop' },
  break: { label: 'Break', color: 'tag-break' },
}

function Program() {
  return (
    <section className="program">
      <div className="container">
        <h2 className="section-title">Program</h2>
        <p className="section-subtitle">Saturday, July 19 · Kyiv Creative Hub</p>
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
    </section>
  )
}

export default Program
