import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import listaProductos from '../../data/productList.json';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
    const { categoriaId } = useParams();
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const importarProductos = new Promise((res) => {
            if(categoriaId === undefined){
                res(listaProductos);
            } else{
                const buscarCategoria = listaProductos.filter( obj =>{
                    return obj.category === categoriaId;
                })
                res(buscarCategoria);
            }
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
            <h1 style={styleText} className="itemListContainer--title">
                {
                    (categoriaId === undefined)
                    ? props.greetings
                    : categoriaId
                }
            </h1>
            <ItemList items={productos}/>
        </div>
    )
}

export default ItemListContainer