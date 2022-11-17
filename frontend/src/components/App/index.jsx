import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "../../pages/Home";
import Register from "../../pages/Register";
import LogIn from "../../pages/LogIn";
import Product from "../../pages/Product";
import SuccessfulReservation from "../../pages/SuccessfulReservation";
import Booking from "../../pages/Booking";

function App() {
  return (
  <BrowserRouter>
      <Routes>
            <Route path='/' element={<Home/>} /> 
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<LogIn/>} />
            <Route path="/product/:category/:id" element={<Product/>}/>
            <Route path="/successful-reservation" element={<SuccessfulReservation/>}/>
            <Route path="/reserva/:id" element={<Booking/>}/>
        </Routes>
  </BrowserRouter>
  );
}

export default App;
