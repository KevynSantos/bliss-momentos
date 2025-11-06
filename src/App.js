import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import QuemSouEu from './pages/QuemSouEu';
import StoryMaker from './pages/StoryMaker';
import VideoMaker from './pages/VideoMaker';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <div className="profile-container">
        <img src="/alice-perfil.png" alt="Alice Barcelos" className="profile-image" />

        <h1 className="profile-name">Alice Barcelos</h1>
        <p className="profile-description">
          🎥 Story Maker & Video Maker <br />
          Registrando momentos em memórias ✨
        </p>

        <div className="links-container">
          <a
            href="https://api.whatsapp.com/message/AC4STW4ZAAAHN1"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button whatsapp"
          >
            WhatsApp
          </a>

          <Link to="/portfolio" className="link-button portfolio">
            Portfólio
          </Link>

          <a
            href="https://www.instagram.com/bliss.momentos_/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button instagram"
          >
            Instagram
          </a>
        </div>

        <footer className="footer">
          <p>© 2025 Alice Barcelos — Story Maker</p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router basename="/bliss-momentos">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/quem-sou-eu" element={<QuemSouEu />} />
        <Route path="/story-maker" element={<StoryMaker />} />
        <Route path="/video-maker" element={<VideoMaker />} />
      </Routes>
    </Router>
  );
}

export default App;
