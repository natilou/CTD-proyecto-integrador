import React from "react";
import "./Home.css"
import categoriData from "../../mock/categories.json"
import logdgingData from "../../mock/lodging.json"
import Header from "../../components/Header";
import FormFilter from "../../components/FormFilter";
import Categories from "../../components/Categories";
import Recomend from "../../components/Recomend";
import Footer from "../../components/Footer";


function Home() {
  const showlogin = true ;
  const showLogout = true;
    return (
      <div className="App">
       <Header showLogin={showlogin} showLogout={showLogout} />
       <FormFilter/>
       <h2 className="title_categories">Buscar por tipo de alojamiento</h2>
       <Categories data={categoriData} />
       <h2 className="title_recomend">Recomendaciones</h2>
       <Recomend dataLodging={logdgingData}/>
       <Footer/>
      </div>
    );
  }
  
  export default Home;
  