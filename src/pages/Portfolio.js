import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio-page">
      <header className="portfolio-header">
        <h1>🎬 Portfólio — Alice Barcelos</h1>
        <p>Explore um pouco mais sobre o meu trabalho 💛</p>
      </header>

      <div className="portfolio-grid">
        <Link to="/quem-sou-eu" className="portfolio-item">
          Quem sou eu?
        </Link>

        <Link to="/story-maker" className="portfolio-item">
          A importância de um Story Maker 📱
        </Link>

        <Link to="/video-maker" className="portfolio-item">
          A importância de um Video Maker 📸
        </Link>
      </div>

      <Link to="/" className="back-button">
        ← Voltar
      </Link>
    </div>
  );
}

export default Portfolio;
