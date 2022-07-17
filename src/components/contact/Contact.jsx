import React from "react";

const Contact = () => {
  return (
    <form action="" className="contact__modal--form">
      <legend>
        <h1 className="contact__modal--form--title">Contacto</h1>
      </legend>
      <label htmlFor="user">Nombre</label>
      <input type="text" name="user" required />

      <label htmlFor="email">E-mail</label>
      <input type="email" name="email" required />

      <label htmlFor="phone">Telefono</label>
      <input type="number" name="phone" required />

      <label htmlFor="msj">Mensaje</label>
      <textarea name="msj" cols="30" rows="10"></textarea>
      <button className="btn">Enviar</button>
    </form>
  );
};

export default Contact;
