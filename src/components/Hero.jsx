import { useEffect, useState } from 'react'

function CountUp({ to, suffix = '' }) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setV(to); return }
    let raf
    const start = performance.now()
    const tick = (t) => {
      const p = Math.min((t - start) / 1400, 1)
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to])
  return <>{v}{suffix}</>
}

const Bean = ({ className }) => (
  <svg className={`hbean ${className}`} viewBox="0 0 40 56" aria-hidden="true">
    <ellipse cx="20" cy="28" rx="17" ry="25" fill="#4a2a14" />
    <path d="M20 5c-6 12 6 20 0 46" fill="none" stroke="#17100a" strokeWidth="3" strokeLinecap="round" />
  </svg>
)

export default function Hero() {
  return (
    <section id="bosh-sahifa" className="hero">
      <span className="watermark" aria-hidden="true">Qahva</span>
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1>Mukammal qahva san'atini kashf eting</h1>
          <p>
            Boy va jo'shqin ta'mlar, o'zimiz qovurgan donalar va ehtiyotkorlik bilan
            tayyorlangan ichimliklar. Kuningizni yaxshi qahva bilan boshlang.
          </p>
          <div className="hero-actions">
            <a href="#menyu" className="btn btn-light">
              Buyurtma berish <span className="arr">→</span>
            </a>
            <a href="#biz-haqimizda" className="btn btn-outline">Batafsil</a>
          </div>
          <dl className="hero-stats">
            <div><dt><CountUp to={50} suffix="+" /></dt><dd>qahva turi</dd></div>
            <div><dt><CountUp to={20} suffix="+" /></dt><dd>faol buyurtma</dd></div>
            <div><dt><CountUp to={5} suffix="k+" /></dt><dd>mamnun mijoz</dd></div>
          </dl>
        </div>

        <div className="hero-art" aria-hidden="true">
          <Bean className="b1" />
          <Bean className="b2" />
          <Bean className="b3" />
          <svg viewBox="0 0 400 400" className="cup">
            <g fill="none" stroke="#f1e3ce" strokeWidth="8" strokeLinecap="round" opacity=".5" className="steam">
              <path d="M150 150c-16 22 16 30 0 56" />
              <path d="M205 135c-16 22 16 30 0 56" />
              <path d="M260 150c-16 22 16 30 0 56" />
            </g>
            <path d="M120 250c-10-20-4-34 6-44M285 250c10-20 4-34-6-44M205 232c0-18 6-26 10-34" fill="none" stroke="#d4ae85" strokeWidth="6" strokeLinecap="round" opacity=".7" />
            <ellipse cx="205" cy="345" rx="150" ry="24" fill="#000" opacity=".35" />
            <ellipse cx="205" cy="330" rx="140" ry="22" fill="#e8dcc4" />
            <path d="M90 232h230v44a115 85 0 0 1-230 0z" fill="#fff8ee" />
            <path d="M320 250h22a36 36 0 0 1 0 72h-30" fill="none" stroke="#fff8ee" strokeWidth="17" />
            <ellipse cx="205" cy="232" rx="115" ry="22" fill="#fff8ee" />
            <ellipse cx="205" cy="232" rx="100" ry="16" fill="#3b2314" />
            <ellipse cx="205" cy="230" rx="78" ry="10" fill="#6b3e1e" />
            <path d="M115 285c0 50 42 78 90 78" fill="none" stroke="#e4d2b8" strokeWidth="6" strokeLinecap="round" opacity=".7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
