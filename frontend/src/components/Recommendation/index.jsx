import React from "react";
import CardRecommendation from "../CardRecommendation";
import "./Recommendation.css";

function Recommendation({ dataLodging }) {
    return (
        <section className="container_cards_recommendation" data-testid="recommendation-container">
            {
                dataLodging.map((item, index) => (
                    <CardRecommendation dataLodging={item} key={index} />
                ))
            }
        </section>

    );
}

export default Recommendation;