import { FaMapMarkerAlt } from "react-icons/fa"
import React, { useState } from "react"
import "./Selector.css"

function Selector({cities, setGetIdCity}) {
   const [isOpen, setIsOpen] = useState(false)
   const [selectedOption, setSelectedOption] = useState(null)
  // const cities = [
   // { id: 1, name: 'San Carlos de Bariloche', country: 'Argentina'},
   // { id: 2, name: 'Buenos Aires', country: 'Argentina'},
   // { id: 3, name: 'Mendoza', country: 'Argentina' },
   // { id: 4, name: 'Córdoba', country: 'Argentina'},
  //]
 
  const toggling = () => setIsOpen(!isOpen)

  const handleClick = (city,id) => () => {
    setSelectedOption(city);
    setIsOpen(false);
    setGetIdCity(id)
  }
  

  return (
    <section className="location">
        <div className="select">
            <div onClick={toggling} className="preselected-option">
                <div className="icon-preselected">
                    <FaMapMarkerAlt/>
                </div>
                <p className="city-name">
                    {selectedOption || "¿A dónde vamos?"}
                </p>
            </div>

            {
                isOpen && (
                    <div className="list-container">
                        <ul className="select">
                            {
                                cities.map((city) => (
                                    <li value={city.name} key={city.id} className="select" onClick={handleClick(city.name,city.id)}>
                                        <div className="list-content">
                                            <div className="text-container">
                                                <div className="icon">
                                                    <FaMapMarkerAlt />
                                                </div>
                                                <div className="city-name">
                                                    {city.name}
                                                    <div>
                                                        <p className="country">{city.country.name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="divider" />
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>  
                    </div>
                )
            }
        </div>
    </section>
  )
}

export default Selector