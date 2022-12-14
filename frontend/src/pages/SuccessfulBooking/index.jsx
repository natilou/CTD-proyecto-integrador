import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SuccessfulPage from "../../components/SuccessfulPage";


function SuccessfulBooking(){

    return(
        <>
            <Header />
                <SuccessfulPage exclamationMessage={"¡Muchas gracias!"} message={"Tu reserva se ha realizado con éxito."} />
            <Footer />
        </>
    )
}

export default SuccessfulBooking;