import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bem-vindo ao Voice of the Look, um espaço criado para transformar a maneira como deficientes visuais interagem com o mundo digital.
            <span className="purple"> Pernambuco, Brasil.</span>
            <br />
            Nosso objetivo é proporcionar uma experiência acessível e enriquecedora
            <br />
            guiando os usuários por meio de tecnologia de ponta que utiliza comandos de voz intuitivos.
            <br />
            <br />
            Aqui está alguns recursos que você pode encontrar na nossa plataforma:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Guia do usuário por voz
            </li>
            <li className="about-activity">
              <ImPointRight /> Mapa Adaptado
            </li>
            <li className="about-activity">
              <ImPointRight /> Identificação se imagens e locais
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Ajudando o mundo com a tecnologia!"{" "}
          </p>
        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;