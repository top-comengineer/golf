import React from "react";

import { Container, Row, Col, FormGroup, Input } from "reactstrap";
export default function Contact() {
  return (
    <div
      className="contact"
      style={{
        backgroundImage: "url(" + require("assets/img/spline.svg") + ")"
      }}
    >
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
                type="textarea"
              ></Input>
            </FormGroup>
          </Col>
          <Col xs={12} md={7}>
            <h4>About Us</h4>
            <p>
              Our team of professionals is laser focused on matching each
              individual’s data privacy empowerment with the data privacy
              empowerment of his/her favorite product and service logos.
              Experiencing privacy rights as human needs mutually benefits both
              the consumer and the logo. Through the patent-pending
              Privacyfaves™ platform, each consumer and logo create a continuous
              Score.Educate.Reward™ relationship each time the consumer and logo
              interact. Fun and rewarding for all aged consumers and school
              districts that receive discounts and donations and equally as fun
              and rewarding for the logos that earn a more educated consumer,
              Privacyfaves™ is the progressive choice of the global economy! If
              you are interested to speak to us, please use the contact us form.
            </p>
          </Col>
        </Row>
      </Container>

      <div class="light x1"></div>
      <div class="light x2"></div>
      <div class="light x3"></div>
      <div class="light x4"></div>
      <div class="light x5"></div>
      <div class="light x6"></div>
      <div class="light x7"></div>
      <div class="light x8"></div>
      <div class="light x9"></div>
    </div>
  );
}
