import React from 'react';
import Calendar from "../Calendar";
import Selector from '../Selector';
import "./FormFilter.css";

function FormFilter({cities}){  
  return(
    <section className='form_search' data-testid="formfilter-container">
      <h1 className='form_title' data-testid="formfilter-title">
        Busca ofertas en hoteles, casas y mucho más
      </h1>
      <div className="container_form" data-testid="formfilter-container-form">
        <div className="sub-container" data-testid="formfilter-selector">
          <Selector cities={cities} />
        </div>
        <div className="sub-container" data-testid="formfilter-calendar-subcontainer">
          <div className="calendar-container" data-testid="formfilter-calendar-container">
            <Calendar />
          </div>
        </div>
        <div className="sub-container" data-testid="formfilter-btn-container">
          <button className='btn_filter' data-testid="formfilter-btn">Buscar</button>
        </div>

      </div>
   </section>
 );
}
export default FormFilter;