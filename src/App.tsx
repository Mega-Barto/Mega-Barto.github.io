import './App.css'
import { useTranslation } from 'react-i18next'
import { Header, Footer } from './components'
import { AutobiographySection, ProjectsSection, CertificatesSection, EventsSection, WorkExperienceSection } from './components/sections'

function App() {
  const { t } = useTranslation();
  
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-image">
              <img 
                src="https://i.imgur.com/kBWOFBL.png" 
                alt={t('personal.displayName')} 
                className="hero-profile-image"
              />
            </div>
            <h1>{t('home.hero.welcome')}</h1>
            <p>{t('home.hero.description', { description: t('personal.description') })}</p>
          </div>
        </section>
        <AutobiographySection />
        <WorkExperienceSection />
        <ProjectsSection />
        <CertificatesSection />
        <EventsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
