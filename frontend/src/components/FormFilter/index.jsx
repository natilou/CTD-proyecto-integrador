import React from 'react';
import Calendar from "../Calendar";
import Selector from '../Selector';
import "./FormFilter.css";

function FormFilter({cities}){  
  return(
    <section className='form_search'>
      <h1 className='form_title'>
        Busca ofertas en hoteles, casas y mucho más
      </h1>
      <div className="container_form">
        <div className="sub-container">
          <Selector cities={cities} />
        </div>
        <div className="sub-container">
          <div className="calendar-container">
            <Calendar />
          </div>
        </div>
        <div className="sub-container">
          <button className='btn_filter'>Buscar</button>
        </div>

      </div>
   </section>
 );
}
export default FormFilter;