import React from "react";
import "./CardRecomend.css";

function CardRecomend({dataLodging}) {
    console.log(dataLodging)
   const { name, category,url_image} = dataLodging
    //, score, label_score,
      //    description,city,distance
    return (
        <article >
            <figure >
                <img src={url_image} alt={name} />
            </figure>
            <h3 >{name}</h3>
            <p>{category} hoteles</p>
        </article>
    );
}

export default CardRecomend;