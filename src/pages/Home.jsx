import "./Home.scss";
import img1 from "./../assets/img/1.png";
import img2 from "./../assets/img/2.png";
import img3 from "./../assets/img/3.png";
import img4 from "./../assets/img/4.png";
import React from "react";

const Home = () => {
  const cards = [
    {
      src: img1,
      title: "Conscientização e Educação",
      description: ` Treinamentos regulares para gestores e colaboradores sobre sinais
      de estresse, ansiedade e depressão, bem como estratégias para
      lidar com essas questões.`,
      actionText: "Treinamentos",
    },
    {
      src: img2,
      title: "Acesso a recursos",
      description: ` Possuímos recursos internos e externos para suporte à saúde
      mental, como linhas diretas de ajuda, profissionais de saúde
      mental e aplicativos. Além de uma lista de leituras, vídeos e
      recursos online que promovem a saúde mental.`,
      actionText: "Experimente aqui",
    },
    {
      src: img3,
      title: "Avaliações Regulares",
      description: ` Implementamos avaliações regulares da saúde mental para entender
      as necessidades específicas de nossos colaboradores. Utilizamos
      pesquisas anônimas para avaliar o nível de estresse, satisfação e
      bem-estar no trabalho.`,
      actionText: "Avalie também!",
    },
    {
      src: img4,
      title: " Cultura de Apoio",
      description: ` Valorizamos o equilíbrio entre trabalho e vida pessoal.Encorajamos
      uma atmosfera de abertura e suporte, onde os colaboradores se
      sintam à vontade para compartilhar suas preocupações.`,
      actionText: "Opine",
    },
  ];
  return (
    <>
      <div class="homepage-frase">
        <div class="homepage-square">
          <img
            src="https://www.rpinfo.com.br/views/geral/img/aspas.png"
            alt="sky"
          />
          <h2>
            Só a experiência própria é capaz de tornar sábio o ser humano.
          </h2>
          <h4> Sigmund Freud </h4>
        </div>
      </div>
      <div class="container">
        <h1>RECURSOS</h1>
        <div class="grid">
          {cards.map((card) => (
            <div class="card">
              <img src={card.src}  />
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <button type="button">{card.actionText}</button>
            </div>
          ))}
        </div>
      </div>
      <div class="abc">
        <h1>Como está se sentindo?</h1>
        <p>
          Nossa empresa traz programas de bem-estar que incluem atividades
          físicas, mindfulness, yoga e outras práticas que promovem o equilíbrio
          emocional.
        </p>
        <div class="list">
          <ul>
            <h2>Inscreva-se já em alguma de nossas atividades:</h2>
            <li>
              <a href="GymPass.html">GymPass</a>
            </li>
            <li>
              <a href="GymPass.html">Mindfulness</a>
            </li>
            <li>
              <a href="GymPass.html">Yoga</a>
            </li>
            <li>
              <a href="GymPass.html">Meditação</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="banner4">
        <img src="img/7.png" alt="" class="flex" />
        <div class="flex">
          <h1>Depoimentos:</h1>
        </div>
      </div>
    </>
  );
};

export default Home;


