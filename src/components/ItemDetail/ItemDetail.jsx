import React from 'react'

const ItemDetail = ({item}) => {
    return (
        <div>
            <img src={item.img} alt="imagen" className='ItemDetail'/>
            <h2>{item.name}</h2>
            <h3>{item.category}</h3>
            <p>{item.desc}</p>
            <span>$ {item.price}</span>
            <br /><br /><br />
        </div>
    )
}

export default ItemDetail