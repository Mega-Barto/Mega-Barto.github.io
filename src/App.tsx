import './App.css'
import { Header, Footer } from './components'
import { PERSONAL_INFO } from './config'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <section className="hero-section">
          <h1>¡Bienvenido a {PERSONAL_INFO.displayName}!</h1>
          <p>{PERSONAL_INFO.description}</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
