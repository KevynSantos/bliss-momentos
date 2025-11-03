import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

function VideoMaker() {
  return (
    <div className="portfolio-page">
        <img src="/alice-video-maker.jpeg" alt="Alice Barcelos" className="profile-image" />
      <h2>📸 A importância de um Video Maker</h2>
      <p>
        Um evento é feito de momentos que passam rápido, mas que carregam emoções únicas: sorrisos, lágrimas,
        abraços e celebrações. Um <strong>Video Maker</strong> tem o papel de registrar tudo isso de forma completa
        e profissional, garantindo que cada detalhe seja eternizado.
      </p>
      <p>
        Enquanto os convidados aproveitam o momento, o vídeo maker trabalha nos bastidores, captando a essência
        do evento, a energia das pessoas e a história que se desenrola. O resultado é muito mais do que imagens:
        é uma narrativa que revive emoções, permite que cada instante seja lembrado e compartilhado, e transforma
        memórias em algo duradouro.
      </p>
      <p>
        Além disso, um vídeo bem produzido pode ser usado para divulgação de eventos futuros, redes sociais ou
        lembranças pessoais, agregando valor e mostrando o cuidado e a dedicação envolvidos na produção.
      </p>
      <p>
        Em resumo, o <strong>Video Maker</strong> é quem transforma momentos fugazes em memórias eternas, garantindo
        que o evento seja lembrado com emoção, beleza e profissionalismo.
      </p>

      <Link to="/portfolio" className="back-button">
        ← Voltar
      </Link>
    </div>
  );
}

export default VideoMaker;
