import React from 'react';
import { useState } from 'react';
import Calendar from "../Calendar";
import Selector from '../Selector';
import "./FormFilter.css";

function FormFilter({ cities, setProducts, getFilterCities }){ 
    //getFilterCities={getFilterCities}
      const [getIdCity, setGetIdCity] = useState()
      const [rangeSelected, setRangeSelected] = useState([null, null]);
    
  
      const handleClickCity = (id) => () => {
        getFilterCities(id)
      }
  

  async function lookForDate () {
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
        .then(response =>setProducts(response))
    } catch (error) {
      console.log({ error });
    }
  }

  
  return(

    <section className='form_search' data-testid="formfilter-container">
      <h1 className='form_title' data-testid="formfilter-title">
        Busca ofertas en hoteles, casas y mucho más
      </h1>
      <div className="container_form" data-testid="formfilter-container-form">
        <div className="sub-container" data-testid="formfilter-selector">
          <Selector setGetIdCity={setGetIdCity} cities={cities} />
        </div>
        <div className="sub-container" data-testid="formfilter-calendar-subcontainer">
          <div className="calendar-container" data-testid="formfilter-calendar-container">
            <Calendar setRangeSelected={setRangeSelected} />
          </div>
        </div>
        <div className="sub-container" data-testid="formfilter-btn-container">
        <button onClick={getIdCity ? handleClickCity(getIdCity) : lookForDate} className='btn_filter' data-testid="formfilter-btn">Buscar</button>
        </div>

      </div>
   </section>
 );
}
export default FormFilter;