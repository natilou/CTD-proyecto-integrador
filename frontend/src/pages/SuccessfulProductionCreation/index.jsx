import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SuccessfulPage from "../../components/SuccessfulPage";


function SuccessfulProductionCreation(){

    return(
        <>
            <Header />
                <SuccessfulPage exclamationMessage={"¡Felicitaciones!"} message={"Producto agregado con éxito."} />
            <Footer />
        </>
    )
}

export default SuccessfulProductionCreation;