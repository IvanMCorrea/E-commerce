import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import { traerProductos, traerProductosDeCategoria } from '../../services/firestore';


const ItemListContainer = (props) => {
    const { categoriaId } = useParams();
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        if (categoriaId) {
            traerProductosDeCategoria(categoriaId)
                .then((res) => {
                    setProductos(res);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            traerProductos()
                .then((res) => {
                    setProductos(res);
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        }, [categoriaId]);
    const styleText = {
        color: props.textColor,
    }
    return (
        <div className='itemListContainer'>
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