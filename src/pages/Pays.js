import React,{ useState, useEffect} from "react";
import Footer from "../Components/ShareComponents/Footer"
import { useDispatch, useSelector } from "react-redux";
import UserContext from "../Components/context/UserContext";
import { database } from "../db";

import { decreaseQuantity, deleteCart, increaseQuantity } from "../redux/slice/cartSlice";
import { NavLink } from "react-router-dom";

export default function Pays(props) {
  const cart=JSON.parse(localStorage.getItem('cart'));
  const {state,dispatch}=React.useContext(UserContext);
  const refresh = () => {
    const dbRef = database.ref();
    dbRef.child("/cartlist").get().then((snapshot) => {
        if (snapshot.exists()) {
            state.guest_order = snapshot.val();
            dispatch({ type: "update_guest_order", payload: state.guest_order });
            localStorage.setItem('state', JSON.stringify(state));
            setTimeout(() => {
                dispatch({ type: "hide_loading" });
            }, 1000)
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}
const obj={};
  const confirmOrder=()=>{
    const value = {...state.pay};
    obj[state.guest_order.length] = value;
    const data = {...state.guest_order,...obj};
    console.log("submit success");
    // e.preventDefault(); 
    database.ref('cartlist/').set(data);
    alert("Tạo đơn thành công");
  }
  const [counte,setCounter]=useState(1);
  useEffect(() => {  
    refresh();
      console.log(state.pay );
    }, [])
    return (
         
            <section className="product spad">
                <div className="container">
                <div className="bodyCart">
                    <h2 className="bg-light-subtle mb-2" >Thông tin đơn hàng</h2>

                <div  className="main-cart row ">
                    <div className="col-8 ">
                    <table className="table w-50">
                        <thead>
                        <th>STT</th>
                        <th>Tên</th>
                        <th style={{width:"50%"}}>Ảnh</th>
                        <th>Số Lượng</th>
                        <th>Giá</th>
                        </thead>       
                        <tbody>
                    { cart? cart.map((itemCart,index)=>{
                        return (
                        <tr >
                            <td><div className="name-product-list">{itemCart.id}</div></td>
                            <td ><h4 className="name-main-list"  > {itemCart.nameFood}</h4></td>
                            <td><div className="image-product-list"><img src={itemCart.img}/></div></td>
                        

                            <td><div className="main-btn row" >
                                <h3 className="add-button-main col-4">{itemCart.quantity===itemCart.quantity ? itemCart?.quantity : counte}</h3>
                                </div>  
                            </td> 
                            <td ><h5 className="price-main-list" style = {{ background :"white",height: 200}} >{itemCart.price * itemCart?.quantity}</h5></td>
                            <td> 
                            </td>
                        </tr>
                        )
                        
                    }) : <div> Không có sản phẩm?<NavLink to='/menu'> Mua ngay</NavLink> </div>}
                            
                    </tbody>
                    </table>
                    </div>
                    
                </div>
                <div className="infoUser">
                      <div>
                      Họ Tên:  {state.pay.order["contact-name"]}
                      </div>
                      <div>
                      Số Điện Thoại:  {state.pay.order["contact-phone"]}
                      </div>
                      <div>
                      Email :  {state.pay.order["contact-email"]}
                      </div>
                      <div>
                      Địa Chỉ:  {state.pay.order["contact-address"]}
                      </div>
                      <div>
                      Địa Điểm Tới:  {state.pay.order["contact-add"]}
                      </div>
                      <div>
                    Ngày :  {state.pay.order["contact-time"]}
                      </div>
                      <div>
                    Giờ :  {state.pay.order["contact-hour"]}, {state.pay.order["contact-minute"]}phút
                      </div>
                      <div>
                      Ghi Chú:  {state.pay.order["contact-message"]}
                      </div>
                      <div>
                           Tổng tiền: {state.pay.total}
                          </div>
                          </div>
                    <button  type="button" className="form-control"  onClick={confirmOrder}>Xác nhận</button>
                         
            
            </div>
                </div>
            </section>
               
        
    )
}