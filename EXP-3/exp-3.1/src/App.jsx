import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const Home = () => (
  <section className="content-card fade-in">
    <h1 className="hero-title">Build Faster with Nova</h1>
    <p className="hero-subtitle">
      A modern single-page application powered by React.
    </p>
    <NavLink to="/features" className="primary-btn">
      Explore Features →
    </NavLink>
  </section>
)

const Features = () => (
  <section className="content-card fade-in">
    <h1 className="section-title">Why Nova?</h1>

    <div className="row mt-4 g-4">
      <div className="col-md-4">
        <div className="feature-box">
          <h5>⚡ Fast Routing</h5>
          <p>No reloads. Instant navigation.</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="feature-box">
          <h5>🎨 Clean UI</h5>
          <p>Minimal, modern interface.</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="feature-box">
          <h5>🚀 Scalable</h5>
          <p>Perfect structure for real apps.</p>
        </div>
      </div>
    </div>
  </section>
)

const Contact = () => {
  const [showNotification, setShowNotification] = useState(false)

  const handleSubmit = () => {
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  return (
    <section className="content-card fade-in">
      <h1 className="section-title">Let’s Talk</h1>

      <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
        <input className="form-input" placeholder="Name" />
        <input className="form-input" placeholder="Email" />

        <button
          type="button"
          className="primary-btn w-100 mt-3"
          onClick={handleSubmit}
        >
          Send Message
        </button>
      </form>

      {showNotification && (
        <div className="success-toast">
          ✅ Message sent successfully!
        </div>
      )}
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <nav className="top-nav">
          <span className="logo">Ayush</span>

          <div className="nav-links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>

        <main className="page-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
