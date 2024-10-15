import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/home'; 
import Shirt from './Components/shirt';
import About from './Components/about';
import Addcart from './Components/addcart';
import Checkout from './Components/Checkout';
import Cart from './Components/cart';
import Saddcart from './Components/saddcart';
import Taddcart from './Components/taddcart';
import Cdaddcart from './Components/cdaddcart';
import Privacy from './Components/privacy';
import Terms from './Components/terms';
import Pant from './Components/pant';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path='/pant' element={<Pant/>} />
          <Route path='/shirt' element={<Shirt />} />
          <Route path='/about' element={<About />} />
          <Route path='/addcart' element={<Addcart />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/saddcart' element={<Saddcart />} />
          <Route path='/taddcart' element={<Taddcart />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;