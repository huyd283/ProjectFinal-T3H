import React,{ useState, useEffect} from "react";
import Footer from "../Components/ShareComponents/Footer"
import { useDispatch, useSelector } from "react-redux";
import UserContext from "../Components/context/UserContext";
import { database } from "../db";

import { decreaseQuantity, deleteCart, increaseQuantity } from "../redux/slice/cartSlice";
import { NavLink } from "react-router-dom";

export default function CartPage(props) {
  const [pay, setPay] = useState([{}]);
  const [order, setOrder] = useState([{}]);
  const {state, dispatch } = React.useContext(UserContext);
  const length = state.order.length;
  const ref = React.createRef();
  const { cart } = useSelector((state) => state.carts);
  const handleInput = (e) => {
          // order["id"] = length + 1;    
          order[e.target.name] = e.target.value;
          setOrder(order);
          console.log(order);    

  }
  const obj = {};
  const formSubmit = async (e) => {
      const value = {...order};
      obj[length] = value;
      const data = {...state.order,...obj};
      console.log("submit success");
      e.preventDefault(); 
      database.ref('cartlist/').set(data);
  }

  useEffect(() => {
      console.log(state.cart);
    }, [])
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
                    <h2 className="bg-light-subtle mb-2" >Danh sách sản phẩm</h2>

            { cart?.length > 0 ? cart.map((itemCart,index)=>{
                return <>
                <div key={index} className="main-cart row ">
              <table className="table">
                <thead>
                  <th>STT</th>
                  <th>Tên</th>
                  <th style={{width:402}}>Ảnh</th>
                  <th>Số Lượng</th>
                  <th>Giá</th>
                  </thead>       
                <tbody>
                  <tr >
                    <td><div className="name-product-list">{itemCart.id}</div></td>
                    <td ><h4 className="name-main-list"  > {itemCart.nameFood}</h4></td>
                    <td><div className="image-product-list"><img src={itemCart.img}/></div></td>
                  

                     <td><div className="main-btn row" >
                          <button className="add-button-main col-2"  onClick={() => handleDecreaseQuantity(itemCart)}><h3 style={{margin:-10}}>-</h3></button>
                           <h3 className="add-button-main col-4">{itemCart?.quantity !== '' ? itemCart?.quantity : ''}</h3>
                           <button className="add-button-main col-2" onClick={() => handleIncreaseQuantity(itemCart)}><h3 style={{margin:-10}}>+</h3></button>
                         </div>  
                    </td> 
                    <td ><h5 className="price-main-list" style = {{ background :"white",height: 200}} >{itemCart.price * itemCart?.quantity}</h5></td>
                    <td> <button className="subtract-button" onClick={()=>{dispatch(deleteCart(itemCart))}}>
                                              delete
                          </button></td>
                  </tr>
                
                </tbody>
            </table>
            </div>
                    
                </>
            }) : <div> Không có sản phẩm?<NavLink to='/menu'> Mua ngay</NavLink> </div>
            }
            <div className="form ">
            
            <h6 className="text-bg-danger" style={{textAlign :"center"}}>Thông tin đặt hàng</h6>
      
            <form onSubmit={formSubmit}  className="custom-form contact-form row" action="#" method="post" role="form">
                <div className="col-lg-6 col-6">
                    <label for="contact-name" className="form-label">Họ và tên</label> 
                    <input onChange={handleInput} type="text" name="contact-name" id="contact-name" className="form-control" placeholder="Tên của bạn" required />
                </div>

                <div className="col-lg-6 col-6">
                    <label for="contact-phone" className="form-label">Số điện thoại</label>

                    <input onChange={handleInput} type="telephone" name="contact-phone" id="contact-phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control" placeholder="(+84)123456789" />
                </div>

                <div className="col-12">
                    
                    <label for="contact-email" className="form-label">Email</label>

                    <input onChange={handleInput} type="email" name="contact-email" id="contact-email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="abc@gmail.com" required="" />
                    
                    <label for="contact-name" className="form-label">Địa chỉ</label>

                    <input onChange={handleInput} type="text" name="contact-name" id="contact-name" className="form-control" placeholder="Địa chỉ" required />

                    <label for="contact-address" className="form-label">Địa điểm nhà hàng</label>

                    <select id="contact-address" className="form-control">
                        <option defaultValue={"default"}>Vui lòng chọn địa chỉ nhà hàng</option>
                        <option defaultValue={"default"}>BÒ TƠ QUÁN MỘC CS1 HÀ NỘI</option>
                        <option defaultValue={"default"}>BÒ TƠ QUÁN MỘC CS2 HÀ NỘI</option>
                        <option defaultValue={"default"}>BÒ TƠ QUÁN MỘC CS1 SÀI GÒN</option>
                        <option defaultValue={"default"}>BÒ TƠ QUÁN MỘC CS2 SÀI GÒN</option>
                    </select>
                    <label for="contact-time" className="form-label">Thời gian ăn</label>

                    <div className="form-group row p-3">
                        <input onChange={handleInput} type="date" name="contact-time" id="contact-time" className="  form-control w-25 " required />
                        <select onChange={handleInput} id="contact-hour" name="contact-hour" className=" form-control w-25 mx-5" required>
                            {
                                [...Array(24).keys()].map((i) => {
                                    if (7 <= i && i <= 21) {
                                        return (
                                            <option value={i} key={i}>{i} giờ</option>
                                        )
                                    }
                                })

                            }
                        </select>
                        <select onChange={handleInput} id="contact-minutes" name="contact-minute" className=" form-control w-25" required>
                            {
                                [...Array(60).keys()].map((i) => {
                                    
                                        return (
                                            <option value={i} key={i}>{i} phút</option>
                                        )
                                    
                                })

                            }
                        </select>
                    </div>

                    <label for="contact-message" className="form-label">Lời nhắn</label>

                    <textarea onChange={handleInput} className="form-control" rows="5" id="contact-message" name="contact-message" placeholder="Bạn đang nghĩ gì..."></textarea>
                </div>

                <div className="col-lg-5 col-12 ms-auto">
                   
                    <button type="submit" className="form-control">Tạo đơn hàng</button>
                </div>
            </form>
        </div>
            </div>
                </div>
            </section>
               
        
    )
}