import React from 'react';
import Item from '../item/Item';
const ItemList = ({items}) => {
    return (
        <div className='itemListContainer__itemList grid grid-cols-3'>
            {items.map((item)=>(
                <Item key={item.id} item={item}/>
            ))
            }
        </div>
    );
}

export default ItemList;