import React, {useState, useContext} from 'react';
import ItemCount from "../itemCount/ItemCount"
import {Link} from "react-router-dom";
import { cartContext } from '../../context/CartContext';

const ItemDetail = ({item}) => {
    const { addToCart } = useContext(cartContext);
    const [ isAdded, setAdded] = useState(false);
    const onAdd = (count)=>{
        addToCart(item, count)
        setAdded(true);
    }
    return (
        <div className='itemDetail'>
            <img src={item.img} alt="imagen" className='imgDetail'/>
            <div className="itemDetail__description">
                <h2>{item.name}</h2>
                <h3>{item.category}</h3>
                <p>{item.desc}</p>
                <span>$ {item.price}</span>
                {
                    (isAdded === false)
                    ? <ItemCount onAdd={onAdd} initial={1} stock={item.stock} />
                    : <Link to="/cart"><button className="btn">Ir al Carrito</button></Link>
                }
            </div>
            
            
        </div>
    )
}

export default ItemDetail