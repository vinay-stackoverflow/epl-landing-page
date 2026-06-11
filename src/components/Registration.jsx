import { useState } from 'react'

function Registration() {
  const [form, setForm] = useState({ name: '', email: '', company: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Please enter your full name.'
    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email address.'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!form.company.trim()) newErrors.company = 'Please enter your company or organization.'
    return newErrors
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setSubmitted(true)
  }

  return (
    <section className="registration" id="registration">
      {/* bowling action watermark */}
      <img
        src="https://images.unsplash.com/photo-1624971517477-2db26bdf4e65?w=900&q=60&fit=crop&crop=center"
        alt=""
        aria-hidden="true"
        className="registration-watermark"
      />
      <div className="container">
        <h2 className="section-title">Register</h2>
        <p className="section-subtitle">Secure your spot for EPL Season 8 — 20th, 27th & 28th June 2026</p>

        {submitted ? (
          <div className="success-message">
            <span className="success-icon">🎉</span>
            <h3>You're registered!</h3>
            <p>
              Welcome to EPAM Premiere League Season 8! Auction is on 20th June, and matches are on
              27th & 28th June 2026 at VKCA, Yelahanka. For any queries, contact us at{' '}
              <a href="mailto:epltournament@epam.com">epltournament@epam.com</a>.
            </p>
          </div>
        ) : (
          <form className="reg-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="e.g. Rahul Sharma"
                value={form.name}
                onChange={handleChange}
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="e.g. rahul.sharma@epam.com"
                value={form.email}
                onChange={handleChange}
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="company">Company / Organization</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="e.g. EPAM Systems"
                value={form.company}
                onChange={handleChange}
                className={errors.company ? 'input-error' : ''}
              />
              {errors.company && <span className="error-text">{errors.company}</span>}
            </div>

            <button type="submit" className="btn-primary btn-submit">
              Secure My Spot
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Registration
