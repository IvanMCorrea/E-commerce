import React, { useState, useEffect } from 'react';
import ItemDetail from '../itemDetail/ItemDetail';
import {useParams} from "react-router-dom";
import { traerUnProducto } from "../../services/firestore";

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        traerUnProducto(itemId)
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => {
                console.error(error);      
            });
    }, [itemId]);
    return (
        <div className='itemDetail'>
            <ItemDetail item={product} />
        </div>
    )
}

export default ItemDetailContainer