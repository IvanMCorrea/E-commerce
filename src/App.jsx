//Imports
import "./main.scss";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

//Código base
const App = () => {
  return (
    <div className="background">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <h1 className="yellow">Hola Mundo</h1>
          <Routes>
            {/* Home */}
            <Route path="/" element={<ItemListContainer greetings="Lista de Productos" textColor="white"/>}/>
            {/* Lista de Productos */}
            <Route path="/productos" element={<ItemListContainer greetings="Lista de Productos" textColor="white"/>}/>
            {/* Detalle de Productos */}
            <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
            {/* Categorías de Productos */}
            <Route path="/categoria/:categoriaId" element={<ItemListContainer greetings="Lista de Productos" textColor="white"/>}/>
            {/* Carrito */}
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

//Export
export default App;
