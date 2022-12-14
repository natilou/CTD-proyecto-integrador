import React from 'react';
import { useState } from 'react';
import Calendar from "../Calendar";
import Selector from '../Selector';
import "./FormFilter.css";
import Swal from 'sweetalert2';

function FormFilter({ cities, searchByDates, getFilterCities, searchByCityAndDates }){ 

      const [getIdCity, setGetIdCity] = useState()
      const [rangeSelected, setRangeSelected] = useState([null, null]);
    

      const handleClick =() => {
        if(!getIdCity && !rangeSelected[0] && !rangeSelected[1]){
          Swal.fire({
            icon: 'error',
            text: 'Debes seleccionar una ciudad o un rango de fechas para realizar la búsqueda',
          })
        } else if(getIdCity && !rangeSelected[0] && !rangeSelected[1]){
          getFilterCities(getIdCity)
        } else if (rangeSelected && !getIdCity){
          searchByDates(rangeSelected)
        } else if (getIdCity && rangeSelected){
          searchByCityAndDates(getIdCity, rangeSelected)
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
        <button onClick={handleClick} className='btn_filter' data-testid="formfilter-btn">Buscar</button>
        </div>

      </div>
   </section>
 );
}
export default FormFilter;