import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { Button } from "reactstrap";
export default function StatusBar() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        infiniteLoop
        numberOfCards={5}
        gutter={20}
        leftChevron={
          <Button className="btn-icon btn-round" color="info" type="button">
            <i className="now-ui-icons arrows-1_minimal-left"></i>
          </Button>
        }
        rightChevron={
          <Button className="btn-icon btn-round" color="info" type="button">
            <i className="now-ui-icons arrows-1_minimal-right"></i>
          </Button>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{ height: 200, background: "#EEE" }}>First card</div>
        <div style={{ height: 200, background: "#EEE" }}>Second card</div>
        <div style={{ height: 200, background: "#EEE" }}>Third card</div>
        <div style={{ height: 200, background: "#EEE" }}>Fourth card</div>
        <div style={{ height: 200, background: "#EEE" }}>Fourth card</div>
        <div style={{ height: 200, background: "#EEE" }}>Fourth card</div>
        <div style={{ height: 200, background: "#EEE" }}>Fourth card</div>
        <div style={{ height: 200, background: "#EEE" }}>Fourth card</div>
        <div style={{ height: 200, background: "#EEE" }}>Fourth card</div>
        <div style={{ height: 200, background: "#EEE" }}>Fourth card</div>
        <div style={{ height: 200, background: "#EEE" }}>Fourth card</div>
        <div style={{ height: 200, background: "#EEE" }}>Fourth card</div>
        <div style={{ height: 200, background: "#EEE" }}>Fourth card</div>
        <div style={{ height: 200, background: "#EEE" }}>Fourth card</div>
      </ItemsCarousel>
    </div>
  );
}
