import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

function QuemSouEu() {
  return (
    <div className="portfolio-page">
      <h2>🌟 Quem sou eu?</h2>
      <p>
        Olá! Eu sou <strong>Alice Barcelos</strong>, apaixonada por contar histórias através de vídeos e imagens.
        Meu propósito é transformar momentos comuns em lembranças inesquecíveis.
      </p>
      <p>
        Cada projeto é uma nova oportunidade de transmitir emoção, criatividade e autenticidade.
        Acredito que toda história merece ser contada com carinho e propósito.
      </p>

      <Link to="/portfolio" className="back-button">
        ← Voltar
      </Link>
    </div>
  );
}

export default QuemSouEu;
