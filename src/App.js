import './App.css';
import {Routes, Route, Router} from 'react-router-dom'

import Navbar from './component/Navbar';
import Home from './component/Home';
import ProductAll from './component/ProductAll';
import Product from './component/Product';
import Cart from './component/Cart';
import About from './component/About';
import Contact from './component/Contact';


function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/products" element={<ProductAll/>}/>
          <Route exact path="/products/:id" element={<Product/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
    </>
  );
}

export default App;
