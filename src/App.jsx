import { AppProvider } from './store.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Feature from './components/Feature.jsx'
import BestSellers from './components/BestSellers.jsx'
import Facilities from './components/Facilities.jsx'
import Testimonials from './components/Testimonials.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'
import Panels from './components/Panels.jsx'

export default function App() {
  return (
    <AppProvider>
      <Navbar />
      <main>
        <Hero />
        <Feature
          id="biz-haqimizda"
          title="Biz haqimizda"
          text={[
            "Qahva Uyi 2021-yilda kichik bir xonada ochilgan. Maqsadimiz oddiy: har bir mehmon yaxshi qahva va iliq munosabat topsin.",
            "Donalarni ishonchli fermerlardan olamiz, o'zimiz qovuramiz va baristalarimiz har bir finjonni sizning didingizga qarab tayyorlaydi.",
          ]}
          art={{ liquid: '#a4703f', heart: true }}
          label="Kapuchino"
          tilt={-5}
        />
        <Feature
          title="Bizning qovurma"
          text={[
            "Har kuni ertalab yangi donalar qovuriladi, shuning uchun finjoningizdagi qahva doim yangi.",
            "Yumshoq kislotali, shokolad va yong'oq ta'mi seziladigan aralashma — bizning eng sevimli retseptimiz.",
          ]}
          art={{ liquid: '#b88455', heart: true }}
          label="Latte"
          flip
          tilt={5}
        />
        <BestSellers />
        <Facilities />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <Panels />
    </AppProvider>
  )
}
