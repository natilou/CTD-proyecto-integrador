import React from "react";
import "../CardCategory/CardCategory.css"

function CardCategory({ data }) {
    const { title, url_image, amount } = data
    return (
        <article className="container_article" data-testid="cardcategory-container">
            <figure className="container_image" data-testid="cardcategory-img-container">
                <img className="category_image" src={url_image} alt={title} data-testid="cardcategory-img"/>
            </figure>
            <h3 className="card_text title_description" data-testid="cardcategory-title">{title}</h3>
            <p className="card_text amount" data-testid="cardcategory-amount">{amount} hoteles</p>
        </article>
    );
}
export default CardCategory;
