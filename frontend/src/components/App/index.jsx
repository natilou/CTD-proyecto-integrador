import { BrowserRouter } from "react-router-dom";
import Footer from '../Footer';
import FormFilter from "../FormFilter";
import Header from '../Header';
import './App.css';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
     <Header/>
     <FormFilter/>
     <Footer/>
    </div>
  </BrowserRouter>
  );
}

export default App;
