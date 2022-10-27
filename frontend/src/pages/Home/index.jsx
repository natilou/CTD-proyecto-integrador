import React from "react";
import "./Home.css"
import categoryData from "../../mock/categories.json"
import lodgingData from "../../mock/lodging.json"
import Header from "../../components/Header";
import FormFilter from "../../components/FormFilter";
import Categories from "../../components/Categories";
import Recommendation from "../../components/Recommendation";
import Footer from "../../components/Footer";


function Home() {
  const showLogin = true ;
  const showLogout = true;
  const showLine = true;

    return (
      <div>
        <Header showLogin={showLogin} showLogout={showLogout} showLine={showLine}/>
        <FormFilter/>
        <h2 className="title_categories">Buscar por tipo de alojamiento</h2>
        <Categories data={categoryData} />
        <h2>Recomendaciones</h2>
        <Recommendation dataLodging={lodgingData}/>
        <Footer/>
      </div>
    );
  }
  
  export default Home;
  