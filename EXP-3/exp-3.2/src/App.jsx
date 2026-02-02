import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const Dashboard = () => (
  <section className="panel fade-in text-center">
    <div className="logo-badge mx-auto mb-4">AK</div>
    <h1 className="title">Welcome Back</h1>
    <p className="subtitle">
      Your personal developer workspace overview.
    </p>

    <div className="stats">
      <div className="stat">
        <h3>18</h3>
        <span>Projects</span>
      </div>
      <div className="stat">
        <h3>620+</h3>
        <span>Commits</span>
      </div>
    </div>

    <NavLink to="/profile" className="primary-btn mt-4">
      View Profile
    </NavLink>
  </section>
)

const Profile = () => (
  <section className="panel fade-in">
    <h2 className="section-title">Profile</h2>

    <div className="info-row"><span>Name</span><span>Ayush Sinha</span></div>
    <div className="info-row"><span>ID</span><span>23BAI70675</span></div>
    <div className="info-row"><span>Email</span><span>ayush@gmail.com</span></div>
    <div className="info-row"><span>Status</span><span className="status">Available</span></div>
  </section>
)

const Skills = () => (
  <section className="panel fade-in">
    <h2 className="section-title">Skills</h2>

    {[
      ['React', 65],
      ['JavaScript', 80],
      ['UI / UX', 60],
      ['Machine Learning', 70],
    ].map(([skill, value]) => (
      <div key={skill} className="skill">
        <div className="skill-head">
          <span>{skill}</span>
          <span>{value}%</span>
        </div>
        <div className="skill-bar">
          <div style={{ width: `${value}%` }}></div>
        </div>
      </div>
    ))}
  </section>
)

const About = () => (
  <section className="panel fade-in">
    <h2 className="section-title">About</h2>
    <p className="about-text">
      AI & ML focused developer passionate about building performant,
      scalable and visually refined applications. Strong interest in
      intelligent systems, UI engineering and real-world problem solving.
    </p>
  </section>
)

function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        <nav className="topbar">
          <span className="brand">Ayush Sinha</span>

          <div className="nav-items">
            <NavLink to="/" end>Dashboard</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
        </nav>

        <main className="main-area">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="footer">
          Ayush's Portfolio 
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
