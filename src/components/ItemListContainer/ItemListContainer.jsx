import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import listaProductos from '../../data/productList.json';

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const importarProductos = new Promise((res) => {
            setTimeout(()=>{
                res(listaProductos);
            }, 2000);
        });
        importarProductos.then((res) =>{
            setProductos(res);
        });
    }, []);
    const styleText = {
        color: props.textColor,
    }
    return (
        <div className='itemListContainer'>
            <ItemList items={productos}/>
            <h2 style={styleText}>{props.greetings}</h2>
            <ItemCount initial={1} stock={3} />
        </div>
    )
}

export default ItemListContainer