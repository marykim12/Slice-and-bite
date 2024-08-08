import { useState } from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from "./Components/Home";
import OrderForm from './Components/Order';
import ContactUs from './Components/ContactUs';
import Confirmation from './Components/Confirmation';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';

function App() {
  

  return (
    
    <Router>
    <Navbar/>
    <div>
    <Routes>
  
     <Route  path="/Home" element={<Home/>}/>
     <Route path='/Gallery' element={<Gallery/>}/>
      <Route path='/Order' element={<OrderForm/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
      <Route path='/Confirmation' element={<Confirmation/>}/>
     

      
    </Routes>
  
    </div>
    <Footer/>
    </Router>

  );
}

export default App
