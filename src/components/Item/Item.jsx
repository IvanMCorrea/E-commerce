import React from "react";
import { Link } from "react-router-dom";
import { assetsUrl } from "../../context/ImgContext";

const Item = ({ item }) => {
  const urlItem = `/detalle/${item.id}`;
  return (
    <div className="itemListContainer__itemList--item">
      <img src={assetsUrl(`./${item.img}`)} alt="imagen" className="imgList" />
      <h2>{item.name}</h2>
      <h3>{item.category}</h3>
      <span>$ {item.price}</span>
      <br />
      <Link to={urlItem}>
        <button className="btn">Ver Producto</button>
      </Link>
    </div>
  );
};

export default Item;
