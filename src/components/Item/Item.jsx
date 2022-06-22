import React from 'react';

const Item = ({item}) => {
    return (
        <div className='itemListContainer__itemList--item'>
            <img src={item.img} alt="imagen" className='imgList'/>
            <h2>{item.name}</h2>
            <h3>{item.category}</h3>
            <p>{item.desc}</p>
            <span>$ {item.price}</span>
        </div>
    )
}

export default Item