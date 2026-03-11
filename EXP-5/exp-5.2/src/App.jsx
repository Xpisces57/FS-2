import { Routes, Route, NavLink, Navigate } from "react-router-dom"
import { Suspense, lazy, useState } from "react"
import Loader from "./components/Loader"
import "./App.css"

function delayImport(factory, time = 3000) {
  return new Promise(resolve => {
    setTimeout(() => resolve(factory()), time)
  })
}

const Home = lazy(() => delayImport(() => import("./pagess/Home"), 3000))
const About = lazy(() => delayImport(() => import("./pagess/About"), 3000))
const Dashboard = lazy(() => delayImport(() => import("./pagess/Dashboard"), 3000))

function App() {

  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="layout">

      <aside className="sidebar">
        <h3 className="title">My App</h3>

        <nav>
          <NavLink to="/dashboard" onClick={handleClick}>Dashboard</NavLink>
          <NavLink to="/about" onClick={handleClick}>About</NavLink>
          <NavLink to="/home" onClick={handleClick}>Home</NavLink>
        </nav>
      </aside>

      <main className="main">

        {loading ? (
          <Loader />
        ) : (
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </Suspense>
        )}

      </main>

    </div>
  )
}

export default App