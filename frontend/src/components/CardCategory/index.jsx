import React from "react";
import "../CardCategory/CardCategory.css"

function CardCategory({ data, onclick }) {
    async function handleOnClick(id){
        await onclick(id)
    }
    const { id, title, urlImage, productAmount } = data;

    return (
        <article onClick={()=> handleOnClick(id)} className="container_article" data-testid="cardcategory-container">
            <figure className="container_image" data-testid="cardcategory-img-container">
                <img className="category_image" src={urlImage} alt={title} data-testid="cardcategory-img"/>
            </figure>
            <h3 className="card_text title_description" data-testid="cardcategory-title">{title}</h3>
            <p className="card_text amount" data-testid="cardcategory-amount">{productAmount} {title}</p>
        </article>
    );
}
export default CardCategory;
