import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from 'react-icons/fa'; 

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>

        {/* Condicional para o botão Demo */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <FaInstagram /> &nbsp; Demo
          </Button>
        )}

        {/* Condicional para o botão Instagram */}
        {props.instagramLink && (
          <Button
            variant="primary"
            href={props.instagramLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <FaInstagram /> &nbsp; Instagram
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
