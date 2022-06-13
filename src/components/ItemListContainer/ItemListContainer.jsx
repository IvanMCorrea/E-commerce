import React from 'react'
import ItemCount from './ItemCount/ItemCount'

const ItemListContainer = (props) => {
    const styleText = {
        color: props.textColor,
    }
    return (
        <div className='itemList'>
            <h2 style={styleText}>{props.greetings}</h2>
            <ItemCount initial={1} stock={3} />
        </div>
    )
}

export default ItemListContainer