import { facilities } from '../data.js'
import Icon from './Icons.jsx'

export default function Facilities() {
  return (
    <section id="qulayliklar" className="facilities">
      <div className="container">
        <h2 className="center light">Bizdagi qulayliklar</h2>
        <ul className="fac-grid">
          {facilities.map((f) => (
            <li key={f.title}>
              <span className="fac-icon"><Icon name={f.icon} size={30} /></span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
