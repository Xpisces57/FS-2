import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {
  const handleNavClick = (link) => {
    alert(`Navigating to ${link}...`);
  };

  return (
    <div className="page-wrapper">
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark glass-navbar fixed-top">
        <div className="container-fluid px-5">
          <a
            className="navbar-brand fw-bold fs-3"
            href="#"
            onClick={() => handleNavClick('Brand')}
          >
            <span className="text-warning">NOVA</span>TECH
          </a>

          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active fw-semibold"
                  href="#"
                  onClick={() => handleNavClick('Home')}
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link fw-semibold"
                  href="#"
                  onClick={() => handleNavClick('Portfolio')}
                >
                  Portfolio
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-semibold"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Services
                </a>
                <ul className="dropdown-menu shadow border-0 mt-3">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => handleNavClick('Web Design')}
                    >
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => handleNavClick('App Development')}
                    >
                      App Development
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => handleNavClick('Branding')}
                    >
                      Branding
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link fw-semibold"
                  href="#"
                  onClick={() => handleNavClick('Contact')}
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="d-flex">
              <button
                className="btn btn-outline-warning rounded-pill px-4 me-2"
                onClick={() => handleNavClick('Login')}
              >
                Login
              </button>
              <button
                className="btn btn-warning text-dark rounded-pill px-4 shadow"
                onClick={() => handleNavClick('Signup')}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-card animate-in">
          <h1 className="display-2 fw-bold text-white mb-3">
            Modern Design Hub
          </h1>
          <p className="lead text-white-50 fs-5 mb-4">
            Advanced Responsive Layouts with Bootstrap 5
          </p>

          <div className="alert alert-warning bg-transparent border-warning text-warning py-3 px-4 rounded-4">
            <strong>Tip:</strong> Resize your browser to see the responsive
            navbar in action!
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-glass text-center py-4">
        <p className="mb-0 text-white-50">
          © 2026 NovaTech • Sleek & Modern UI Design
        </p>
      </footer>
    </div>
  );
}

export default App;
