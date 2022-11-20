import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../components/Header";
import FormFilter from "../../components/FormFilter";
import Categories from "../../components/Categories";
import Recommendation from "../../components/Recommendation";
import Footer from "../../components/Footer";


function Home() {
  const [sectionCategory, setSectionCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [products, setProducts] = useState([]);
  const [cities, setCities] = useState([]);
  const [poble, setPoble] = useState([]);
  const showLogin = true;
  const showLogout = true;
  const showLine = true;
  const urlCategories = 'http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/categories';
  const urlProducts = 'http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/products';
  const urlCities = 'http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/cities';

  useEffect(() => {
    getdata()
  }, [])

  async function getdata() {
    setIsLoadingData(true);
    try {
      setIsLoadingData(true);

      await fetch(urlCategories)
        .then((response) => response.json())
        .then((categories) => setSectionCategory(categories));

      await fetch(urlProducts)
        .then((response) => response.json())
        .then((products) => setProducts(products));

      await fetch(urlCities)
        .then((response) => response.json())
        .then((cities) => setCities(cities))

      setIsLoadingData(false);
    } catch (error) {
      console.log({ error });
      setIsLoadingData(false);
    }
  }


  async function getCategory(id) {
    setIsLoading(true);
    try {
      setIsLoading(true);
      await fetch(`http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/products/categories/${Number(id)}`)
        .then((response) => response.json())
        .then((data) => setPoble(data));

      setIsLoading(false);
    } catch (error) {
      console.log({ error });
      setIsLoading(false);
    }
  }
  console.log(products)
  return (
    <>
      {
        isLoadingData
          ? (
            <div style={{ width: '90%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }} >
              <span className="loading-spa">Cargando...</span>
            </div >)
          : (
            <div data-testid="home-container">
              <Header showLogin={showLogin} showLogout={showLogout} showLine={showLine} />
              <FormFilter cities={cities} setProducts={setProducts} />
              <h2 className="title_categories" data-testid="home-title">Buscar por tipo de alojamiento</h2>

              <Categories data={sectionCategory} onclick={getCategory} />

              {
                !isLoading &&(
                    <div>
                      <h2 className="main_title_recommedation" data-testid="home-title-2">{poble[0].category.title}</h2>
                      <Recommendation dataLodging={poble} />
                    </div>)
              }
              <h2 className="main_title_recommedation" data-testid="home-title-2">Recomendaciones</h2>
              <Recommendation dataLodging={products} />
              <Footer />
            </div>
          )

      }
    </>
  );

}

export default Home;
