import React from "react";
import CardRecommendation from "../CardRecommendation";
import "./Recommendation.css";

function Recommendation({ dataLodging }) {
    return (
        <section className="container_cards_recommendation">
            {
                dataLodging.map((item) => (
                    <CardRecommendation dataLodging={item} key={item.id}
                    />
                ))
            }
        </section>

    );
}

export default Recommendation;