import { useEffect, useState } from 'react'
import { reviews } from '../data.js'
import Icon, { Stars } from './Icons.jsx'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = reviews.length
  const go = (d) => setI((v) => (v + d + n) % n)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setI((v) => (v + 1) % n), 6000)
    return () => clearInterval(t)
  }, [paused, n])

  const r = reviews[i]
  return (
    <section className="reviews">
      <div className="container">
        <h2 className="center">Mijozlarimiz fikri</h2>
        <div
          className="rev-row"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <button className="sq-btn" onClick={() => go(-1)} aria-label="Oldingi fikr"><Icon name="back" size={18} /></button>
          <figure className="rev-card" aria-live="polite" key={i}>
            <span className="avatar" aria-hidden="true">{r.name[0]}</span>
            <blockquote>{r.text}</blockquote>
            <Stars />
            <figcaption><strong>{r.name}</strong><span>{r.role}</span></figcaption>
          </figure>
          <button className="sq-btn dark" onClick={() => go(1)} aria-label="Keyingi fikr"><Icon name="arrow" size={18} /></button>
        </div>
        <div className="dots">
          {reviews.map((_, k) => (
            <button key={k} className={k === i ? 'is-on' : ''} onClick={() => setI(k)} aria-label={`${k + 1}-fikr`} />
          ))}
        </div>
      </div>
    </section>
  )
}
