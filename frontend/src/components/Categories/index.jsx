import React from "react";
import CardCategory from "../CardCategory";
import "./Categories.css"

function Categories({ data, onclick }) {
    
    return (
        <section className="container_cards" data-testid="categories-container">
            {
                data.map((item, index) => (
                    <CardCategory data={item} key={index} onclick={onclick}
                    />
                ))
            }
        </section>
    );
}
export default Categories;