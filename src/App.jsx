//Imports
import "./main.scss";
import NavBar from "./components/NavBar/NavBar";
//Código base
const App = () => {
  return (
    <div className="background">
      <NavBar/>
      <h1 className="yellow">Hola Mundo</h1>
    </div>
  );
}

//Export
export default App;
