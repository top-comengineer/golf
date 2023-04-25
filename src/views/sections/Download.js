import React, { useEffect } from "react";

//animation
import Aos from "aos";

//react-bootstrap component
import { Container, Row, Col } from "reactstrap";

const imgData = [
  { src: "assets/img/download/appstore.png", alt: "appstore" },
  { src: "assets/img/download/android.png", alt: "android" },
  { src: "assets/img/download/mobileweb.png", alt: "mobileweb" }
];

const userData = [
  {
    src: "assets/img/download/trading.svg",
    alt: "trading",
    title: "Visitors",
    num: 245892
  },
  {
    src: "assets/img/download/interest.svg",
    alt: "download",
    title: "Downloads",
    num: 15674
  },
  {
    src: "assets/img/download/users.svg",
    alt: "users",
    title: "Users",
    num: 84580
  }
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
          <Col
            xs={12}
            md={6}
            lg={7}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <h2 className="weight-600">Trade 24/7 Earn Anywhere</h2>
            <Row>
              <Col xs={12} md={8}>
                <p>Please use your Smartphone to download.</p>
                <p>Garuda Pro is Now Available on AppStore and GooglePlay.</p>
                <Row className="mt-4">
                  {imgData.map((item, index) => (
                    <Col
                      xs={12}
                      md={5}
                      key={index}
                      className="content-center pb-3"
                    >
                      <img src={item.src} alt={item.src} />
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col xs={12} md={4} className="mobile">
                <img
                  src={require("assets/img/download/QRcode.png")}
                  alt="qrcode"
                />
              </Col>
            </Row>
            <Row
              style={{
                textAlign: "center",
                width: "100%",
                display: "flex",
                justifyContent: "space-around"
              }}
              className="pt-5"
            >
              {userData.map((item, index) => (
                <Col xs={12} md={3} key={index} className="mt-4">
                  <Row
                    style={{
                      boxShadow: "2px 2px 5px white",
                      borderRadius: "10px",
                      backdropFilter: "blur(10px)",
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    <img src={item.src} alt={item.alt} className="pr-3" />
                    <div className="pt-2">
                      <p>{item.title}</p>
                      <h3 className="user-info weight-700">{item.num}</h3>
                    </div>
                  </Row>
                </Col>
              ))}
            </Row>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={5}
            style={{ display: "flex", justifyContent: "center" }}
            className="p-5"
          >
            <img src={require("assets/img/hp.png")} alt="mobile" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
