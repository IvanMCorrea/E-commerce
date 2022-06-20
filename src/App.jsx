//Imports
import "./main.scss";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
//Código base
const App = () => {
  return (
    <div className="background">
      <NavBar/>
      <h1 className="yellow">Hola Mundo</h1>
      <ItemListContainer greetings="Lista de Productos" textColor="white"/>
      <ItemDetailContainer/>
    </div>
  );
}

//Export
export default App;
