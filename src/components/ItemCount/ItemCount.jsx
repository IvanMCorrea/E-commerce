import { useState } from 'react'

const ItemCount = ({ stock, initial}) => {
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
        </div>
    )
}

export default ItemCount