import React from "react";
import "./CardRecommendation.css";
import iconStar from "../../assets/images/icons/iconStar1.png";
import iconGps from "../../assets/images/Vector.png";
import iconwifi from "../../assets/images/icons/iconwifi.png";
import iconnado from "../../assets/images/icons/nado.png";

import "./CardRecommendation.css";
import { Link } from "react-router-dom";

function CardRecommendation({ dataLodging }) {

    const { id, title, category, address, description, city, } = dataLodging
    //, score, label_score,
    //    ,city,distance

    return (
        <article  className="card_recommendation">
            <figure className="recommendation_figure" >
                <img className="image_recommendation" src={category.urlImage} alt={title} />
            </figure>
            <div className="constainer_description">
                <div className="container_section_score">
                    <div>
                        <div className="container_title_star">
                            <p>{category.title}</p>
                            <ul className="list_star">
                                <li>
                                    <img src={iconStar} alt="star" className="icon_star" />
                                </li>
                                <li>
                                    <img src={iconStar} alt="star" className="icon_star" />
                                </li>
                                <li>
                                    <img src={iconStar} alt="star" className="icon_star" />
                                </li>
                                <li>
                                    <img src={iconStar} alt="star" className="icon_star" />
                                </li>
                                <li>
                                    <img src={iconStar} alt="start" className="icon_star" />
                                </li>
                            </ul>
                        </div>
                        <h3 className="title_lodging">{city.name}</h3>
                    </div>
                    <div>
                        <div className="container_number"><p className="number">8</p></div>
                        <p className="state_score">Muy bueno</p>
                    </div>
                </div>
                <div>
                    <div className="location_lodging">
                        <img className="icongps" src={iconGps} alt="icon gps" />
                        <p className="m_location">{address}</p>
                        <p className="link_gps">MOSTRAR EN EL MAPA</p>
                    </div>
                    <div className="container_logding_icons">
                        <img src={iconwifi} alt="star" />
                        <img src={iconnado} alt="star" />
                    </div>

                    <p className="description_lodging">{description}</p>

                </div>
                <Link to={`/product/${category.title}/${id}`} ><button className="btn_lodging">Ver mas</button> </Link>
            </div>
        </article>
    );
}

export default CardRecommendation;