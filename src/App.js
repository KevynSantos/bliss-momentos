import './App.css';

function App() {
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

          <a
            href="https://seuportifolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button portfolio"
          >
            Portfólio
          </a>

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

export default App;
