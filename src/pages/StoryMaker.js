import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

function VideoMaker() {
  return (
    <div className="portfolio-page">
      <h2>📱 A importância de um Video Maker</h2>
      <p>
        O <strong>Video Maker</strong> é quem transforma eventos em experiências visuais memoráveis.
        Com um olhar artístico e técnico, ele captura momentos únicos que contam histórias reais.
      </p>
      <p>
        Em eventos, o papel do Video Maker vai além da gravação — é sobre transmitir a emoção, a energia e a
        conexão das pessoas envolvidas, eternizando cada detalhe.
      </p>

      <Link to="/portfolio" className="back-button">
        ← Voltar
      </Link>
    </div>
  );
}

export default VideoMaker;
