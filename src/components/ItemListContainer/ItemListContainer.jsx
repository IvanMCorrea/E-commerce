import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import listaProductos from '../../data/productList.json';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
    const { categoriaId } = useParams();
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const importarProductos = new Promise((res) => {
            setTimeout(()=>{
                if(categoriaId === undefined){
                    res(listaProductos);
                } else{
                    const buscarCategoria = listaProductos.filter( obj =>{
                        return obj.category === categoriaId;
                    })
                    res(buscarCategoria);
                }
            }, 1000);
        });
        importarProductos.then((res) =>{
            setProductos(res);
        });
    }, [categoriaId]);
    const styleText = {
        color: props.textColor,
    }
    return (
        <div className='itemListContainer w-full'>
            <h2 style={styleText}>{props.greetings}</h2>
            <ItemList items={productos}/>
        </div>
    )
}

export default ItemListContainer