import React from "react";
import "../CardCategory/CardCategory.css"

function CardCategory({ data }) {
    const { title, url_image, amount } = data
    return (
        <article className="container_article">
            <figure className="container_image">
                <img className="category_image" src={url_image} alt={title} />
            </figure>
            <h3 className="card_text title_description">{title}</h3>
            <p className="card_text amount">{amount} hoteles</p>
        </article>
    );
}
export default CardCategory;
