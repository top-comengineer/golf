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
      title: "Faucet List",
      src: "assets/img/function/faucet.webp",
      content:
        "Choose from our enormous list of 600+ faucets to claim from. We have a faucet list for each currency we support.",
    },
    {
      title: "Affiliate Programme",
      src: "assets/img/function/affiliate.webp",
      content:
        "Refer your friends, family and other people to increase your monthly income many folds. Earn money passively!",
    },
    {
      title: "Exchange",
      src: "assets/img/function/exchange.webp",
      content:
        "Use our cryptocurrency exchange to convert your cryptocurrencies in a matter of seconds! In a blink of an eye!",
    },
    {
      title: "Games",
      src: "assets/img/function/games.webp",
      content:
        "Love games? Sounds great! Win big in our games: Dice, Crash, Limbo Plinko and Roulette",
    },
    {
      title: "Multiple Cryptos",
      src: "assets/img/function/multiple.webp",
      content:
        "Our platform supports all the major currencies such as Bitcoin, Ethereum, Dogecoin, Litecoin and more!",
    },
    {
      title: "Faucet API",
      src: "assets/img/function/faucet-api.webp",
      content:
        "Are you looking to start your own faucet? Harness the power of our robust faucet API to pay your users.",
    },
    {
      title: "Merchant API",
      src: "assets/img/function/merchant.webp",
      content:
        "Choose from our enormous list of 600+ faucets to claim from. We have a faucet list for each currency we support.",
    },
    {
      title: "Advertising",
      src: "assets/img/function/paid.webp",
      content:
        "Get high-quality traffic from our users at FaucetPay which results in great conversions and leads for your business.",
    },
    {
      title: "Paid to Click",
      src: "assets/img/function/offers.webp",
      content:
        "You can take some time and click on the advertisements available on our website to earn some additional income.",
    },
    {
      title: "Offers and Surveys",
      src: "assets/img/function/merchant.webp",
      content:
        "Are you looking to make any serious income? Try out our offer walls where you can earn $10 and more every day.",
    },
  ];
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(180deg,#06060c,#102b5c)",
      }}
    >
      <Container className="function-list">
        <Row>
          {initialData.map((item, index) => (
            <Col xs={12} md={6} key={index} className="single-item pb-4">
              <Fade timeout={index * 300}>
                <img src={item.src} alt={item.title} className="pb-3" />
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
