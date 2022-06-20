import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import listaProductos from '../../data/productList.json';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    useEffect(() => {
        const importarProducto = new Promise((res) => {
            setTimeout(()=>{
                res(listaProductos[1]);
            }, 2000);
        });
        importarProducto.then((res) =>{
            setProducto(res);
        });
    }, []);
    return (
        <div className='itemDetail'>
            <ItemDetail item={producto}/>
        </div>
    )
}

export default ItemDetailContainer