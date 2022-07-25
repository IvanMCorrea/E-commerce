import React, { useState, createContext } from "react";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCant, setCartCant] = useState();
  //Verificar si esta en carrito
  const isInCartContext = (id) => {
    return cart.some((item) => item.id === id);
  };
  //Agregar al carrito
  const addToCart = (item, cant) => {
    if (isInCartContext(item.id) === false) {
      setCart([...cart, { ...item, cant }]);
    } else {
      let array = cart;
      let index = cart.findIndex((a) => a.id === item.id);
      let suma = cant + cart[index].cant;
      array[index].cant = suma;
      setCart(array);
    }
    setCartCant(totalItemsInCart());
  };
  //Limpiar carrito
  const clearCart = () => {
    setCart([]);
  };
  //Total carrito
  const totalItemsInCart = () => {
    let total = 0;
    cart.forEach((item) => (total = total + item.cant));
    return total;
  };
  //Valor Total carrito
  const totalValueInCart = () => {
    let total = 0;
    cart.forEach((item) => {
      let precio = item.cant * item.price;
      total = total + precio;
    });
    return total;
  };
  //Borrar item
  const eraseItemFromCart = (id) => {
    let newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };
  return (
    <cartContext.Provider
      value={{
        cart,
        cartCant,
        totalItemsInCart,
        addToCart,
        isInCartContext,
        clearCart,
        totalValueInCart,
        eraseItemFromCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
