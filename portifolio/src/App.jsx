import './App.css';
import { useState } from 'react';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="large-container">
      <div className="first-container">
        <div className="v-1">
          <div className="cabecalho-1">
            <div className="name">
              Vitor de Mattos Azevedo.
            </div>
            <div className="developed-projects">
              <div
                className="button-projects"
                onMouseOver={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src="button-image.svg"
                  alt=""
                  className={isHovered ? 'img-hover' : ''}
                />
                <p className={isHovered ? 'hide-text' : ''}>
                  PROJETOS DESENVOLVIDOS
                </p>
              </div>
            </div>
          </div>
          <div className="cabecalho-2">
            <div className="topics">
              <ul>1. O Design que vende</ul>
              <ul>2. Desenvolvimento estratégico</ul>
              <ul>3. Funcionalidades avançadas</ul>
            </div>
          </div>
        </div>
        <div className="v-2">
          <div className="large-text">
            Vamos juntos do design ao desenvolvimento
            <div className="underline">-</div>
          </div>
        </div>
        <div className="v-3">
          <div className="w-1">
            <div className="topics-2">
              <div className="topic">
                <img src="design.svg" alt="" />
                <p>Design</p>
              </div>
              <div className="topic">
                <img src="backend.svg" alt="" />
                <p>Back-end</p>
              </div>
              <div className="topic">
                <img src="frontend.svg" alt="" />
                <p>Front-end</p>
              </div>
            </div>
          </div>
          <div className="w-2">
            <img src="circle.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;