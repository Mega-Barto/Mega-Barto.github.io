import './App.css'
import { useTranslation } from 'react-i18next'
import { Header, Footer } from './components'
import { AutobiographySection, ProjectsSection } from './components/sections'

function App() {
  const { t } = useTranslation();
  
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <section className="hero-section">
          <div className="hero-content">
            <h1>{t('home.hero.welcome')}</h1>
            <p>{t('home.hero.description', { description: t('personal.description') })}</p>
          </div>
        </section>
        <AutobiographySection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
