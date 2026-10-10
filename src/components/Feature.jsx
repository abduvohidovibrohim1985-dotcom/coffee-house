import DrinkArt from './DrinkArt.jsx'

export default function Feature({ id, title, text, art, flip, tilt = -5, label }) {
  return (
    <section id={id} className={`feature ${flip ? 'is-flip' : ''}`}>
      <svg className="bg-bean" viewBox="0 0 400 400" aria-hidden="true">
        <path d="M80 330C40 200 140 60 330 60c-10 140-80 260-250 270z" fill="currentColor" />
      </svg>
      <div className="container feature-grid">
        <div className="feature-media">
          <svg className="tri" viewBox="0 0 200 200" aria-hidden="true">
            <path d="M10 190L100 10l90 180z" fill="none" stroke="#17100a" strokeWidth="1.5" />
          </svg>
          <figure className="frame" style={{ '--tilt': `${tilt}deg` }}>
            <DrinkArt art={art} />
            <figcaption>{label}</figcaption>
          </figure>
        </div>
        <div className="feature-copy">
          <h2>{title}</h2>
          {text.map((t, i) => <p key={i}>{t}</p>)}
          <a href="#menyu" className="btn btn-dark">
            Hammasini ko'rish <span className="arr">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
