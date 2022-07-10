import React, {useState, useContext} from 'react';
import { cartContext } from "../../../context/CartContext";
import { createBuyOrder } from "../../../services/firestore";

const CartForm = (props) => {
    const { cart, clearCart, totalValueInCart } = useContext(cartContext);
    const [buyer, setBuyer] = useState({
        user: "",
        phone: "",
        email: "",
    })
    const handleChange = (evt) => {
        const field = evt.target.name;
        const value = evt.target.value;
        setBuyer({
            ...buyer, 
            [field]: value,
        })
    }
    function handleBuyOrder(evt) {
        evt.preventDefault();
        const dataOrder = {
            buyer,
            items: cart,
            total: totalValueInCart(),
        };
        createBuyOrder(dataOrder).then(( orderDataCreated ) => {
            clearCart();
            props.handleModal();
            console.log(orderDataCreated.id);
        });
    }
    return (
        <form action="" className='compra__modal--form'>
            <label htmlFor="user">Nombre</label>
            <input type="text" name='user' onChange={handleChange} required/>
            
            <label htmlFor="email">E-mail</label>
            <input type="email" name='email' onChange={handleChange} required/>
            
            <label htmlFor="phone">Telefono</label>
            <input type="number" name='phone' onChange={handleChange} required/>   

            <button className="btn-reverse" onClick={handleBuyOrder}>Finalizar Compra</button>        
        </form>
    )
}

export default CartForm