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
        // pageHeader.current.style.transform =
        //   "translate3d(0," + windowScrollTop + "px,0)";
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
          backgroundImage: "url(" + require("assets/img/bg.jpg") + ")",
        }}
        className="banner-image">
        <Container className="content">
          <Row>
            <Col xs={12} md={5} className="content-center">
              <div>
                <h1 className="title weight-900">Live Golf</h1>
                <h3 className="weight-700">
                  Exciting, Amazing. Everybody can enjoy here.
                </h3>
              </div>
            </Col>
            <Col xs={12} md={7} className="content-center">
              <img src={require("assets/img/logo.png")} alt="symbol" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default IndexHeader;
