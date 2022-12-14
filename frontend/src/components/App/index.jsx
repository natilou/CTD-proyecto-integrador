import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "../../pages/Home";
import Register from "../../pages/Register";
import LogIn from "../../pages/LogIn";
import Product from "../../pages/Product";
import SuccessfulBooking from "../../pages/SuccessfulBooking";
import SuccessfulProductionCreation from "../../pages/SuccessfulProductionCreation";
import Booking from "../../pages/Booking";
import Administration from "../../pages/Administration"
import UserReservation  from "../../pages/UserReservation";
import ProductAdministration from "../../pages/ProductAdministration";

function App() {
  return (
  <BrowserRouter>
      <Routes>
            <Route path='/' element={<Home/>} /> 
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<LogIn/>} />
            <Route path="/product/:category/:id" element={<Product/>}/>
            <Route path="/successful-booking" element={<SuccessfulBooking/>}/>
            <Route path="/successful-product-creation" element={<SuccessfulProductionCreation/>}/>
            <Route path="/booking/:id" element={<Booking/>}/>
            <Route path='/admin' element={<Administration/>} />
            <Route path="/reserva/booking" element={<UserReservation/>}/>
            <Route path="/admin/product" element={<ProductAdministration/>}/>
        </Routes>
  </BrowserRouter>
  );
}

export default App;
