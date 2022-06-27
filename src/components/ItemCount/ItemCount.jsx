import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd}) => {
    const [count, setCount ] = useState(initial);
    const agregar = () =>{
        if (count < stock){
            setCount(count + 1);
        }
    }
    const restar = () =>{
        if (count > 1){
            setCount(count - 1);
        }
    }
    return (
        <div>
            <button onClick={restar}> - </button>
            <span> {count} </span>
            <button onClick={agregar}> + </button>
            <br />
            <button onClick={onAdd}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount