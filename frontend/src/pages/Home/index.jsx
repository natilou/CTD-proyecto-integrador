import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../components/Header";
import FormFilter from "../../components/FormFilter";
import Categories from "../../components/Categories";
import Recommendation from "../../components/Recommendation";
import Footer from "../../components/Footer";
import { getDates } from "./utils"
import FilterResults from "../../components/FilterResults";


function Home() {
  const [sectionCategory, setSectionCategory] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [products, setProducts] = useState([]);
  const [cities, setCities] = useState([]);
  const [isLoadingFilterData, setLoadingFilterData] = useState(true);
  const [filterData, setFilterData] = useState([]);
  const [title, setTitle] = useState("");
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
    let category = sectionCategory.find(category => category.id === id);
    try {
      await fetch(`http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/products/categories/${Number(id)}`)
        .then((response) => response.json())
        .then((data) => {
          setFilterData(data)
          setTitle(category.title)
        });
        setLoadingFilterData(false);
    } catch (error) {
      console.log({ error });
      setLoadingFilterData(false);
    }
  }

  async function getFilterCities(id) {
    let citySearched = cities.find(city => city.id === id)
    try {
      await fetch(`http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/products/cities/${Number(id)}`)
        .then((response) => response.json())
        .then((data) => {
          setFilterData(data)
          setTitle(`Ciudad de ${citySearched.name}`)
          
        });

      setLoadingFilterData(false);
      
    } catch (error) {
      console.log({ error });
      setLoadingFilterData(false);
    }
  }

  async function searchByDates (rangeSelected) {
    let range = getDates(rangeSelected)
    let startDate = range[0]
    let endDate = range[1]

    try {
      await fetch("http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/products/dates?" + new URLSearchParams({
        initialDate: startDate,
        endDate: endDate
      }), 
      {
        method: "GET", 
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
      }})
        .then((response) => response.json())
        .then((data) =>{
          setFilterData(data)
          setTitle(`Alojamientos disponibles desde ${startDate} hasta ${endDate}`)
        })
        setLoadingFilterData(false)
    } catch (error) {
      console.log({ error });
      setLoadingFilterData(false)
    }
  }

  async function searchByCityAndDates (cityId, rangeSelected) {
    let range = getDates(rangeSelected)
    let startDate = range[0]
    let endDate = range[1]
    let citySearched = cities.find(city => city.id === cityId)
    try {
      await fetch("http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/products/availability?" + new URLSearchParams({
        initialDate: startDate,
        endDate: endDate,
        cityId: cityId
      }), 
      {
        method: "GET", 
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
      }})
        .then((response) => response.json())
        .then((data) =>{
          setTitle(`Ciudad de ${citySearched.name} desde ${startDate} hasta ${endDate}`)
          setFilterData(data)
        })
        setLoadingFilterData(false)

    } catch (error) {
      console.log({ error });
      setLoadingFilterData(false)
    }
  }
console.log(products)
  return (
    <>
      {
        isLoadingData
          ? (
            <div style={{ width: '90%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center',marginTop:'20%', fontSize:"100px" }} >
              <span className="loading-spa">Cargando...</span>
            </div >)
          : (
            <div data-testid="home-container">
              <Header showLogin={showLogin} showLogout={showLogout} showLine={showLine} />
              <FormFilter cities={cities} searchByDates={searchByDates}  getFilterCities={getFilterCities} searchByCityAndDates={searchByCityAndDates} />
              <h2 className="title_categories" data-testid="home-title">Buscar por tipo de alojamiento</h2>

              <Categories data={sectionCategory} onclick={getCategory} />
              {
                !isLoadingFilterData && (
                  <FilterResults title={title} dataLodging={filterData}/>
                )
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
