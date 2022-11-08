import React from "react";
import CardCategory from "../CardCategory";
import "./Categories.css"

function Categories({ data }) {

    return (
        <section className="container_cards" >
            {
                data.map((item, index) => (
                    <CardCategory data={item} key={index}
                    />
                ))
            }
        </section>
    );
}
export default Categories;