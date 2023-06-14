import React,{ useState, useEffect} from "react";
import Footer from "../Components/ShareComponents/Footer"
import { useDispatch, useSelector } from "react-redux";
import UserContext from "../Components/context/UserContext";
import { database } from "../db";

import { decreaseQuantity, deleteCart, increaseQuantity } from "../redux/slice/cartSlice";
import { NavLink } from "react-router-dom";

export default function CartPage(props) {
  const [pay, setPay] = useState({});
  const [order, setOrder] = useState({});
  const {state, dispatch } = React.useContext(UserContext);
  const cart=JSON.parse(localStorage.getItem('cart'));
  // const length = state.order.length;
  const [counte,setCounter]=useState(1);
  // const { cart } = useSelector((state) => state.carts);
  const handleInput = (e) => {
          // order["id"] = length + 1;    
          order[e.target.name] = e.target.value;
          setOrder(order);
          console.log(order);    
          pay.order=order;
  }
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
  const obj = {};
  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(state.guest_order.length);
    console.log(pay);
    pay.id=state.guest_order.length+1;
    state.pay=pay; 
    dispatch({type: 'update_pay',payloaded:state.pay});
    localStorage.setItem('state', JSON.stringify(state));

  }
  const getRandomDayInMonth = (year, month) => {
    const totalDays = new Date(year, month + 1, 0).getDate();
    const randomDay = Math.ceil(Math.random() * totalDays);
    return new Date(year, month, randomDay);
  }
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  useEffect(() => {
      refresh();
      pay.listPro=cart;
      pay.total=0;
      cart.map(item=>{
        pay.total+=item.price;
      })
      pay.day=formatDate(getRandomDayInMonth(2023,6));
      pay.guest_cancel=false;
      pay.isCancel=false;
      pay.isConfirm=false;
      pay.isPurchased=false;
      pay.isShip=false;
    }, [])
  // if(cart === 0 ) return <h1>undefind</h1>
  // console.log(cart);
  const handleDecreaseQuantity = (product) => {
    if (product.quantity === 1) {
      const newCart=[];
      if(window.confirm("Bạn có chắc chắn muốn xóa?")){
        cart.map(item=>{
          if(item.id!==product.id) {
            newCart.push(item);
          }
        })
        localStorage.setItem("cart", JSON.stringify(newCart));
        window.location.reload();
      }
    } else {
      // Giảm số lượng đi 1
      cart.map(item=>{
        if(item.id===product.id) {
          setCounter(item.quantity-1);
          item.quantity -= 1;
        }
      });
      localStorage.setItem("cart", JSON.stringify(cart));

    }
  };
  const deleteCart =(product)=>{
    const newCart=[];
      // Nếu số lượng là 1, xóa sản phẩm khỏi giỏ hàng
      if(window.confirm("Bạn có chắc chắn muốn xóa?")){
        cart.map(item=>{
          if(item.id!==product.id) {
            newCart.push(item);
          }
        })
        localStorage.setItem("cart", JSON.stringify(newCart));
        window.location.reload();
      }
  }
  const handleIncreaseQuantity = (product) => {
    // Tăng số lượng đi 1
    cart.map(item=>{
      if(item.id===product.id) {
        setCounter(item.quantity+1);
        item.quantity += 1;
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  };
    return (
     
         
            <section className="product spad">
                <div className="container">
                <div className="bodyCart">
                    <h2 className="bg-light-subtle mb-2" >Danh sách sản phẩm</h2>

            { cart? cart.map((itemCart,index)=>{
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
                           <h3 className="add-button-main col-4">{itemCart.quantity===itemCart.quantity ? itemCart?.quantity : counte}</h3>
                           <button className="add-button-main col-2" onClick={() => handleIncreaseQuantity(itemCart)}><h3 style={{margin:-10}}>+</h3></button>
                         </div>  
                    </td> 
                    <td ><h5 className="price-main-list" style = {{ background :"white",height: 200}} >{itemCart.price * itemCart?.quantity}</h5></td>
                    <td> <button className="subtract-button" onClick={()=>deleteCart(itemCart)}>
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
      
            <form className="custom-form contact-form row" action="#" method="post" role="form" onClick={formSubmit}>
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

                    <input onChange={handleInput} type="text" name="contact-address" id="contact-address" className="form-control" placeholder="Địa chỉ" required />

                    <label for="contact-address" className="form-label">Địa điểm nhà hàng</label>

                    <select id="contact-address" onChange={handleInput} name="contact-add"  className="form-control">
                        <option defaultValue={"default"}>Vui lòng chọn địa chỉ nhà hàng</option>
                        <option value="102 Thái Thịnh ">102 Thái Thịnh </option>
                        <option value="Biệt Thự D17, Ngõ 76 Nguyễn Phong Sắc">Biệt Thự D17, Ngõ 76 Nguyễn Phong Sắc</option>
                        <option value="B52 - Nguyễn Thị Định - Thanh Xuân - Hà Nội">B52 - Nguyễn Thị Định - Thanh Xuân - Hà Nội</option>
                        <option value="Số 2 Hoa Lư - Quận Hai Bà Trưng - Hà Nội">Số 2 Hoa Lư - Quận Hai Bà Trưng - Hà Nội</option>
                        <option value="88 Ngã tư Vạn Phúc - Hà Đông">88 Ngã tư Vạn Phúc - Hà Đông</option>
                        <option value="Bò Tơ Quán Mộc CS6 Hà Nội">Bò Tơ Quán Mộc CS6 Hà Nội</option>
                        <option value="14 BT7 KĐT Văn Quán, Hà Đông">14 BT7 KĐT Văn Quán, Hà Đông</option>
                        <option value="02 Đặng Dung Ba Đình">02 Đặng Dung Ba Đình</option>
                        <option value="1A Tăng Bạt Hổ, Phạm Đình Hổ, Hai Bà Trưng, Hà Nội">1A Tăng Bạt Hổ, Phạm Đình Hổ, Hai Bà Trưng, Hà Nội</option>
                        <option value="B2BT5 Lưu Hữu Phước - KĐT Mỹ Đình">B2BT5 Lưu Hữu Phước - KĐT Mỹ Đình</option>
                        <option value="84 Ngọc Khánh - Ba Đình">84 Ngọc Khánh - Ba Đình</option>
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
                    <NavLink to="/Pays" type="button" className="form-control" >Tạo đơn hàng</NavLink>
                </div>
            </form>
        </div>
            </div>
                </div>
            </section>
               
        
    )
}