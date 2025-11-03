import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

function StoryMaker() {
  return (
    <div className="portfolio-page">
        <img src="/alice-story-maker.jpeg" alt="Alice Barcelos" className="profile-image" />
      <h2>📱 A importância de um Story Maker</h2>
      <p>
        Em cada evento acontecem momentos únicos — sorrisos, emoções e detalhes que muitas vezes passam despercebidos.
        É aí que entra o <strong>Story Maker</strong>.
      </p>
      <p>
        O papel do Story Maker vai muito além de apenas gravar. Ele conta histórias em tempo real, captando a essência
        de cada instante e transformando tudo em conteúdo criativo e envolvente para as redes sociais.
      </p>
      <p>
        Ter um Story Maker no seu evento é garantir que cada emoção seja registrada de forma leve, moderna e com o
        olhar certo para o digital. Enquanto os convidados vivem o momento, o Story Maker cria uma narrativa visual
        que reflete toda a energia, alegria e propósito daquele dia.
      </p>
      <p>
        Além disso, o conteúdo é pensado para fortalecer a imagem do evento ou da marca, gerar engajamento imediato
        e deixar memórias visuais que continuam encantando mesmo depois que tudo acaba.
      </p>

      <Link to="/portfolio" className="back-button">
        ← Voltar
      </Link>
    </div>
  );
}

export default StoryMaker;
