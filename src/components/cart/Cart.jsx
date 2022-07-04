import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import { cartContext } from '../../context/CartContext';

const Cart = () => {
    const { cart, eraseItemFromCart } = useContext(cartContext);
    let total = 0;
    const sumarItem = (item) =>{
        let precio = item.price * item.cant;
        total = total + precio;
    }
    return (
        <div>
            <h1>Cart</h1>
            {cart.map((item)=>(
                <div className='cart__Items'>
                    <img src={item.img} alt="imagen" className='cart__Items--img'/>
                    <h2>{item.name}</h2>
                    <h3>{item.category}</h3>
                    <span>$ {item.price}</span><br />
                    <span>Cantidad: {item.cant}</span>
                    {sumarItem(item)}
                    <button onClick={()=>eraseItemFromCart(item.id)}>X</button>
                </div>
            ))
            }
            {
                (!cart.length)
                ? <div><h1>No tienes ningun item en el carrito</h1><Link to="/"><button>Volver al Inicio</button></Link></div>
                : <div><h2>Total: {total}</h2><br /><button>Terminar mi compra</button></div>
            }
            {console.log(cart.lenght)}
        </div>
    )
}

export default Cart