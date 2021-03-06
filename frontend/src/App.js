import React from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import aspas from "./assets/aspas.svg";
import seta from "./assets/seta.svg";
import image from "./assets/image.svg";
import bootcamp from "./assets/bootcamp.svg";
import { FaStar, FaExclamationCircle, FaCalendar } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="hero">
        <div className="header">
          <img src={logo} alt="Logo" />
        </div>
        <div className="hero-content">
          <h1>
            Avance para o<br></br>próximo nível em<br></br>programação.
          </h1>
          <p>
            A terceira edição do Next Level Week chegou ao fim. Fique por dentro
            das próximas edições.
          </p>
          <a className="button" href="https://github.com/ElizabetePluGgui">
            QUERO FICAR POR DENTRO
          </a>
        </div>
      </div>

      <div class="hero-information">
        <div class="hero-aspas">
          <img src={aspas} alt="Aspas" />
        </div>
          <div class="hero-p">
            <p>
              Fiquei focado na aula por 2 horas e pensei que fossem <br></br> apenas 30
              minutos. Aprendi nessas 2 horas o que<br></br> demoraria para aprender em
              meses, simplesmente<br></br> sensacional.
            </p>
          </div>
          <br></br>
          <p className="hero-nome">Matheus Henrique</p>
          <div className="css-1k6yql2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="css-12z0wuy"
            >
              <path
                d="M15.9519 4.70166C15.913 3.8501 15.7777 3.26855 15.58 2.75977C15.3792 2.22595 15.0642 1.74243 14.6572 1.34277C14.2577 0.935791 13.774 0.620728 13.2402 0.4198C12.7313 0.222168 12.1499 0.0870361 11.2983 0.0483398C10.4452 0.00927734 10.1726 0 8 0C5.82739 0 5.55481 0.00927734 4.70166 0.0480957C3.8501 0.0870361 3.26868 0.22229 2.75977 0.420044C2.22595 0.62085 1.74243 0.935791 1.34277 1.34277C0.935791 1.74231 0.620728 2.22583 0.4198 2.75964C0.222168 3.26855 0.0870361 3.8501 0.0483398 4.70154C0.00927734 5.55481 0 5.82727 0 7.99988C0 10.1726 0.00927734 10.4452 0.0483398 11.2983C0.0871582 12.1498 0.222412 12.7313 0.420166 13.2402C0.620972 13.7739 0.935913 14.2576 1.3429 14.6571C1.74243 15.0641 2.22607 15.379 2.75989 15.5798C3.26868 15.7777 3.85022 15.9128 4.70178 15.9518C5.55505 15.9907 5.82751 15.9999 8.00012 15.9999C10.1727 15.9999 10.4453 15.9907 11.2985 15.9518C12.15 15.9128 12.7314 15.7777 13.2404 15.5798C14.3149 15.1643 15.1644 14.3148 15.58 13.2402C15.7778 12.7313 15.913 12.1498 15.9519 11.2983C15.9907 10.4451 16 10.1726 16 8C16 5.82727 15.9907 5.55481 15.9519 4.70166ZM14.5118 11.2328C14.4763 12.0128 14.3459 12.4364 14.2365 12.7183C13.9673 13.416 13.4159 13.9674 12.7181 14.2366C12.4363 14.3461 12.0127 14.4764 11.2327 14.512C10.3893 14.5505 10.1362 14.5586 8 14.5586C5.86365 14.5586 5.61072 14.5505 4.76721 14.512C3.9873 14.4764 3.56372 14.3461 3.28174 14.2366C2.93433 14.1083 2.62 13.9038 2.36194 13.6381C2.09619 13.38 1.89172 13.0658 1.76343 12.7183C1.65393 12.4364 1.52356 12.0128 1.48804 11.2328C1.44958 10.3893 1.44141 10.1362 1.44141 8.00012C1.44141 5.86389 1.44958 5.61096 1.48804 4.76733C1.52368 3.9873 1.65393 3.56372 1.76343 3.28186C1.89172 2.93433 2.09631 2.62 2.36194 2.36194C2.62 2.09619 2.93433 1.89172 3.28186 1.76355C3.56372 1.65393 3.9873 1.52368 4.76733 1.48804C5.61084 1.44958 5.86389 1.44141 8 1.44141H7.99988C10.136 1.44141 10.389 1.44958 11.2327 1.48816C12.0127 1.52368 12.4362 1.65405 12.7181 1.76355C13.0656 1.89185 13.3799 2.09631 13.6379 2.36194C13.9037 2.62 14.1082 2.93433 14.2363 3.28186C14.3459 3.56372 14.4763 3.9873 14.5118 4.76733C14.5503 5.61084 14.5585 5.86389 14.5585 8C14.5585 10.1362 14.5504 10.3892 14.5118 11.2328Z"
                fill="url(#paint0_linear)"
              ></path>
              <path
                d="M7.99963 3.89185C5.73083 3.89185 3.8916 5.7312 3.8916 8C3.8916 10.2688 5.73083 12.108 7.99963 12.108C10.2686 12.108 12.1078 10.2688 12.1078 8C12.1078 5.7312 10.2686 3.89185 7.99963 3.89185ZM7.99963 10.6666C6.52698 10.6665 5.33301 9.47266 5.33313 7.99988C5.33313 6.52722 6.52698 5.33325 7.99976 5.33325C9.47253 5.33337 10.6664 6.52722 10.6664 7.99988C10.6664 9.47266 9.47241 10.6666 7.99963 10.6666Z"
                fill="url(#paint1_linear)"
              ></path>
              <path
                d="M13.2306 3.72961C13.2306 4.25977 12.8008 4.68958 12.2706 4.68958C11.7404 4.68958 11.3105 4.25977 11.3105 3.72961C11.3105 3.19934 11.7404 2.76953 12.2706 2.76953C12.8008 2.76953 13.2306 3.19934 13.2306 3.72961Z"
                fill="url(#paint2_linear)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="1.34269"
                  y1="14.6572"
                  x2="14.6573"
                  y2="1.34256"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFD600"></stop>
                  <stop offset="0.5" stop-color="#FF0100"></stop>
                  <stop offset="1" stop-color="#D800B9"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="5.09485"
                  y1="10.9048"
                  x2="10.9046"
                  y2="5.09509"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF6400"></stop>
                  <stop offset="0.5" stop-color="#FF0100"></stop>
                  <stop offset="1" stop-color="#FD0056"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear"
                  x1="11.5918"
                  y1="4.40836"
                  x2="12.9494"
                  y2="3.05075"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F30072"></stop>
                  <stop offset="1" stop-color="#E50097"></stop>
                </linearGradient>
              </defs>
            </svg>
            <span class="css-nxl07o">@matjs_</span>
          </div>
      </div>

      <div className="about">
        <div class="about-image">
          <img src={image} alt="Logo" />
        </div>
        
        <div className="about-content">
          <h1 className="h1">
            O que é o <br></br> Next Level Week?
          </h1>
          <p className="highlight">
            O NLW é um evento com muito código, desafios,<br></br>
            networking e um único objetivo: te levar para o<br></br>
            próximo nível.
          </p>
          
          <p className="p">
            Acreditamos que programação é uma disciplina prática. Ou seja,<br></br>
            para dominar uma tecnologia não basta apenas conhecer a teoria<br></br>
            ou ler a documentação: você precisa colocar a mão no código.
          </p>
          
          <p className="p">
            Através do nosso método você vai aprender novas ferramentas,<br></br>
            conhecer novas tecnologias e descobrir hacks que vão impulsionar<br></br>
            a sua carreira.
          </p>
          
          <p className="p">
            Uma experiência online e totalmente gratuita para evoluir suas<br></br>
            habilidades em programção e colocar mais um trabalho no seu<br></br>
            portfólio.
          </p>
        </div>
      </div> 

      {/* <div className="power-section">
        <h1>O poder dos 3 pilares combinados</h1>
        <div className="powers">
          <div className="power">
            <h1>01</h1>
            <h2>Experiência e portfolio</h2>
          </div>
          <div className="power">
            <h1>01</h1>
            <h2>Experiência e portfolio</h2>
          </div>
          <div className="power">
            <h1>01</h1>
            <h2>Experiência e portfolio</h2>
          </div>
          <div className="power">
            <h1>01</h1>
            <h2>Experiência e portfolio</h2>
          </div>
          <div className="power">
            <h1>01</h1>
            <h2>Experiência e portfolio</h2>
          </div>
          <div className="power">
            <h1>01</h1>
            <h2>Experiência e portfolio</h2>
          </div>
          <div className="power">
            <h1>01</h1>
            <h2>Experiência e portfolio</h2>
          </div>
          <div className="power">
            <h1>01</h1>
            <h2>Experiência e portfolio</h2>
          </div>
          <div className="power">
            <h1>01</h1>
            <h2>Experiência e portfolio</h2>
          </div>
        </div>
      </div> */}

      {/* <div className="footer">
        <div className="hero-content content-footer">
          <h1>Avance para o próximo nível em programação.</h1>
          <a className="button" href="https://github.com/ElizabetePluGgui">
            QUERO FICAR POR DENTRO
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default App;
