import React, { Component } from "react";
import Slider from "react-slick";
import CarouselItem from "../carouselItem/CarouselItem";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
    };
    const items = [];
    return (
      <>
        <Slider {...settings}>
          <div>
            {items.map((item) => (
              <CarouselItem key={item.id} item={item} />
            ))}
          </div>
        </Slider>
      </>
    );
  }
}
