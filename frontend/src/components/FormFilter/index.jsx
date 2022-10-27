import React from 'react';
import Calendar from "../Calendar";
import Selector from '../Selector';
import "./FormFilter.css";

function FormFilter(){  
  return(
    <form className='form_search'>
      <h1 className='form_title'>
        Busca ofertas en hoteles, casas y mucho más
      </h1>
      <div className="container_form">
        <div className="sub-container">
          <Selector />
        </div>
        <div className="sub-container">
          <Calendar />
        </div>
        <div className="sub-container">
          <button className='btn_filter'>Buscar</button>
        </div>

      </div>
   </form>
 );
}
export default FormFilter;