import React from 'react'
import cartImg from "../../../img/Carrito.svg";

const CartWidget = () => {
    return (
        <img src={cartImg} alt="Carrito" className='navBar__list--carrito' />
    )
}

export default CartWidget