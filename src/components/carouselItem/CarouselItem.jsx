import React from "react";
import { assetsUrl } from "../../context/ImgContext";
import { Link } from "react-router-dom";

const CarouselItem = ({ item }) => {
  const urlItem = `/${item.category}`;
  return (
    <div>
      <Link to={urlItem}>
        <img
          src={assetsUrl(`./${item.img}`)}
          alt={item.name}
          className="imgList"
        />
      </Link>
    </div>
  );
};

export default CarouselItem;
