import React,{ useReducer,useEffect, useState } from 'react';
import Home from './pages/Home';
import Header from './Components/ShareComponents/Header';
import Footer from './Components/ShareComponents/Footer';
import Blog from './pages/Blog';
import BlogDetail from './pages/Blog-Detail';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import Menu from './pages/Menu';
import Product_details1 from './pages/Product_details1';
import { UserProvider } from './Components/context/UserContext';
import reducer from './Components/context/Reducer';
import store from './Components/context/store';

// import { BrowserRouter, useLocation } from "react-router-dom";

function App() {
  const localState = localStorage.getItem("state") ? JSON.parse(localStorage.getItem("state")) :store;
  const [state,dispatch] = useReducer(reducer,localState);  
  const display=state.isLoading ? "block":"none";
  return (

    <UserProvider value={{state,dispatch}}>
    <div>
    <div id="preloder" style={{ display: display }}>
            <div className="loader"></div>
    </div>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Blog" element={<Blog/>}/>
    <Route path="/Menu" element={<Menu/>}/>
    <Route path="/BlogDetail" element={<BlogDetail/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Cartpage" element={<CartPage/>}></Route>
    <Route path="/About" element={<AboutPage/>}/>
    <Route path="/product_details1" element={<Product_details1 />}/>
    </Routes>
    <Footer/>
    </div>
    </UserProvider>
  )
}

export default App;
