import React, { useEffect } from "react";
//animation
import Aos from "aos";
import { Container, Row, Col, Fade } from "reactstrap";

export default function FunctionList() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const initialData = [
    {
      title: "XXXXX",
      src: "assets/img/function/equ (1).jpg",
      content: "Hello everyone. Please use this stick",
    },
    {
      title: "XXXXX",
      src: "assets/img/function/equ (1).png",
      content: "Hello everyone. Please use this.",
    },
    {
      title: "AAAAAA",
      src: "assets/img/function/equ (2).jpg",
      content: "",
    },
    {
      title: "Games",
      src: "assets/img/function/equ (2).png",
      content: "",
    },
    {
      title: "EEEEEEEE",
      src: "assets/img/function/equ (3).jpg",
      content: "",
    },
    {
      title: "FFFFFFFF",
      src: "assets/img/function/equ (4).jpg",
      content: "",
    },
    {
      title: "GGGGGGG",
      src: "assets/img/function/equ (5).jpg",
      content: "",
    },
  ];
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(180deg,#06060c,#102b5c)",
      }}>
      <Container className="function-list">
        <h1 style={{ fontWeight: "bold", color: "wheat" }}>Equipments</h1>
        <Row>
          {initialData.map((item, index) => (
            <Col xs={12} md={6} key={index} className="single-item pb-4">
              <Fade timeout={index * 300}>
                <img
                  src={item.src}
                  alt={item.title}
                  className="pb-3"
                  style={{ width: "200px", height: "200px" }}
                />
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
