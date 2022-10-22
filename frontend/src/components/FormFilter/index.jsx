import React from 'react';
import "./FormFilter.css";
//import DatalistInput from 'react-datalist-input';
//import 'react-datalist-input/dist/styles.css'; 

function FormFilter(){
 return(
   <form className='form_search'>
    <h1 className='form_title'>
    Busca ofertas en hoteles, casas y mucho más
    </h1>
    <div className='container_form'>
    { /*<DatalistInput
    placeholder="Chocolate"
    onSelect={(item) => console.log(item.value)}
    items={[
      { id: 'Cordoba', value: 'Cordaba' },
      { id: 'Buenos Aires', value: 'Buenos Aires' },
      { id: 'Mendoza', value: 'Mendoza' }
    ]}
  /> */}
      <input placeholder='checkin checkout'/>
      <button className='btn_filter'>Buscar</button>
    </div>
   </form>
 );
}
export default FormFilter;