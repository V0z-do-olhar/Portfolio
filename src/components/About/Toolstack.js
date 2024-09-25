import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiFigma,
  SiReact,
  SiNodedotjs,
  SiGooglemaps,
  SiFirebase,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglemaps/>
      </Col>
    </Row>
  );
}

export default Toolstack;
