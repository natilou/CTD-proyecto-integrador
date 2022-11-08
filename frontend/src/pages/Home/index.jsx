import React, { useEffect, useState }  from "react";
import "./Home.css"
//import categoryData from "../../mock/categories.json"
//import lodgingData from "../../mock/lodging.json"
import Header from "../../components/Header";
import FormFilter from "../../components/FormFilter";
import Categories from "../../components/Categories";
import Recommendation from "../../components/Recommendation";
import Footer from "../../components/Footer";


function Home() {
  const [sectionCategory,setSectionCategory ] = useState([]);
  const [products, setProducts] = useState([]);
  const [cities, setCities] = useState([]);
  const showLogin = true ;
  const showLogout = true;
  const showLine = true;
  //const [first, setfirst] = useState([])
  const urlCategories ='http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/categories';
  const urlProducts ='http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/products';
  const urlCities ='http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/cities';

    useEffect(() => {
      fetch(urlCategories)
      .then((response) => response.json())
      .then((categories) => setSectionCategory(categories))
    },[]);

    useEffect(() => {
      fetch(urlProducts)
      .then((response) => response.json())
      .then((products) => setProducts(products))
      
    },[]);

    useEffect(() => {
      fetch(urlCities)
      .then((response) => response.json())
      .then((cities) => setCities(cities))
      
    },[]);
     // console.log(products)
     // console.log(sectionCategory)
     // console.log(cities);
      
  
    return (
      <div>
        <Header showLogin={showLogin} showLogout={showLogout} showLine={showLine}/>
        <FormFilter cities={cities} />
        
        <h2 className="title_categories">Buscar por tipo de alojamiento</h2>
        <Categories data={sectionCategory} />
        <h2 className="main_title_recommedation">Recomendaciones</h2>
        <Recommendation dataLodging={products}/>
        <Footer/>
      </div>
    );
  }
  
  export default Home;
  