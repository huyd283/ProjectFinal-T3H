import React, { useEffect } from 'react';
import Home from './pages/Home';
import Header from './Components/ShareComponents/Header';
import Footer from './Components/ShareComponents/Footer';
import Blog from './pages/Blog';
import BlogDetail0 from './pages/Blogdetail/Blog-Detail0';
import BlogDetail1 from './pages/Blogdetail/Blog-Detail';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import CartPage from './pages/CartPage';
import Menu from './pages/Menu';
import ProductDetails from './pages/ProductDetails';
import { useDispatch } from 'react-redux';
import { getFectProdust } from './redux/slice/getProductSlice';


// import { BrowserRouter, useLocation } from "react-router-dom";

function App() {

  return (
    <div>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Blog" element={<Blog/>}/>
    <Route path="/Menu" element={<Menu/>}/>
    <Route path="/BlogDetail1" element={<BlogDetail1/>}/>
    <Route path="/BlogDetail0" element={<BlogDetail0/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Cartpage" element={<CartPage/>}></Route>
    <Route path="/product_details/:id" element={<ProductDetails />}/>
    </Routes>
    <Footer/> 
    </div>
  )
}

export default App;
