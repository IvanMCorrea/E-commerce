//Imports
import "./main.scss";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
//Código base
const App = () => {
  return (
    <div className="background">
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

//Export
export default App;
