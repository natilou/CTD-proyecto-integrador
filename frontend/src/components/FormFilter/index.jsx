import React from 'react';
import { useState } from 'react';
import Calendar from "../Calendar";
import Selector from '../Selector';
import "./FormFilter.css";

function FormFilter({ cities, setProducts }){ 
  
  const [rangeSelected, setRangeSelected] = useState([null, null]);

  const lookForDate = () => {
    // let startRange = rangeSelected[0]
    // let startDay = startRange.getDate();
    // let startMonth = startRange.getMonth();
    // let startYear = startRange.getFullYear();

    // let endRange = rangeSelected[1];
    // let endDay = endRange.getDate();
    // let endMonth = endRange.getMonth();
    // let endYear = endRange.getFullYear();

    // let dateSelected = `${startDay}-${startMonth}-${startYear}--${endDay}-${endMonth}-${endYear}`
    // console.log(dateSelected)

    let startDate = rangeSelected[0].toISOString();
    let endDate = rangeSelected[1].toISOString();
    let dateSelected = `q=${startDate}&q=${endDate}`;
    console.log('http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/products/?' + new URLSearchParams({
      startDate: startDate,
      endDate: endDate
    }));

    try {
      // fetch(`http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/products/${dateSelected}`)
      fetch('http://ec2-3-21-197-14.us-east-2.compute.amazonaws.com:8080/products/?' + new URLSearchParams({
        startDate: startDate,
        endDate: endDate
      }))
        .then((response) => response.json())
        .then((data) => {
          setProducts([{
            "id": 1,
            "name": "Huinid",
            "category": "Hotels",
            "score": "9.3",
            "label_score": "Very good",
            "description": "Located in Buenos Aires, a 10-minute walk from The Obelisk of Buenos Aires, Huinid Obelisco Hotel provides accommodations with a fitness center, private parking and a bar. Featuring family rooms, this property also provides guests with a sun terrace. The property has a 24-hour front desk, a shuttle service, a business center and free WiFi throughout the property.The hotel will provide guests with air-conditioned rooms with a desk, a safety deposit box, a flat-screen TV and a private bathroom with a bidet. All guest rooms feature a closet.",
            "url_location": "https://www.google.com/maps/place/Huinid+Obelisco+Hotel/@-34.6052281,-58.389083,17z/data=!3m1!4b1!4m8!3m7!1s0x95bccacf3fd8bd0d:0x82dce18d925298a2!5m2!4m1!1i2!8m2!3d-34.6052213!4d-58.3868949",
            "distance": "100",
            "city": "Buenos Aires",
            "url_image":"https://res.cloudinary.com/dbdrkxooj/image/upload/v1666303628/DH-PI/inner-space-1026452_640_2_qejya3.png"
        }]);
          console.log(data)
        });
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
          <Selector cities={cities} />
        </div>
        <div className="sub-container" data-testid="formfilter-calendar-subcontainer">
          <div className="calendar-container" data-testid="formfilter-calendar-container">
            <Calendar setRangeSelected={setRangeSelected} />
          </div>
        </div>
        <div className="sub-container" data-testid="formfilter-btn-container">
          <button className='btn_filter' data-testid="formfilter-btn" onClick={lookForDate}>Buscar</button>
        </div>

      </div>
   </section>
 );
}
export default FormFilter;