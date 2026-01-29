import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-wrapper">
      {/* NAVBAR */}
      <nav className="top-nav">
        <h3 className="brand">ViteReact</h3>
        <div className="nav-links">
          <span>Home</span>
          <span>About</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>
          Learning <span>Vite + React</span>
        </h1>
        <p>
          This project demonstrates a basic React application built using Vite.
          It focuses on component structure, state handling, and clean UI design.
        </p>

        <button className="primary-btn" onClick={() => setCount(count + 1)}>
          Button Clicked {count} Times
        </button>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-card">
          <div className="icon">⚛️</div>
          <h4>React Basics</h4>
          <p>Understanding components, props, and state management.</p>
        </div>

        <div className="feature-card">
          <div className="icon">⚡</div>
          <h4>Vite Setup</h4>
          <p>Fast development server and instant hot reload.</p>
        </div>

        <div className="feature-card">
          <div className="icon">🧪</div>
          <h4>Practice Ready</h4>
          <p>Simple structure suitable for lab experiments.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 | Student React Project
      </footer>
    </div>
  )
}

export default App
