import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import Icon from './Icons.jsx'
import { useApp } from '../store.jsx'

const links = [
  { href: '#bosh-sahifa', label: 'Bosh sahifa' },
  { href: '#menyu', label: 'Menyu' },
  { href: '#biz-haqimizda', label: 'Biz haqimizda' },
  { href: '#qulayliklar', label: 'Qulayliklar' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#bosh-sahifa')
  const { count, user, setUser, setPanel, notify } = useApp()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      let cur = links[0].href
      for (const l of links) {
        const el = document.querySelector(l.href)
        if (el && el.getBoundingClientRect().top <= 120) cur = l.href
      }
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const logout = () => {
    setUser(null)
    notify('Siz tizimdan chiqdingiz')
  }

  return (
    <header className={`nav-wrap ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav container" aria-label="Asosiy menyu">
        <a href="#bosh-sahifa" className="nav-logo" aria-label="Qahva Uyi — bosh sahifa">
          <Logo />
        </a>

        <ul className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href ? 'is-active' : ''}
                aria-current={active === l.href ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          {user ? (
            <button className="link-btn" onClick={logout} title="Chiqish">
              {user.name.split(' ')[0]} · Chiqish
            </button>
          ) : (
            <button className="link-btn" onClick={() => setPanel('auth')}>Kirish</button>
          )}
          <span className="divider" aria-hidden="true" />
          <button className="icon-btn" onClick={() => setPanel('search')} aria-label="Qidirish">
            <Icon name="search" />
          </button>
          <button className="icon-btn cart-btn" onClick={() => setPanel('cart')} aria-label={`Savat, ${count} ta mahsulot`}>
            <Icon name="cart" />
            {count > 0 && <span className="badge">{count}</span>}
          </button>
          <button
            className="burger"
            aria-label={open ? 'Menyuni yopish' : 'Menyuni ochish'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span /><span />
          </button>
        </div>
      </nav>
    </header>
  )
}
