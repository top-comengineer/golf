import React, { useEffect } from "react";

//animation
import Aos from "aos";

//react-bootstrap components
import { Container, Row, Col, Card } from "reactstrap";

const initialData = [
  {
    src: "assets/img/why/1.jpg",
    title: "Sync Up Your Chips Like Scottie Scheffler",
    content: "Our site shares some tricks to learn golf.",
  },
  {
    src: "assets/img/why/2.png",
    title: "Award-Winning Advice on Playing Better Gold in 2023",
    content: "Jimmy Andreson, the PGA/LPGA Director of Golf Academy.",
  },
  {
    src: "assets/img/why/3.png",
    title: "A Parent's Guide: How to Start Playing Youth Golf",
    content:
      "If your child is showing an interest in golf, here are a few things you should know",
  },
  {
    src: "assets/img/why/5.png",
    title: "Fitness and Golf: How to Feel Better & Play Better in 2023",
    content:
      "Our site accross the country are implementing fitness into their menu of golf instruction programs",
  },
];
export default function Why() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="why">
      <h2 className="weight-600">Improve Your Game On and Off the Course</h2>
      <Container fluid>
        <Row>
          {initialData.map((item, index) => (
            <Col xs={12} md={3} key={index}>
              <Card className="card-background">
                <img
                  src={item.src}
                  alt={item.title}
                  style={{ width: "250px", height: "200px" }}
                />
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
