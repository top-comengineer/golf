import React, { useEffect } from "react";

//animation
import Aos from "aos";

//react-bootstrap component
import { Container, Row, Col } from "reactstrap";

const teamMembers = [
  {
    src: "assets/img/team/1.jpg",
    alt: "trading",
    name: "Joel Tadman",
    role: "Technical Editor and Golf Gear Expert",
  },
  {
    src: "assets/img/team/2.jpg",
    alt: "download",
    name: "Katie Dawkins",
    role: "Advanced PGA Professional and Top 50 Coach",
  },
  {
    src: "assets/img/team/3.jpg",
    alt: "users",
    name: "Neil Tappin",
    role: "Digital Editor and Golf Gear Guru",
  },
  {
    src: "assets/img/team/4.jpg",
    alt: "users",
    name: "Jeremy Ellwood",
    role: "Contirbuting Editor and Golf Rules Expert",
  },
];
export default function Download() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="download">
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <Container fluid>
        <Row>
          {teamMembers.map((item, index) => (
            <Col xs={12} md={3} key={index} style={{ textAlign: "center" }}>
              <img
                src={item.src}
                alt={item.title}
                style={{ borderRadius: "50%" }}
              />
              <h3 style={{ marginBottom: "5px" }}>{item.name}</h3>
              <p>{item.role}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
