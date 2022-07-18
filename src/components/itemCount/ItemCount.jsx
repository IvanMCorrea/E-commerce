import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const agregar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <button className="btn" onClick={restar}>
        {" "}
        -{" "}
      </button>
      <span className="itemDetail__description__count"> {count} </span>
      <button className="btn" onClick={agregar}>
        {" "}
        +{" "}
      </button>
      <br />
      <button className="btn" onClick={() => onAdd(count)}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemCount;
