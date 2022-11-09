import React from "react";
import "./CardRecommendation.css";
import iconStar from "../../assets/images/icons/iconStar1.png";
import iconGps from "../../assets/images/Vector.png";
import iconwifi from "../../assets/images/icons/iconwifi.png";
import iconnado from "../../assets/images/icons/nado.png";

import "./CardRecommendation.css";
import { Link } from "react-router-dom";

function CardRecommendation({ dataLodging }) {
    
    const { name, category, url_image, description } = dataLodging
    //, score, label_score,
    //    ,city,distance
    return (
        <article className="card_recommendation" data-testid="cardrecommendation-container">
            <figure className="recommendation_figure" data-testid="cardrecommendation-figure">
                <img className="image_recommendation" src={url_image} alt={name} data-testid="cardrecommendation-img"/>
            </figure>
            <div className="constainer_description" data-testid="cardrecommendation-description-container">
                <div className="container_section_score" data-testid="cardrecommendation-score">
                    <div>
                        <div className="container_title_star" data-testid="cardrecommendation-container-star">
                            <p>{category}</p>
                            <ul className="list_star" data-testid="cardrecommendation-ul">
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
                        <h3 className="title_lodging" data-testid="cardrecommendation-title">{name}</h3>
                    </div>
                    <div>
                        <div className="container_number" data-testid="cardrecommendation-score-number"><p className="number">8</p></div>
                        <p className="state_score" data-testid="cardrecommendation-score-p">Muy bueno</p>
                    </div>
                </div>
                <div>
                    <div className="location_lodging" data-testid="cardrecommendation-location">
                        <img className="icongps" src={iconGps} alt="icon gps" data-testid="cardrecommendation-location-icon" />
                        <p className="m_location" data-testid="cardrecommendation-location-address"> A 920 m del centro - </p>
                        <p className="link_gps" data-testid="cardrecommendation-location-link">MOSTRAR EN EL MAPA</p>
                    </div>
                    <div className="container_logding_icons" data-testid="cardrecommendation-icons">
                        <img src={iconwifi} alt="star" data-testid="cardrecommendation-wifi"/>
                        <img src={iconnado} alt="star" data-testid="cardrecommendation-nado"/>
                    </div>

                    <p className="description_lodging" data-testid="cardrecommendation-description">{description}</p>

                </div>
                <Link  to={`/product/${name}.${category}`} data-testid="cardrecommendation-link-url"><button className="btn_lodging" data-testid="cardrecommendation-btn">Ver mas</button> </Link>
            </div>
        </article>
    );
}

export default CardRecommendation;