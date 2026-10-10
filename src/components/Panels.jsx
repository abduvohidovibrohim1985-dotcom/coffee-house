import { useEffect, useRef, useState } from 'react'
import { products, fmt } from '../data.js'
import { useApp } from '../store.jsx'
import Icon from './Icons.jsx'

function Overlay({ onClose, label, side, children }) {
  const ref = useRef(null)
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    ref.current?.focus()
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])
  return (
    <div className="overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className={`sheet ${side ? 'is-side' : ''}`} role="dialog" aria-modal="true" aria-label={label} tabIndex={-1} ref={ref}>
        <button className="sheet-close icon-btn" onClick={onClose} aria-label="Yopish"><Icon name="close" /></button>
        {children}
      </div>
    </div>
  )
}

function Cart({ onClose }) {
  const { cart, dispatch, total, notify } = useApp()
  const order = () => {
    dispatch({ type: 'clear' })
    onClose()
    notify('Buyurtmangiz qabul qilindi. Tez orada tayyor bo\'ladi!')
  }
  return (
    <Overlay onClose={onClose} label="Savat" side>
      <h2>Savat</h2>
      {cart.length === 0 ? (
        <p className="empty">Savat bo'sh. Menyudan ichimlik tanlang.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((it) => {
              const p = products.find((x) => x.id === it.id)
              return (
                <li key={it.id}>
                  <div>
                    <strong>{p.name}</strong>
                    <span>{fmt(p.price * it.qty)} so'm</span>
                  </div>
                  <div className="qty">
                    <button onClick={() => dispatch({ type: 'dec', id: it.id })} aria-label={`${p.name} kamaytirish`}>−</button>
                    <b>{it.qty}</b>
                    <button onClick={() => dispatch({ type: 'inc', id: it.id })} aria-label={`${p.name} ko'paytirish`}>+</button>
                  </div>
                </li>
              )
            })}
          </ul>
          <div className="cart-total"><span>Jami</span><strong>{fmt(total)} so'm</strong></div>
          <button className="btn btn-dark wide" onClick={order}>Buyurtmani tasdiqlash</button>
          <button className="link-dark" onClick={() => dispatch({ type: 'clear' })}>Savatni tozalash</button>
        </>
      )}
    </Overlay>
  )
}

function Search({ onClose }) {
  const [q, setQ] = useState('')
  const { addToCart } = useApp()
  const res = q.trim()
    ? products.filter((p) => (p.name + ' ' + p.cat + ' ' + p.desc).toLowerCase().includes(q.trim().toLowerCase()))
    : []
  return (
    <Overlay onClose={onClose} label="Qidirish">
      <h2>Menyudan qidirish</h2>
      <input className="field" autoFocus placeholder="Masalan: latte" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Qidiruv" />
      <ul className="cart-list">
        {res.map((p) => (
          <li key={p.id}>
            <div><strong>{p.name}</strong><span>{p.cat} · {fmt(p.price)} so'm</span></div>
            <button className="mini" onClick={() => addToCart(p.id)}>Qo'shish</button>
          </li>
        ))}
      </ul>
      {q.trim() && res.length === 0 && <p className="empty">"{q}" bo'yicha hech narsa topilmadi. Boshqa so'z bilan urinib ko'ring.</p>}
      {!q.trim() && <p className="empty">Ichimlik nomini yozing.</p>}
    </Overlay>
  )
}

function Auth({ onClose }) {
  const { setUser, notify } = useApp()
  const [f, setF] = useState({ name: '', email: '', pass: '' })
  const [errs, setErrs] = useState({})
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const er = {}
    if (f.name.trim().length < 2) er.name = 'Ismingizni kiriting'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) er.email = "To'g'ri email kiriting"
    if (f.pass.length < 6) er.pass = 'Parol kamida 6 belgi bo\'lsin'
    setErrs(er)
    if (Object.keys(er).length) return
    setUser({ name: f.name.trim(), email: f.email })
    onClose()
    notify(`Xush kelibsiz, ${f.name.trim().split(' ')[0]}!`)
  }

  return (
    <Overlay onClose={onClose} label="Kirish">
      <h2>Kirish</h2>
      <form onSubmit={submit} noValidate className="auth">
        {[
          ['name', 'Ism', 'text'],
          ['email', 'Email', 'email'],
          ['pass', 'Parol', 'password'],
        ].map(([k, l, t]) => (
          <label key={k}>
            <span>{l}</span>
            <input className="field" type={t} value={f[k]} onChange={set(k)} aria-invalid={!!errs[k]} />
            {errs[k] && <em className="err" role="alert">{errs[k]}</em>}
          </label>
        ))}
        <button className="btn btn-dark wide" type="submit">Kirish</button>
      </form>
    </Overlay>
  )
}

export default function Panels() {
  const { panel, setPanel, toast } = useApp()
  const close = () => setPanel(null)
  const [top, setTop] = useState(false)
  useEffect(() => {
    const f = () => setTop(window.scrollY > 700)
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <>
      {panel === 'cart' && <Cart onClose={close} />}
      {panel === 'search' && <Search onClose={close} />}
      {panel === 'auth' && <Auth onClose={close} />}
      <div className={`toast ${toast ? 'is-on' : ''}`} role="status" aria-live="polite">{toast}</div>
      <button
        className={`to-top ${top ? 'is-on' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Tepaga qaytish"
        tabIndex={top ? 0 : -1}
      >
        <Icon name="up" size={20} />
      </button>
    </>
  )
}
