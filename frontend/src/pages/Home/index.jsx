import React, { useState }  from "react";
import "./Home.css"
import categoryData from "../../mock/categories.json"
import lodgingData from "../../mock/lodging.json"
import Header from "../../components/Header";
import FormFilter from "../../components/FormFilter";
import Categories from "../../components/Categories";
import Recommendation from "../../components/Recommendation";
import Footer from "../../components/Footer";


function Home() {
  const [sectionCategory,setSectionCategory ] = useState(null);
  const showLogin = true ;
  const showLogout = true;
  const showLine = true;
  /*const [first, setfirst] = useState([])
  const url ='ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/categories'
  const getProductos  = async (url) => {
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    console.log(datos)
    
    this.setState({
        productos : datos
    })
}*/
console.log(setSectionCategory)
  
    return (
      <div data-testid="home-container">
        <Header showLogin={showLogin} showLogout={showLogout} showLine={showLine}/>
        <FormFilter/>
        {
          sectionCategory &&
          <>
          <Categories data={categoryData} />
          </>
        }
        <h2 className="title_categories" data-testid="home-title">Buscar por tipo de alojamiento</h2>
        <Categories data={categoryData} />
        <h2 className="main_title_recommedation" data-testid="home-title-2">Recomendaciones</h2>
        <Recommendation dataLodging={lodgingData}/>
        <Footer />
      </div>
    );
  }
  
  export default Home;
  