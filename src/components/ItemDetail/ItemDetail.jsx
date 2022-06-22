import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
const ItemDetail = ({item}) => {
    return (
        <div>
            <img src={item.img} alt="imagen" className='imgDetail'/>
            <h2>{item.name}</h2>
            <h3>{item.category}</h3>
            <p>{item.desc}</p>
            <span>$ {item.price}</span>
            <br /><br /><br />
            <ItemCount initial={1} stock={3} />
        </div>
    )
}

export default ItemDetail