import React from 'react'

const ItemListContainer = (props) => {
    const styleText = {
        color: props.textColor,
    }
    return (
        <h2 style={styleText}>{props.greetings}</h2>
    )
}

export default ItemListContainer