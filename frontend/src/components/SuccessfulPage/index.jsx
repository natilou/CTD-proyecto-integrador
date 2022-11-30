import { Link } from "react-router-dom";
import './SuccessfulPage.css';


function SuccessfulPage({ exclamationMessage, message}){
    return(
        <div className="super-container">
            <section className="successful-page-container" data-testid="successful-container">
                <div className="message-container" data-testid="message-container">
                    <img src={"https://s3-group-10-c6.s3.us-east-2.amazonaws.com/icons/iconCheck.png"} alt="check" className="check-icon" data-testid="check-icon"/>
                    <h2 className="message-title" data-testid="message-title">{exclamationMessage}</h2>
                    <h3 className="second-message-title" data-testid="second-message-title">{message}</h3>
                    <Link to="/"><button className="btn-successful" data-testid="btn-successful">Ok</button></Link>
                </div>
            </section>
        </div>
    )
}

export default SuccessfulPage;