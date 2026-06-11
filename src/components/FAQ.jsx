import { useState } from 'react'

const faqs = [
  {
    question: 'Is the event free to attend?',
    answer:
      'Yes! Together We Grow is completely free. We believe great communities should be accessible to everyone. Just register your spot so we can plan the right amount of food and materials.',
  },
  {
    question: 'Do I need any special skills or background?',
    answer:
      'Not at all. This event welcomes everyone — from total beginners to experienced professionals. If you are curious and open to connecting with others, you are in the right place.',
  },
  {
    question: 'Where exactly is the venue?',
    answer:
      'The event takes place at Kyiv Creative Hub, 14 Velyka Vasylkivska Street, Kyiv. It is a 5-minute walk from Olimpiiska metro station. Detailed directions will be sent by email after you register.',
  },
  {
    question: 'What should I bring?',
    answer:
      'Just yourself and your curiosity! You may want to bring a notebook and pen for the workshops. Lunch and coffee are provided. If you have a project or idea you would like to share, bring materials for that too.',
  },
  {
    question: 'Will the talks be recorded?',
    answer:
      'We plan to record the main stage talks and share them on our community channel within two weeks of the event. Workshop sessions will not be recorded to keep them interactive and honest.',
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
        <p className="section-subtitle">Still have questions? We have answers.</p>
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
