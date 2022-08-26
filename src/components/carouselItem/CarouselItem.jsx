import React from "react";
import { assetsUrl } from "../../context/ImgContext";

const CarouselItem = ({ item }) => {
  return (
    <div>
      <img
        src={assetsUrl(`./${item.url}`)}
        alt={item.name}
        className="imgCarousel"
      />
    </div>
  );
};

export default CarouselItem;
