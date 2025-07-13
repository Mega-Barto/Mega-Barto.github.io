import './App.css'
import { useTranslation } from 'react-i18next'
import { Header, Footer } from './components'

function App() {
  const { t } = useTranslation();
  
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <section className="hero-section">
          <h1>{t('home.hero.welcome', { name: t('personal.displayName') })}</h1>
          <p>{t('home.hero.description', { description: t('personal.description') })}</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
