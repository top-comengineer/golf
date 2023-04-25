import React, { useEffect } from "react";

//animation
import Aos from "aos";

//react-bootstrap components
import { Container, Row, Col, Card } from "reactstrap";

const initialData = [
  {
    src: "assets/img/why/secure.png",
    title: "Top Secure Trading Platform",
    content:
      "All your investment & asset is secured by the highest level on BitForex.",
  },
  {
    src: "assets/img/why/bug.png",
    title: "Bug Bounty & White Hat",
    content:
      "High rewards for researchers who find serious vulnerabilities that affect system security",
  },
  {
    src: "assets/img/why/professional.png",
    title: "Professional Connectivity",
    content:
      "24/7 support, get accurate and professional support across multiple time zones",
  },
];
export default function Why() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="why">
      <h2 className="weight-600">Why our platform?</h2>
      <Container fluid>
        <Row>
          {initialData.map((item, index) => (
            <Col xs={12} md={4} key={index}>
              <Card className="card-background">
                <img src={item.src} alt={item.title} />
                <h3 className="weight-600">{item.title}</h3>
                <p>{item.content}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
