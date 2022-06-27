import React, {useState} from 'react'
import ItemCount from "../ItemCount/ItemCount"
import {Link} from "react-router-dom";

const ItemDetail = ({item}) => {
    const[ isAdded, setAdded] = useState(false);
    const onAdd = ()=>{
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