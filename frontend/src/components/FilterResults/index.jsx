import Recommendation from "../Recommendation";
import { getRandomGif } from "./utils";
import "./FilterResults.css";

function FilterResults({ title, dataLodging }){
    let gif = getRandomGif();
    console.log(gif)
    return(
        <div id="FilterCity">
            <h2 className="main_title_recommedation" data-testid="home-title-2">{title}</h2>
            { 
                dataLodging.length === 0
                ?
                <div className="not-found">
                    <img className="gif-not-found" src={gif} alt="no hay productos disponibles"/>
                    <p className="not-found-message">Lo sentimos, no hay productos disponibles.</p>
                </div>
                :
                <Recommendation dataLodging={dataLodging} />
               
            }
           
        </div>
    )
}

export default FilterResults;