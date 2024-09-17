import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Sobre<span className="purple">  </span> Voice Of The look
            </h1>
            <p className="home-about-body">
              Nosso serviço foi criado com o objetivo de melhorar
              e ajudar a qualidade de vida dos deficientes visuais. 
              <br />
              <br />Sendo uma plataforma muito acessivel e inclusiva o voice of the look possui variadas funções que vão
              auxiliar o dia a dia das pessoas.
              <br />
              <br />
              O seu assistente virtual NOAH vai estar a disposição a todo momento.
              <br />
              <br />
              Utilize sem moderação!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>NOSSAS MIDIAS SOCIAIS</h1>
            <p>
              Sinta-se livre para se conectar comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/V0z-do-olhar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/voiceofthelook/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
