import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Contact = () => {
  const MySwal = withReactContent(Swal);
  const [msj, setMsj] = useState({
    user: "",
    email: "",
    phone: "",
    msj: "",
  });
  const validateForm = () => {
    if (
      (msj.user === "") |
      (msj.phone === "") |
      (msj.email === "") |
      (msj.msj === "")
    ) {
      return true;
    }
  };
  const handleChange = (evt) => {
    const field = evt.target.name;
    const value = evt.target.value;
    setMsj({
      ...msj,
      [field]: value,
    });
  };
  const handleForm = (evt) => {
    evt.preventDefault();
    MySwal.fire({
      icon: "success",
      title: "Mensaje enviado!",
      confirmButtonText: "Volver al Inicio",
    }).then(() => {
      return (window.location.href = "/");
    });
  };
  return (
    <form action="" className="contact__modal--form">
      <legend>
        <h1 className="contact__modal--form--title">Contacto</h1>
      </legend>
      <label htmlFor="user">Nombre</label>
      <input
        type="text"
        name="user"
        className="form__input"
        onChange={handleChange}
        required
      />

      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        name="email"
        className="form__input"
        onChange={handleChange}
        required
      />

      <label htmlFor="phone">Telefono</label>
      <input
        type="number"
        name="phone"
        className="form__input"
        onChange={handleChange}
        required
      />

      <label htmlFor="msj">Mensaje</label>
      <textarea
        name="msj"
        cols="30"
        rows="10"
        className="form__input"
        onChange={handleChange}
      ></textarea>
      <button className="btn" onClick={handleForm} disabled={validateForm()}>
        Enviar
      </button>
    </form>
  );
};

export default Contact;
