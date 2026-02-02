import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const Page = ({ title, text, icon }) => (
  <div className="page-center">
    <div className="glass-card p-5 animate-in">
      <h1>{icon} {title}</h1>
      <p>{text}</p>
    </div>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <div className="spa-wrapper">

        {/* Navbar stays inside container */}
        <nav className="navbar navbar-expand-lg glass-header">
          <div className="container">
            <Link className="navbar-brand fw-bold" to="/">MULTI-PAGE SPA</Link>
            <div className="d-flex gap-4">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/gallery">Gallery</Link>
              <Link className="nav-link" to="/services">Services</Link>
            </div>
          </div>
        </nav>

        {/* ❌ NO container here */}
        <Routes>
          <Route
            path="/"
            element={
              <Page
                icon="🏠"
                title="Home Page"
                text="This is the first component of our multi-page SPA."
              />
            }
          />
          <Route
            path="/gallery"
            element={
              <Page
                icon="🖼️"
                title="Gallery Page"
                text="This is the second component mapped to a unique route."
              />
            }
          />
          <Route
            path="/services"
            element={
              <Page
                icon="⚙️"
                title="Services Page"
                text="This is the third component mapped to a unique route."
              />
            }
          />
        </Routes>

        <footer className="footer-bar text-center py-3">
          <small className="text-muted">
            Experiment-3: Client-Side Routing Implementation
          </small>
        </footer>

      </div>
    </BrowserRouter>
  )
}

export default App
