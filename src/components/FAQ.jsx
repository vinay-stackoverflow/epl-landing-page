import { useState } from 'react'

const faqs = [
  {
    question: 'What is the EPAM Premiere League (EPL)?',
    answer:
      'The EPAM Premiere League is an internal cricket tournament organised for EPAM employees. Season 8 is the latest and most exciting edition yet, featuring over 150 players competing across teams assembled through a live auction.',
  },
  {
    question: 'Where and when is the event taking place?',
    answer:
      'EPL Season 8 spans three dates: the Grand Auction is on 20th June 2026, and the matches are held on 27th and 28th June 2026 at VKCA, Yelahanka.',
  },
  {
    question: 'How does the auction work?',
    answer:
      'In the auction, over 150 registered players are put up for bidding. Team owners and captains place bids to recruit players into their squads. The highest bidder wins the player. Expect fierce competition and last-second drama!',
  },
  {
    question: 'Who can participate as a player?',
    answer:
      'All EPAM employees are eligible to register as players for EPL Season 8. Once registered, you enter the player pool and will be available for bidding at the Grand Auction.',
  },
  {
    question: 'Who do I contact if I have questions?',
    answer:
      'For any queries, please reach out to the tournament team at epltournament@epam.com. We are happy to help!',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Have questions? Reach us at epltournament@epam.com</p>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              className={`faq-item ${openIndex === index ? 'faq-item--open' : ''}`}
              key={index}
            >
              <button className="faq-question" onClick={() => toggle(index)}>
                <span>{item.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
