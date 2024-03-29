import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { traerCarousel } from "../../services/firestore";
import CarouselItem from "../carouselItem/CarouselItem";

const Carousel = () => {
  const settings = {
    className: "carousel",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    focusOnSelect: true,
    variableWidth: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const [carousel, setCarousel] = useState([]);
  const [renderizar, setRenderizar] = useState(false);
  useEffect(() => {
    traerCarousel()
      .then((res) => {
        setCarousel(res);
      })
      .then(() => {
        setRenderizar(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {renderizar === true ? (
        <Slider {...settings}>
          {carousel.map((item) => (
            <CarouselItem key={item.id} item={item} />
          ))}
        </Slider>
      ) : null}
    </>
  );
};
export default Carousel;
