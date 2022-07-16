import React, { useState, useContext } from "react";
import cartImg from "../../../../assets/Carrito.svg";
import { cartContext } from "../../../../context/CartContext";
import { assetsUrl } from "../../../../context/ImgContext";

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
          {cart.map((item) => (
            <div className="cartWidgetItemList--item" key={item.id}>
              <img
                src={assetsUrl(`./${item.img}`)}
                alt="imagen"
                className="cartWidgetItemList--img"
              />
              <h2>{item.name}</h2>
              <span>$ {item.price}</span>
              <br />
              <span>Cantidad: {item.cant}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
