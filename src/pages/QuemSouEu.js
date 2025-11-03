import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

function QuemSouEu() {
  return (
    <div className="portfolio-page">
      <img src="/alice-about.jpeg" alt="Alice Barcelos" className="profile-image" />
      <h2>🌟 Quem sou eu?</h2>
      <p>
        Meu nome é <strong>Alice Barcelos</strong>, tenho 17 anos e sou uma jovem cristã, sonhadora e determinada.
      </p>
      <p>
        Gosto de viver com propósito, de espalhar leveza e de ver o lado bonito da vida mesmo nas pequenas coisas.
        Sou comunicativa, criativa, empática e acredito que cada dia é uma nova oportunidade para crescer e aprender.
      </p>
      <p>
        Procuro sempre fazer tudo com amor e dedicação, buscando refletir em minhas atitudes os valores que carrego no coração:
        fé, gratidão e verdade. Acredito que quando colocamos Deus à frente dos nossos planos, tudo se torna possível e cada passo ganha significado.
      </p>
      <p>
        Atuo na área de <strong>Story Maker</strong> e <strong>Vídeo Maker</strong>, criando conteúdos que contam histórias
        e capturam emoções de forma autêntica e sensível.
      </p>
      <p>
        Realizo cobertura de eventos, casamentos, aniversários e produções personalizadas para redes sociais, sempre buscando
        transmitir a essência de cada momento.
      </p>
      <p>
        Mais do que produzir vídeos, meu propósito é transformar momentos em memórias, conectando pessoas e sentimentos
        por meio da arte e da criatividade.
      </p>

      <Link to="/portfolio" className="back-button">
        ← Voltar
      </Link>
    </div>
  );
}

export default QuemSouEu;
