import React from "react";
import TableCart from "../Components/cart/TableCart";
import Footer from "../Components/ShareComponents/Footer"
import FormCart from "../Components/cart/FormCart";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, deleteCart, increaseQuantity } from "../redux/slice/cartSlice";
import { NavLink } from "react-router-dom";
import './body.css';

export default function CartPage() {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.carts);
  if(cart === 0 ) return <h1>undfind</h1>
  console.log(cart);
  const handleDecreaseQuantity = (product) => {
    if (product.quantity === 1) {
      // Nếu số lượng là 1, xóa sản phẩm khỏi giỏ hàng
      dispatch(deleteCart(product.id));
    } else {
      // Giảm số lượng đi 1
      dispatch(decreaseQuantity(product.id));
    }
  };
  
  const handleIncreaseQuantity = (product) => {
    // Tăng số lượng đi 1
    dispatch(increaseQuantity(product.id));
  };
    return (
      
         
            <section className="product spad">
                <div className="container">
                <div className="bodyCart">
                    <h2 className="bg-light-subtle mb-2" >Đơn Hàng</h2>

            { cart?.length > 0 ? cart.map((itemCart,index)=>{
                return <>
                <div key={index} className="main-cart row ">
       <table className="table">
         <thead>
          <th>Stt</th>
          <th>Tên</th>
          <th>Ảnh</th>
          <th>Số Lượng</th>
          <th>Giá</th>
          
       

          </thead>       
      <tbody>
        <tr >
          <td  >{itemCart.id}</td>
          <td ><h4 style = {{ width: 403,height: 200}} > {itemCart.nameFood}</h4></td>
          <td className="wrap-image"> <img  style = {{ width: 403,height: 200}} src={itemCart.img}/>  </td>

          <td><div className="main-btn" style={{width: 203,height: 200}}>
              

              <button className="add-button" onClick={() => handleDecreaseQuantity(itemCart)}style={{width: 103,height: 50}}>-</button>
              <span className="span">{itemCart?.quantity !== '' ? itemCart?.quantity : ''}</span>
              <button onClick={() => handleIncreaseQuantity(itemCart)}style={{ background :"white",width: 103,height: 50}}>+</button>
              </div>  
          </td>
          <td ><h5 style = {{ background :"white", width: 203,height: 200}} >{itemCart.price * itemCart?.quantity}</h5></td>
          <td> <button className="subtract-button" onClick={()=>{dispatch(deleteCart(itemCart))}}>
                                    delete
                                </button></td>
        </tr>
       
      </tbody>
    </table>
    
                    
                        {/* <div className="item-cart">
                        <div className="wrapper col-6">
                            <img src={itemCart.img}/>
                        </div>
                        <div className="info-item col-6">
                             <div className="item-name">
                                 {itemCart.nameFood}
                                 </div>
                                     <div className="item-price">
                              {itemCart.price * itemCart?.quantity}
                                </div>
                        </div>
                            <div>
                                <div className="main-btn">

                                <button className="add-button" onClick={() => handleDecreaseQuantity(itemCart)}>-</button>
                    <span>{itemCart?.quantity !== '' ? itemCart?.quantity : ''}</span>


                                 <button onClick={() => handleIncreaseQuantity(itemCart)}>+</button>
                                </div>

                                <button className="subtract-button" onClick={()=>{dispatch(deleteCart(itemCart))}}>
                                    delete
                                </button>
                            </div>
                        </div> */}
                     
                    </div>
                    
                </>
            }) : <div> Chưa có sản phẩm trong giỏ,<NavLink to='/menu'>   Mua ngay</NavLink> </div>
            
            }

                
                    {/* <TableCart></TableCart> */}
                    <FormCart></FormCart>
            </div>
           
                </div>
                {/* <button className="subtract-button" onClick={()=>{}}>
                                    Thanh Toán
                </button> */}
            </section>
            
               
        
    )
}