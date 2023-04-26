import React from "react";

import { Container, Row, Col, FormGroup, Input } from "reactstrap";
export default function Contact() {
  return (
    <div
      className="contact"
      style={{
        backgroundImage: "url(" + require("assets/img/spline.svg") + ")",
      }}>
      <Container>
        <Row>
          <Col xs={12} md={5}>
            <h4>Contact Us</h4>
            <FormGroup>
              <Input defaultValue="" placeholder="Name" type="text"></Input>
            </FormGroup>
            <FormGroup>
              <Input defaultValue="" placeholder="Email" type="email"></Input>
            </FormGroup>
            <FormGroup>
              <Input
                defaultValue=""
                placeholder="Enter your message"
                type="textarea"></Input>
            </FormGroup>
          </Col>
          <Col xs={12} md={7}>
            <h4>About Us</h4>
            <p>
              Hello everyone. Our team supports so you can enjoy all thing here.
            </p>
          </Col>
        </Row>
      </Container>

      <div className="light x1"></div>
      <div className="light x2"></div>
      <div className="light x3"></div>
      <div className="light x4"></div>
      <div className="light x5"></div>
      <div className="light x6"></div>
      <div className="light x7"></div>
      <div className="light x8"></div>
      <div className="light x9"></div>
    </div>
  );
}
