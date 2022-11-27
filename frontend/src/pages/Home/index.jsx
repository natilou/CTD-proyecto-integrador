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
  const [isLoadingDataCities, setIsLoadingDataCities] = useState(true);
  const [isLoadingDataDates, setIsLoadingDataDates] = useState(true);
  const [products, setProducts] = useState([]);
  const [cities, setCities] = useState([]);
  const [dataFilterCategory, setDataFilterCategory] = useState([]);
  const [dataCities, setDataCities] = useState([]);
  const [idCity, setIdCity] = useState();
  const [dataDates, setDataDates] = useState([]);
  const [selectedStartDate, setSelectedStartDate] = useState();
  const [selectedEndDate, setSelectedEndDate] = useState();
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
        .then((data) => setDataFilterCategory(data));

      setIsLoading(false);
    } catch (error) {
      console.log({ error });
      setIsLoading(false);
    }
  }

  async function getFilterCities(id) {
    setIdCity(id);
    setIsLoadingDataCities(true);
    try {
      setIsLoadingDataCities(true);
      await fetch(`http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/products/cities/${Number(id)}`)
        .then((response) => response.json())
        .then((data) => {
          setDataCities(data)
        });

      setIsLoadingDataCities(false);
      
    } catch (error) {
      console.log({ error });
      setIsLoadingDataCities(false);
    }
  }

  async function searchByDates (rangeSelected) {
    let startDay = rangeSelected[0].getDate();
    let startMonth= rangeSelected[0].getMonth()+1;
    let startYear = rangeSelected[0].getFullYear();
    let endDay = rangeSelected[1].getDate();
    let endMonth= rangeSelected[1].getMonth();
    let endYear = rangeSelected[1].getFullYear();
    let startDate = `${startYear}-${startMonth}-${startDay}`;
    let endDate = `${endYear}-${endMonth}-${endDay}`;

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
        .then((data) =>setDataDates(data))
        setIsLoadingDataDates(false)
        setSelectedStartDate(startDate)
        setSelectedEndDate(endDate)
    } catch (error) {
      console.log({ error });
      setIsLoadingDataDates(false)
    }
  }

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
              <FormFilter cities={cities} searchByDates={searchByDates}  getFilterCities={getFilterCities} />
              <h2 className="title_categories" data-testid="home-title">Buscar por tipo de alojamiento</h2>

              <Categories data={sectionCategory} onclick={getCategory} />

              {
                !isLoading &&(
                    <div>
                      <h2 className="main_title_recommedation" data-testid="home-title-2">{dataFilterCategory[0].category.title}</h2>
                      <Recommendation dataLodging={dataFilterCategory} />
                    </div>)
              }
              {
                !isLoadingDataCities &&(
                    <div id="FilterCity">
                      <h2 className="main_title_recommedation" data-testid="home-title-2">Ciudad de {cities.find(city => city.id === idCity).name}</h2>
                      <Recommendation dataLodging={dataCities} />
                    </div>)
              }
              {
                !isLoadingDataDates &&(
                    <div id="FilterCity">
                      <h2 className="main_title_recommedation" data-testid="home-title-2">Alojamientos disponibles desde {selectedStartDate} hasta {selectedEndDate}</h2>
                      <Recommendation dataLodging={dataDates} />
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
