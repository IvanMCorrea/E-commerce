import React, { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { traerUnProducto } from "../../services/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    traerUnProducto(id)
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  return (
    <>
      <ItemDetail item={product} />
    </>
  );
};

export default ItemDetailContainer;
