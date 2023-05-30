import React from "react";
import TableCart from "../Components/cart/TableCart";
import Footer from "../Components/ShareComponents/Footer"
import FormCart from "../Components/cart/FormCart";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../redux/slice/cartSlice";
import { NavLink } from "react-router-dom";

export default function CartPage() {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.carts);
  if(cart === 0 ) return <h1>undfind</h1>
  console.log(cart);
    return (
        <React.Fragment>
     
         
            <section className="product spad">
                <div className="container">
                <div className="bodyCart">
                    <h2 className="bg-light-subtle mb-2" >Products List</h2>

            { cart?.length > 0 ? cart.map((itemCart,index)=>{
                return <>
                    <div key={index} className="main-cart">
                        <div className="item-cart">
                        <div className="item-img">
                            <img src={itemCart.img}/>
                        </div>
                        <div className="info-item">
                             <div className="item-name">
                                 {itemCart.nameFood}
                                 </div>
                                     <div className="item-price">
                              {itemCart.price}
                                </div>
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
                    <TableCart></TableCart>
                    <FormCart></FormCart> */}
            </div>
                </div>
            </section>
               
        </React.Fragment>
        
    )
}