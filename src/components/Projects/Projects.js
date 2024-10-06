import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import henricoperson from "../../Assets/Projects/henrico.png";
import emilyperson from "../../Assets/Projects/emily.png";
import geovanaperson from "../../Assets/Projects/geo.png";
import depayperson from "../../Assets/Projects/depay.png";
import vieraperson from "../../Assets/Projects/viera.png";
import joaolucasperson from "../../Assets/Projects/jl.png"
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
              imgPath={emilyperson}
              isBlog={false}
              title="Emily Queiroz"
              description="Uma das responsaveis por criar a A.I Noah e os códigos para a aplicação web que serviu para o desenvolvimento do site"
              ghLink="https://github.com/Emily-Q06/"
              instagramLink="https://www.instagram.com/emily_queiroz06/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geovanaperson}
              isBlog={false}
              title="Geovana Francisca"
              description="Auxílio na criação do Noah e nos códigos para front-end para o desenvolvimento do web site da plataforma."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              instagramLink="https://www.instagram.com/geo_fpr/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={joaolucasperson}
              isBlog={false}
              title="João Lucas"
              description="Responsável pelo Design ui/ux e graphic design completo (social media e identidade visual), além de trabalhar no front-end do aplicativo, na construção de toda base do projeto junto com o grupo, pesquisas e ajuda documentação."
              instagramLink="https://www.instagram.com/joaollucascn/"
              ghLink="https://github.com/joaollucascn/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={depayperson}
              isBlog={false}
              title=""
              description="Um dos responsáveis pela realização das pesquisas do projeto"
              ghLink="https://github.com/depas7/"
              instagramLink="https://www.instagram.com/jguix7/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vieraperson}
              isBlog={false}
              title="Guilherme Vieira"
              description=" Um dos responsáveis pela realização das pesquisas"
              ghLink="https://github.com/GuiVieira80/"
              instagramLink="https://www.instagram.com/gui_vieirazn/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
