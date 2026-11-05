import { useState } from 'react'
import { WEB3FORMS } from '../data/content'

export default function InquiryForm({ accessKey, subject, fields, buttonLabel, successMessage }) {
  const [status, setStatus] = useState('idle')
  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const values = Object.fromEntries(new FormData(form))
    setStatus('sending')
    try {
      if (!accessKey) throw new Error('Form key not configured')
      const response = await fetch(WEB3FORMS.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, access_key: accessKey, subject }),
      })
      const result = await response.json()
      if (!result.success) throw new Error('Submission failed')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }
  const inputClass = 'mt-2 w-full border border-steel/20 bg-void px-4 py-3 text-white outline-none transition-colors focus:border-ember disabled:opacity-50'
  return (
    <form action={WEB3FORMS.endpoint} method="POST" onSubmit={handleSubmit} className="hud-corner border border-ember/20 bg-panel-light p-6 md:p-8">
      <input type="hidden" name="access_key" value={accessKey} />
      <input type="hidden" name="subject" value={subject} />
      <div className="space-y-5">
        {fields.map(({ name, label, type = 'text', options }) => (
          <label key={name} className="block">
            <span className="font-mono text-[10px] tracking-[0.2em] text-steel uppercase">{label}</span>
            {type === 'textarea' ? (
              <textarea name={name} required rows={5} disabled={status === 'sending'} className={inputClass} />
            ) : options ? (
              <select name={name} required disabled={status === 'sending'} className={inputClass} defaultValue="">
                <option value="" disabled>Select a topic</option>
                {options.map(option => <option key={option}>{option}</option>)}
              </select>
            ) : (
              <input name={name} type={type} required disabled={status === 'sending'} className={inputClass} />
            )}
          </label>
        ))}
      </div>
      <p role="status" className="mt-4 text-sm text-white">
        {status === 'success' && successMessage}
        {status === 'error' && 'Something went wrong. Please try again or email surgeonmuaythai@gmail.com.'}
      </p>
      <button type="submit" disabled={status === 'sending'} className="mt-4 w-full rounded-lg bg-ember px-6 py-3.5 font-display text-lg tracking-wider text-white uppercase transition-colors hover:bg-ember-glow disabled:opacity-60">
        {status === 'sending' ? 'Sending...' : buttonLabel}
      </button>
    </form>
  )
}
