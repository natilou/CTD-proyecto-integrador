import React from 'react';
import { useState } from 'react';
import Calendar from "../Calendar";
import Selector from '../Selector';
import "./FormFilter.css";

function FormFilter({cities,getFilterCities}){  
  //getFilterCities={getFilterCities}
    const [getIdCity, setGetIdCity] = useState()
    console.log(getIdCity)

    const handleClickCity = (id) => () => {
      getFilterCities(id)
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
            <Calendar />
          </div>
        </div>
        <a href='#FilterCity' className="sub-container" data-testid="formfilter-btn-container">
          <button onClick={handleClickCity(getIdCity)} className='btn_filter' data-testid="formfilter-btn">Buscar</button>
        </a>

      </div>
   </section>
 );
}
export default FormFilter;