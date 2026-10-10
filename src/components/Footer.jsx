import DrinkArt from './DrinkArt.jsx'
import Icon from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="f-brand">
          <div className="brand-box"><span>Qahva Uyi</span></div>
          <p>Yaxshi va yanada yaxshi qahva — Qahva Uyi bilan.</p>
        </div>

        <div className="f-col">
          <h3>Aloqa</h3>
          <p><a href="mailto:salom@qahvauyi.uz">salom@qahvauyi.uz</a></p>
          <p>Qo'ng'iroq: <a href="tel:+998901234567">+998 90 123 45 67</a></p>
          <p>Telegram: <a href="https://t.me/qahvauyi">@qahvauyi</a></p>
          <p className="addr">Toshkent, Amir Temur ko'chasi 12</p>
          <p className="addr">Har kuni 07:00 – 23:00</p>
        </div>

        <div className="f-col f-last">
          <div className="f-img"><DrinkArt art={{ liquid: '#a4703f', heart: true }} steam={false} /></div>
          <h3>Bizni kuzating</h3>
          <div className="social">
            <a href="#" aria-label="Instagram"><Icon name="instagram" size={18} /></a>
            <a href="#" aria-label="Telegram"><Icon name="telegram" size={18} /></a>
            <a href="#" aria-label="Facebook"><Icon name="facebook" size={18} /></a>
            <a href="#" aria-label="YouTube"><Icon name="youtube" size={18} /></a>
          </div>
        </div>
      </div>
      <p className="copy">© {new Date().getFullYear()} Qahva Uyi. Barcha huquqlar himoyalangan.</p>
    </footer>
  )
}
