import React, { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { traerUnProducto } from "../../services/firestore";
import { Link } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [renderizar, setRenderizar] = useState(false);
  useEffect(() => {
    traerUnProducto(id)
      .then((res) => {
        setProduct(res);
      })
      .then(() => {
        setRenderizar(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  const renderizarCod = () => {
    if (product.name === undefined) {
      return (
        <div className="itemListContainer__error">
          <h2 className="itemListContainer__error--msj">
            Upss... no existe este producto
          </h2>
          <Link to="/">
            <button className="btn">Volver al Inicio</button>
          </Link>
        </div>
      );
    } else {
      return <ItemDetail item={product} />;
    }
  };
  return <>{renderizar === true ? renderizarCod() : null}</>;
};

export default ItemDetailContainer;
