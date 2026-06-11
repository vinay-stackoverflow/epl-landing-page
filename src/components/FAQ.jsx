import { useState } from 'react'
import { useLang } from '../LanguageContext'
import translations from '../translations'

function FAQ() {
  const { lang } = useLang()
  const t = translations[lang].faq
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index)

  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
        <div className="faq-list">
          {t.list.map((item, index) => (
            <div
              className={`faq-item ${openIndex === index ? 'faq-item--open' : ''}`}
              key={index}
            >
              <button className="faq-question" onClick={() => toggle(index)}>
                <span>{item.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer"><p>{item.answer}</p></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
