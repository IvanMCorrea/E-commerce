import React, {useContext, useState} from 'react'
import cartImg from "../../../img/Carrito.svg";
import { cartContext } from '../../../context/CartContext';

const CartWidget = () => {
    const { cart, totalItemsInCart } = useContext(cartContext);
    /* const [showCart, setShowCart] = useState(false);
    const toggleShowCart = () =>{
        if (showCart === false){
            setShowCart(true);
            showCartItems();
        } else {
            setShowCart(false)
        }
    }
    const showCartItems = ()=>{
        if(showCart === true){
            {cart.map((item)=>(
                <div className='itemListContainer__itemList--item'>
                    <img src={item.img} alt="imagen" className='imgList'/>
                    <h2>{item.name}</h2>
                    <h3>{item.category}</h3>
                    <span>$ {item.price}</span><br />
                    <span>Cantidad: {item.cant}</span>
                </div>
            ))
            }
        }
    } */
    
    return (
        <div>
            <button><img src={cartImg} alt="Carrito" className='navBar__list--carrito'/></button>
            {(totalItemsInCart() > 0)
                ? <span>{totalItemsInCart()}</span> 
                : null
            }
        </div>
    )
}

export default CartWidget