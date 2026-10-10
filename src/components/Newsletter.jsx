import { useState } from 'react'
import { useApp } from '../store.jsx'
import Icon from './Icons.jsx'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [err, setErr] = useState('')
  const { notify } = useApp()

  const submit = (e) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErr("To'g'ri email kiriting, masalan: ism@mail.uz")
      return
    }
    setErr('')
    setEmail('')
    notify("Obuna bo'ldingiz. Rahmat!")
  }

  return (
    <section className="news">
      <div className="container news-grid">
        <h2>Yangiliklar va chegirmalardan xabardor bo'ling.</h2>
        <form onSubmit={submit} noValidate>
          <p>Yangi menyu, aksiyalar va tadbirlar haqida birinchilardan bo'lib biling.</p>
          <div className="news-field">
            <label htmlFor="email" className="sr">Email manzilingiz</label>
            <input
              id="email"
              type="email"
              placeholder="Email manzilingiz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={!!err}
              aria-describedby={err ? 'email-err' : undefined}
            />
            <button type="submit" aria-label="Obuna bo'lish"><Icon name="arrow" /></button>
          </div>
          {err && <p id="email-err" className="err" role="alert">{err}</p>}
        </form>
      </div>
    </section>
  )
}
