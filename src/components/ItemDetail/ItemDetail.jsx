import React, {useState, useContext, useEffect} from 'react';
import ItemCount from "../itemCount/ItemCount"
import {Link} from "react-router-dom";
import { cartContext } from '../../context/CartContext';
import { assetsUrl } from "../../context/ImgContext";

const ItemDetail = ({item}) => {
    const { addToCart } = useContext(cartContext);
    const [ isAdded, setAdded] = useState(false);
    const [ url, setUrl] = useState();
    const onAdd = (count)=>{
        addToCart(item, count)
        setAdded(true);
    }
    useEffect(() => {
        if ((item.img) === undefined){
            console.log(assetsUrl)
        } else return () => {
            setUrl(assetsUrl(`./${item.img}`))
        }
    }, [assetsUrl])
    return (
        <div className='itemDetail'>
            <div className="itemDetail__description">
                <div><img src={url} alt="imagen" className='imgDetail'/></div>
                <h2>{item.name}</h2>
                <h3>{item.category}</h3>
                <p>{item.desc}</p>
                <span>$ {item.price}</span>
                {
                    (isAdded === false)
                    ? <ItemCount onAdd={onAdd} initial={1} stock={item.stock} />
                    : <Link to="/cart"><button className="btn">Ir al Carrito</button></Link>
                }
            </div>
            
            
        </div>
    )
}

export default ItemDetail