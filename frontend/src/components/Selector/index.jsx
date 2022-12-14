import { FaMapMarkerAlt } from "react-icons/fa"
import React, { useState } from "react"
import "./Selector.css"
import Select, { components } from 'react-select';

function Selector({cities, setGetIdCity}) {

    const listCities = cities.map(city => (
        {
            value: city.id,
            label: city.name + ", " + city.country.name,
            obj: city,
        }
    ))

    const { Option } = components;
    const IconOption = props => (
        <Option {...props}>
            <div className="city-container">
                <div className="icon-ciy">
                    <FaMapMarkerAlt />
                </div>
                <div className="city-name">
                    <strong className="city">{props.data.obj.name}</strong>
                    <br />
                    <span className="country">{props.data.obj.country.name}</span>
                </div>
            </div>
            <hr className="divider"/>
        </Option>
    );

    const Control = ({ children, ...props }) => (
        <components.Control {...props}>
            <div className="icon-ciy-placeholder">
                <FaMapMarkerAlt />
            </div>
            
            {children}
        </components.Control>
    );

  return (
      <Select
        className="city-selector"
        classNamePrefix="select"
        placeholder={"¿A dónde vamos?"}
        isClearable={true}
        isSearchable={true}
        onChange={(city) => {setGetIdCity(city.value)}}
        options={listCities}
        components={ { Option: IconOption, Control } }
      />
  );
};


export default Selector