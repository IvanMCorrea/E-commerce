import React, { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList";
import { useParams, Link } from "react-router-dom";
import {
  traerProductos,
  traerProductosDeCategoria,
} from "../../services/firestore";
import PacmanLoader from "react-spinners/PacmanLoader";

const ItemListContainer = (props) => {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);
  const [renderizar, setRenderizar] = useState(false);
  useEffect(() => {
    if (categoriaId) {
      traerProductosDeCategoria(categoriaId)
        .then((res) => {
          setProductos(res);
        })
        .then(() => {
          setRenderizar(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      traerProductos()
        .then((res) => {
          setProductos(res);
        })
        .then(() => {
          setRenderizar(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [categoriaId]);
  const renderizarCod = () => {
    if (productos.length > 0) {
      return (
        <div className="itemListContainer">
          <h1 className="itemListContainer--title">
            {categoriaId === undefined ? props.greetings : categoriaId}
          </h1>
          <ItemList items={productos} />
        </div>
      );
    } else {
      return (
        <div className="itemListContainer__error">
          <h2 className="itemListContainer__error--msj">
            Upss... no existe esta categoria
          </h2>
          <Link to="/">
            <button className="btn">Volver al Inicio</button>
          </Link>
        </div>
      );
    }
  };
  return (
    <>
      {renderizar === true ? (
        renderizarCod()
      ) : (
        <div className="loader">
          <PacmanLoader color={"#dce014"} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
