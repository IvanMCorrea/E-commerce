import React, {useContext} from 'react';
import Item from '../item/Item';
import { cartContext } from '../../context/CartContext';

const Cart = () => {
    const { cart } = useContext(cartContext);
    console.log(cart);
    return (
        <div>
            Cart
            {cart.map((item)=>(
                <Item key={item.id} item={item}/>
            ))
            }
        </div>
    )
}

export default Cart