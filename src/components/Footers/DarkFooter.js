/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

//carousel
import FooterCarousel from "./FooterCarousel";
import ServiceMenu from "./ServiceMenu";

const comImg = [
  {
    icon: "now-ui-icons business_globe",
    to: "https://garudametaindonesia.com/"
  },
  {
    icon: "fab fa-twitter",
    to: "https://twitter.com/AlfredPilist?t=VxfUON7fr9k9o0zCaSdoUg&s=09"
  },
  {
    icon: "fab fa-facebook-square",
    to: "https://www.facebook.com/profile.php?id=100089573145867&mibextid=ZbWKwL"
  },
  {
    icon: "fab fa-instagram",
    to: "https://instagram.com/garmein?igshid=ZDdkNTZiNTM="
  },
  { icon: "fab fa-telegram", to: "https://t.me/garudametaindonesia" },
  {
    icon: "fab fa-youtube",
    to: "https://www.youtube.com/@garudametaindonesia"
  },
  {
    icon: "fab fa-tiktok",
    to: "https://www.tiktok.com/@garuda_meta_indonesia"
  }
];
function DarkFooter() {
  return (
    <footer
      className="footer"
      data-background-color="black"
      style={{
        backgroundImage: "url(assets/img/footer/download.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        height: "600px",
        padding: "40px",
        position: "relative"
      }}
    >
      <FooterCarousel />
      <ServiceMenu />
      <Container fluid>
        <Row>
          <Col xs={12} md={6} lg={3}></Col>
          <Col xs={12} md={6} lg={3}></Col>
          <Col xs={12} md={6} lg={3}></Col>
        </Row>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px"
          }}
        >
          <h2 className="weight-800">Thanks for your supporting us!</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          {comImg.map((icon, index) => (
            <a href={icon.to} target="_blank" key={index}>
              <Button
                color="warning"
                className="btn-icon btn-round"
                type="button"
                style={{
                  marginRight: "10px",
                  width: "50px",
                  height: "50px"
                }}
              >
                <i className={icon.icon} style={{ fontSize: "25px" }}></i>
              </Button>
            </a>
          ))}
        </div>
        <div style={{ marginTop: "100px" }}>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Ecosystem</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © copyright :garudametaindonesia{new Date().getFullYear()}
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
