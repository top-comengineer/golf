/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <div className="banner">
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/banner/points.jpg") + ")",
        }}
        className="banner-image"
      >
        <Container className="content">
          <Row>
            <Col xs={12} md={5} className="content-center">
              <div>
                <h2 className="title weight-900">GARUDA META INDONESIA</h2>
                <h3 className="weight-700">
                  Start mining cryptocurrency today with our free, energy-light
                  mobile app.
                </h3>
              </div>
            </Col>
            <Col xs={12} md={7} className="content-center">
              <img
                src={require("assets/img/banner/symbol (1).png")}
                alt="symbol"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default IndexHeader;
