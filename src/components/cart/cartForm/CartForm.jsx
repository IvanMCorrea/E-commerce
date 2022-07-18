import React, { useState, useContext } from "react";
import { cartContext } from "../../../context/CartContext";
import { createBuyOrder } from "../../../services/firestore";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CartForm = (props) => {
  const MySwal = withReactContent(Swal);
  const { cart, clearCart, totalValueInCart } = useContext(cartContext);
  const [buyer, setBuyer] = useState({
    user: "",
    phone: "",
    email: "",
    emailConfirm: "",
  });
  const handleChange = (evt) => {
    const field = evt.target.name;
    const value = evt.target.value;
    setBuyer({
      ...buyer,
      [field]: value,
    });
  };
  const validateForm = () => {
    if (
      (buyer.user === "") |
      (buyer.phone === "") |
      (buyer.email === "") |
      (buyer.email !== buyer.emailConfirm)
    ) {
      return true;
    }
  };
  function handleBuyOrder(evt) {
    evt.preventDefault();
    const dataOrder = {
      buyer,
      items: cart,
      total: totalValueInCart(),
    };
    createBuyOrder(dataOrder).then(() => {
      clearCart();
      props.handleModal();
      MySwal.fire({
        icon: "success",
        title: "Pedido realizado!",
        text: "Su compra fue exitosa",
        confirmButtonText: "Volver al Inicio",
      }).then(() => {
        return (window.location.href = "/");
      });
    });
  }
  return (
    <form action="" className="compra__modal--form">
      <label htmlFor="user">Nombre</label>
      <input
        type="text"
        name="user"
        className="compra__modal--form--input"
        onChange={handleChange}
        required
      />

      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        name="email"
        className="compra__modal--form--input"
        onChange={handleChange}
        required
      />

      <label htmlFor="emailConfirm">Confirmar E-mail</label>
      <input
        type="email"
        name="emailConfirm"
        className="compra__modal--form--input"
        onChange={handleChange}
        required
      />

      <label htmlFor="phone">Telefono</label>
      <input
        type="number"
        name="phone"
        className="compra__modal--form--input"
        onChange={handleChange}
        required
      />

      <button
        className="btn"
        onClick={handleBuyOrder}
        disabled={validateForm()}
      >
        Finalizar Compra
      </button>
    </form>
  );
};

export default CartForm;
