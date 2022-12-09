import Recommendation from "../Recommendation"

function FilterResults({ title, dataLodging }){
    return(
        <div id="FilterCity">
            <h2 className="main_title_recommedation" data-testid="home-title-2">{title}</h2>
            <Recommendation dataLodging={dataLodging} />
        </div>
    )
}

export default FilterResults;