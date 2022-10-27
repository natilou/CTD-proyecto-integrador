import React from "react";
import CardRecomend from "../CardRecomend";
import "./Recomend.css";

function Recomend({ dataLodging }) {
    return (
        <section>
            {
                dataLodging.map((item, index) => (
                    <CardRecomend dataLodging={item} key={index}
                    />
                ))
            }
        </section>

    );
}

export default Recomend;