import { useRef, useState } from 'react'
import { products, categories, fmt } from '../data.js'
import { useApp } from '../store.jsx'
import DrinkArt from './DrinkArt.jsx'
import Icon from './Icons.jsx'

export default function BestSellers() {
  const [cat, setCat] = useState('Hammasi')
  const track = useRef(null)
  const { addToCart } = useApp()

  const list = cat === 'Hammasi' ? products : products.filter((p) => p.cat === cat)

  const scroll = (dir) => {
    const el = track.current
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  const pick = (c) => {
    setCat(c)
    if (track.current) track.current.scrollTo({ left: 0 })
  }

  return (
    <section id="menyu" className="best">
      <div className="container">
        <h2 className="center">Eng ko'p sotiladiganlar</h2>

        <div className="tabs-row">
          <button className="sq-btn" onClick={() => scroll(-1)} aria-label="Oldingisi"><Icon name="back" size={18} /></button>
          <div className="tabs" role="tablist" aria-label="Kategoriyalar">
            {categories.map((c) => (
              <button key={c} role="tab" aria-selected={cat === c} className={cat === c ? 'is-on' : ''} onClick={() => pick(c)}>
                {c}
              </button>
            ))}
          </div>
          <button className="sq-btn dark" onClick={() => scroll(1)} aria-label="Keyingisi"><Icon name="arrow" size={18} /></button>
        </div>

        <ul className="track" ref={track}>
          {list.map((p) => (
            <li key={p.id} className="pcard">
              <div className="pframe">
                <DrinkArt art={p.art} />
              </div>
              <h3>{p.name}</h3>
              <p className="pdesc">{p.desc}</p>
              <p className="pprice">{fmt(p.price)} so'm</p>
              <button className="order" onClick={() => addToCart(p.id)}>Buyurtma berish</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
