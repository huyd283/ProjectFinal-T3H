import React,{useContext, useEffect, useState } from "react";
import TableCart from "../Components/cart/TableCart";
import FormCart from "../Components/cart/FormCart";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../redux/slice/cartSlice";
import { NavLink } from "react-router-dom";
import './body.css';
=======
import UserContext from "../Components/context/UserContext";
export default function CartPage(props) {
    const {state,dispatch} = React.useContext(UserContext);      
>>>>>>> 21090f20d484cbe468a8344878ca5ef638a2d6ac

    return (
     
         
            <section className="product spad">
<<<<<<< HEAD
                <div className="container">
                <div className="bodyCart">
                    <h2 className="bg-light-subtle mb-2" >Products List</h2>

            { cart?.length > 0 ? cart.map((itemCart,index)=>{
                return <>
                    <div key={index} className="main-cart">
                        <div className="item-cart">
                        <div className="wrapper ">
                            <img src={itemCart.img}/>
                        </div>
                        <div className="info-item">
                             <h4 className="item-name">
                                 {itemCart.nameFood}
                                 </h4>
                                 <span class="price-tag bg-light shadow-lg lg-2"><small>Giá    :</small></span>
                                    <span class="price-tag bg-light shadow-lg lg-2"><small> {itemCart.price}.vnd</small></span>
                                     
                        </div>
                            <div>
                                <button onClick={()=>{dispatch(deleteCart(itemCart))}}>
                                    delete
                                </button>
                            </div>
                        </div>
                     
                    </div>
                </>
            }) : <div> khong co san pham,<NavLink to='/menu'>   mua ngay</NavLink> </div>
            }

{/*                 
=======
                <div className="container row">
                    <h2 className="bg-light-subtle mb-2" >Danh sách sản phẩm</h2>
>>>>>>> 21090f20d484cbe468a8344878ca5ef638a2d6ac
                    <TableCart></TableCart>
                    <FormCart></FormCart>
                </div>
            </section>
<<<<<<< HEAD
               
        
=======
        </React.Fragment>
>>>>>>> 21090f20d484cbe468a8344878ca5ef638a2d6ac
    )
}