import React, { useEffect, useReducer } from 'react';
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
import { UserProvider } from './Components/context/UserContext';
import reducer from '../src/Components/context/Reducer';
import store from '../src/Components/context/Store';
import AboutPage from './pages/AboutPage';
import Menu2 from './pages/Menu2';

// import { BrowserRouter, useLocation } from "react-router-dom";

function App() {
  const localState = localStorage.getItem("state") ? JSON.parse(localStorage.getItem("state")) :store;
  const [state,dispatch] = useReducer(reducer,localState);  
  const display=state.isLoading ? "block":"none";
  return (
    <UserProvider value={{state,dispatch}}>
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
    <Route path="/About" element={<AboutPage/>}/>
    <Route path="/product_details/:id" element={<ProductDetails />}/>
    <Route path="/Menu2" element={<Menu2/>}/>
    </Routes>
    <Footer/> 
    </div>
    </UserProvider>
  )
}

export default App;
