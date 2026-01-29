import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  const notify = (msg) => alert(`${msg} clicked`);

  return (
    <div className="bg-image-wrapper">
      {/* NAV */}
      <nav className="navbar navbar-expand-lg glass-nav sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">⚡ NovaUI</a>
          <div className="ms-auto d-flex gap-3">
            <button className="nav-btn" onClick={() => notify('Home')}>Home</button>
            <button className="nav-btn" onClick={() => notify('Services')}>Services</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div className="container py-5">
        <div className="hero-section glass-card text-center p-5 mb-5 animate-fade-in">
          <h1 className="display-4 fw-black text-gradient">
            Build. Launch. Scale.
          </h1>
          <p className="text-light mt-3 mb-4">
            A modern React + Bootstrap interface with glassmorphism,
            animations and responsive layouts.
          </p>
          <button className="btn btn-primary-custom btn-lg px-5">
            Start Project
          </button>
        </div>

        {/* FEATURES */}
        <div className="row g-4 mb-5">
          {[
            { icon: '⚙️', title: 'Modular Design', text: 'Reusable components built for scale.' },
            { icon: '🧠', title: 'Smart UX', text: 'Smooth interactions with clean hierarchy.' },
            { icon: '📦', title: 'Production Ready', text: 'Optimized layouts for real projects.' }
          ].map((item, i) => (
            <div className="col-md-4" key={i}>
              <div className="glass-card p-4 h-100 card-hover">
                <div className="icon-box mb-3">{item.icon}</div>
                <h5 className="fw-bold text-light">{item.title}</h5>
                <p className="text-secondary">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CONTACT */}
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="glass-card p-5">
              <h3 className="text-center fw-bold text-light mb-4">
                Get In Touch
              </h3>
              <form>
                <input className="form-control custom-input mb-3" placeholder="Your Name" />
                <input className="form-control custom-input mb-3" placeholder="Email Address" />
                <textarea className="form-control custom-input mb-4" rows="4" placeholder="Message"></textarea>
                <button className="btn btn-dark-custom w-100 py-3 fw-bold">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="glass-footer text-center py-4">
        <small>© 2026 NovaUI • Crafted with React & Bootstrap</small>
      </footer>
    </div>
  )
}

export default App
