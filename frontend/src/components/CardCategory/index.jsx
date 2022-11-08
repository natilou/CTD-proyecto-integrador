import React from "react";
import "../CardCategory/CardCategory.css"

function CardCategory({ data }) {
    const { title, urlImage } = data
    return (
        <article className="container_article">
            <figure className="container_image">
                <img className="category_image" src={urlImage} alt={title} />
            </figure>
            <h3 className="card_text title_description">{title}</h3>
            <p className="card_text amount">807.105 hoteles</p>
        </article>
    );
}
export default CardCategory;
