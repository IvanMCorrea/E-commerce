import React, { useState, useContext, useEffect } from "react";
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContext";
import { assetsUrl } from "../../context/ImgContext";

const ItemDetail = ({ item }) => {
  const { addToCart } = useContext(cartContext);
  const [isAdded, setAdded] = useState(false);
  const onAdd = (count) => {
    if (item.id !== undefined) {
      addToCart(item, count);
      setAdded(true);
    }
  };
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (item.img !== undefined) {
      setUrl(assetsUrl(`./${item.img}`));
    }
  }, [item]);
  return (
    <div className="itemDetail">
      <img src={url} alt={item.name} className="imgDetail" />
      <div className="itemDetail__description">
        <h2>{item.name}</h2>
        <h3>{item.category}</h3>
        <p>{item.desc}</p>
        <span>$ {item.price}</span>
        {isAdded === false ? (
          <ItemCount onAdd={onAdd} initial={1} stock={item.stock} />
        ) : (
          <div>
            <Link to="/cart">
              <button className="btn">Ir al Carrito</button>
            </Link>
            <Link to="/productos">
              <button className="btn">Seguir Comprando</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
