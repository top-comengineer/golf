import React from "react";
import range from "lodash/range";
import styled from "styled-components";
import ItemsCarousel from "react-items-carousel";

const noOfItems = 8;
const noOfCards = 3;
const autoPlayDelay = 1000;
const chevronWidth = 60;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 600px;
  margin: 0 auto;
`;

const SlideItem = styled.div`
  height: 150px;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

const imgData = [
  "assets/img/footer/footer (1).webp",
  "assets/img/footer/footer (2).webp",
  "assets/img/footer/footer (3).webp",
  "assets/img/footer/footer (4).webp",
  "assets/img/footer/footer (5).webp",
  "assets/img/footer/footer (6).webp",
  "assets/img/footer/footer (1).webp",
  "assets/img/footer/footer (2).webp",
  "assets/img/footer/footer (3).webp",
  "assets/img/footer/footer (4).webp",
  "assets/img/footer/footer (5).webp",
  "assets/img/footer/footer (6).webp",
];
const carouselItems = range(noOfItems).map(index => (
  <SlideItem key={index} style={{ borderRadius: "15px" }}>
    <img
      src={imgData[index]}
      alt={index}
      height="100%"
      width="100%"
      style={{ borderRadius: "15px" }}
    />
  </SlideItem>
));

export default class FooterCarousel extends React.Component {
  state = {
    activeItemIndex: 0,
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () =>
    this.setState(prevState => ({
      activeItemIndex:
        (prevState.activeItemIndex + 1) % (noOfItems - noOfCards + 1),
    }));

  onChange = value => this.setState({ activeItemIndex: value });

  render() {
    return (
      <Wrapper>
        <ItemsCarousel
          gutter={12}
          numberOfCards={noOfCards}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
          chevronWidth={chevronWidth}
          outsideChevron
          children={carouselItems}
        />
      </Wrapper>
    );
  }
}
