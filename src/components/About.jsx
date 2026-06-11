function About() {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About the Event</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Welcome back to the EPAM Premiere League — the most awaited tournament of the year!
              Season 8 is here, and it's set to be bigger, bolder, and more exciting than ever before.
            </p>
            <p>
              The 7th Season of EPAM Premiere League (EPL) is kicking off with the most electrifying
              event of the year — <strong>THE AUCTION!</strong> Get ready to witness over 150 players
              go under the hammer, as team owners and captains battle it out to build their dream squads.
            </p>
            <p>
              Expect surprises, bidding wars, strategic picks, and nail-biting moments as the fate of
              players will be sealed in just a matter of seconds. Don't miss your chance to be part
              of cricket history at VKCA, Yelahanka!
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <span className="highlight-icon">🏏</span>
              <h3>150+ Players</h3>
              <p>Watch over 150 talented players go under the hammer at the grand auction</p>
            </div>
            <div className="highlight-card">
              <span className="highlight-icon">⚡</span>
              <h3>Epic Bidding Wars</h3>
              <p>Team owners and captains compete fiercely to build their dream squads</p>
            </div>
            <div className="highlight-card">
              <span className="highlight-icon">🏆</span>
              <h3>Season 8</h3>
              <p>The most awaited edition of the EPAM Premiere League is finally here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
