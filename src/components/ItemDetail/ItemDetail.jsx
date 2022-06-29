import React, {useState, useContext} from 'react';
import ItemCount from "../itemCount/ItemCount"
import {Link} from "react-router-dom";
import { cartContext } from '../../context/CartContext';

const ItemDetail = ({item}) => {
    const { addToCart } = useContext(cartContext);
    const [ isAdded, setAdded] = useState(false);
    const [ cant, setCant] = useState([]);
    const onAdd = (count)=>{
        setCant(count);
        addToCart(item, count)
        setAdded(true);
    }
    return (
        <div>
            <img src={item.img} alt="imagen" className='imgDetail'/>
            <h2>{item.name}</h2>
            <h3>{item.category}</h3>
            <p>{item.desc}</p>
            <span>$ {item.price}</span>
            <br /><br /><br />
            {
                (isAdded === false)
                ? <ItemCount onAdd={onAdd} initial={1} stock={3} />
                : <Link to="/cart"><button>Ir al Carrito</button></Link>
            }
            
        </div>
    )
}

export default ItemDetail