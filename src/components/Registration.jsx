import { useState } from 'react'
import { useLang } from '../LanguageContext'
import translations from '../translations'

function Registration() {
  const { lang } = useLang()
  const t = translations[lang].registration

  const [form, setForm] = useState({ name: '', email: '', role: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = t.errorName
    if (!form.email.trim()) {
      newErrors.email = t.errorEmail
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = t.errorEmailInvalid
    }
    if (!form.role) newErrors.role = t.errorRole
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
      <img
        src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=900&q=60&fit=crop&crop=center"
        alt=""
        aria-hidden="true"
        className="registration-watermark"
      />
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>

        {submitted ? (
          <div className="success-message">
            <span className="success-icon">{t.successIcon}</span>
            <h3>{t.successTitle}</h3>
            <p>
              {t.successMsg}{' '}
              <a href="mailto:epltournament@epam.com">epltournament@epam.com</a>.
            </p>
          </div>
        ) : (
          <form className="reg-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">{t.labelName}</label>
              <input type="text" id="name" name="name" placeholder={t.placeholderName}
                value={form.name} onChange={handleChange}
                className={errors.name ? 'input-error' : ''} />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">{t.labelEmail}</label>
              <input type="email" id="email" name="email" placeholder={t.placeholderEmail}
                value={form.email} onChange={handleChange}
                className={errors.email ? 'input-error' : ''} />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="role">{t.labelRole}</label>
              <div className="role-options">
                {t.roles.map((role) => (
                  <label
                    key={role}
                    className={`role-option ${form.role === role ? 'role-option--selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={role}
                      checked={form.role === role}
                      onChange={handleChange}
                    />
                    {role}
                  </label>
                ))}
              </div>
              {errors.role && <span className="error-text">{errors.role}</span>}
            </div>

            <button type="submit" className="btn-primary btn-submit">{t.submitBtn}</button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Registration
