import React, { useState, useContext } from "react";
import cartImg from "../../../../assets/Carrito.svg";
import { cartContext } from "../../../../context/CartContext";
import { assetsUrl } from "../../../../context/ImgContext";
import { Link } from "react-router-dom";

function App() {
  const [isShown, setIsShown] = useState(false);
  const { cart, totalItemsInCart } = useContext(cartContext);
  return (
    <div>
      <button onClick={() => (isShown ? setIsShown(false) : setIsShown(true))}>
        <img src={cartImg} alt="Carrito" className="navBar__list--carrito" />
      </button>
      {totalItemsInCart() > 0 ? (
        <span className="cartWidget--count">{totalItemsInCart()}</span>
      ) : null}
      {isShown && (
        <div className="cartWidgetItemList">
          <h2 className="">Carrito</h2>
          {cart.map((item) => (
            <div className="cartWidgetItemList--item" key={item.id}>
              <h2 className="cartWidgetItemList--item--title">{item.name}</h2>
              <img
                src={assetsUrl(`./${item.img}`)}
                alt={item.name}
                className="cartWidgetItemList--img"
              />
              <span className="cartWidgetItemList--item--price">
                $ {item.price}
              </span>
              <br />
              <span>Cantidad: {item.cant}</span>
            </div>
          ))}
          {totalItemsInCart() > 0 ? (
            <Link to={"/cart"}>
              <button className="btn-reverse">Ir al Carrito</button>
            </Link>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default App;
