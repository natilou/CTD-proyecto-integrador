import React from "react";
import "./CardRecomend.css";
import iconStart from "../../assets/images/icons/iconStar.png";
import "./CardRecommendation.css";

function CardRecommendation({dataLodging}) {
    console.log(dataLodging)
    const { name, category, url_image } = dataLodging
    //, score, label_score,
    //    description,city,distance
    return (
        <article className="card_recommendation">
            <figure >
                <img className="image_recommendation" src={url_image} alt={name} />
            </figure>
            <div className="container_section_score">
                <div>
                    <section className="container_title_star">
                        <p>{category}</p>
                        <ul className="icons_list">
                            <li>
                                <img src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1666741925/DH-PI/Star_3_rd9iyd.png" alt="star" className="icon_star" />
                            </li>
                            <li>
                                <img src={iconStart} alt="star" className="icon_star" />
                            </li>
                            <li>
                                <img src={iconStart} alt="star" className="icon_star" />
                            </li>
                            <li>
                                <img src={iconStart} alt="star" className="icon_star" />
                            </li>
                            <li>
                                <img src={iconStart} alt="start" className="icon_start" />
                            </li>
                        </ul>
                    </section>
                    <h3 >{name}</h3>
                </div>
                <div>
                    <div><p>8</p></div>
                    <p>muy bueno</p>
                </div>
            </div>
            <section>
                <img src={iconStart} alt="star" className="icon_star" />
                <p>metros</p>
                <p>monstrar en el mapa</p>
            </section>
            <p> </p>
            <botton></botton>           
        </article>
    );
}

export default CardRecommendation;