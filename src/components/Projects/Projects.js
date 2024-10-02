import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import henricoperson from "../../Assets/Projects/henrico.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projetos Pessoais
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão os projetos individuais e as contribuições de cada membro da equipe.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={henricoperson}
              isBlog={false}
              title="Henrico Bazante"
              description="Responsável pelo portfólio do projeto e auxílio no GitHub, além de fazer a alteração em todo novo conteúdo do portfólio que tem como objetivo apresentar nossa plataforma inclusiva e auxiliar todos os novos usuários."
              ghLink="https://github.com/Henricobzt/"
              instagramLink="https://www.instagram.com/henricobzt/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Emily Queiroz"
              description="Uma das responsaveis por criar a A.I Noah e os códigos para a aplicação web que serviu para o desenvolvimento do site"
              ghLink="https://github.com/Emily-Q06/"
              instagramLink="https://www.instagram.com/emily_queiroz06/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor built with React.js. Online Editor that supports HTML, CSS, and JS code with instant view of the website."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              instagramLink="https://www.instagram.com/yourInstagramLink/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained an image classifier model using 'PyTorch' framework."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              instagramLink="https://www.instagram.com/yourInstagramLink/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AI For Social Good"
              description="Using 'Natural Language Processing' for the detection of suicide-related posts."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              instagramLink="https://www.instagram.com/yourInstagramLink/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              instagramLink="https://www.instagram.com/yourInstagramLink/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Chat application built using React."
              ghLink="https://github.com/soumyajit4419/Chatify"
              instagramLink="https://www.instagram.com/yourInstagramLink/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
