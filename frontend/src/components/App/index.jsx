import { BrowserRouter } from "react-router-dom";
import Footer from '../Footer';
import FormFilter from "../FormFilter";
import Header from '../Header';
import './App.css';
import categoriData from "../../mock/categories.json"
import logdgingData from "../../mock/lodging.json"
import Categories from "../Categories";
import Recomend from "../Recomend";

function App() {
  return (
  <BrowserRouter>
    <div className="App">
     <Header/>
     <FormFilter/>
     <h2 className="title_categories">Buscar por tipo de alojamiento</h2>
     <Categories data={categoriData} />
     <h2 className="title_recomend">Recomendaciones</h2>
     <Recomend dataLodging={logdgingData}/>
     <Footer/>
    </div>
  </BrowserRouter>
  );
}

export default App;
