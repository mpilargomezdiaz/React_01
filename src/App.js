import './App.css';
import Header from "./components/Header";
import Nombre from "./components/Nombre";
import Apellidos from "./components/Apellidos";
import Genero from "./components/Genero";
import Email from "./components/Email";
import OpcionesAd from "./components/OpcionesAd";
import Enviar from "./components/Enviar";
import Poblacion from "./components/Poblacion";
import Descripcion from "./components/Descripcion";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="form">
      <Header/>
      <Nombre/>
      <Apellidos/>
      <Genero />
      <Email/>
      <Poblacion/>
      <Descripcion/>
      <OpcionesAd/>
      </div>
      <Enviar/>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
