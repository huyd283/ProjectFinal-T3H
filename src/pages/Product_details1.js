import React from "react";
import Menu from "./Menu";
import './body.css';
import { NavLink, Link } from 'react-router-dom';


function Product_details1() {
  return (


    <div className="container">
      <div className="row">
        <div className="detail1" >
          <h1>Chi Tiết</h1>
        </div>
        <div className="link-user2">
            <NavLink className="nav-link" to="/">TRANG CHỦ</NavLink>
            <span className="span">/</span>
            <NavLink className="nav-link" to="/Menu">Menu</NavLink>
            <span className="">/</span>
            <NavLink className="nav-link" to="/Menu">CHI TIẾT</NavLink>
            <span className=""></span>
        </div>
        <div className="main-detail" >
          <div>
            <img src="images/product/hinh1.jpg" className=" menu-image" alt="" />
          </div>
          <div className="menu-info d-flex flex-wrap align-items-center">
            <h4 className="mb-0">Fresh Start</h4>
            <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>24.50</span>
            <div className="d-flex flex-wrap align-items-center w-100 mt-2">
              <h6 className="reviews-text mb-0 me-3">4.4/5</h6>
              <div className="reviews-stars">
                <i className="bi-star-fill reviews-icon"></i>
                <i className="bi-star-fill reviews-icon"></i>
                <i className="bi-star-fill reviews-icon"></i>
                <i className="bi-star-fill reviews-icon"></i>
                <i className="bi-star reviews-icon"></i>
              </div>
              <p className="reviews-text mb-0 ms-4">128 Reviews</p>
              <p>Bò bít tết (tiếng Anh là Beef steak) - một món ăn được ưa chuộng tại Âu châu và nhất là Mỹ châu,<br></br> đồng thời cũng là món ăn khá quen thuộc trong phong cách ẩm thực hiện đại của người Việt.</p>
              {/* <div className="table">
                <table>
                  <tbody >
                    <tr className="tr-1">
                      <th>Khối Lượng</th>
                      <td>0.5kg</td>
                    </tr>
                    <tr className="tr-2">
                      <th>Nguồn Gốc</th>
                      <td>Australia</td>
                    </tr>
                    <tr className="tr-1">
                      <th>Vị Trí</th>
                      <td>Thăn</td>
                    </tr>
                    <tr className="tr-2">
                      <th>Loại</th>
                      <td>Vừa</td>
                    </tr>
                  </tbody>
                </table>
              </div> */}
            </div>
          </div>

        </div>
        <div className="detail_product_detail_bt">
          <div className="number_text">Số lượng món </div>
          <div>
            <div className="row ">
            <form class="row g-3">
              <div className="col-3">
                <div className="row plusss">
                  <div>
                  <button>
                         <span className="col inc button">-</span>
                    </button>
                  </div>
                  
                    <div className="col input_number">
                      <input name="buy_count" id="buy_count" value="1" type="number" placeholder="Số lượng"/>
                    </div>
                    <div>
                    <button>
                      <span className="col dec button">+</span>
                    </button>
                    </div>
                  
                     
                    
              </div>
              </div>
              <div className="col-6"> 
              <button type="submit" class="btn btn-primary mb-3">Đặt Món</button>
              </div>


              
              
               
            </form>
           

              
              </div>
             
            </div>
          </div>
          <div>
            
            <div className="product1">
                            <h5>THỰC ĐƠN MÓN LIÊN QUAN</h5>
                            <div className="row">
                                <div className="product1-1 col-6">
                                        <img src="images/product/hinh2.1.jpg" className="product-image" alt=""/>
                                        <div className="menu-info  flex-wrap align-items-center ">
                                                <h4 className="text-align:center">Steak Thịt Bụng Bò (225Gr) </h4>
                                                <h6>
                                                    Giá<span className="price-tag bg-white shadow-lg lg-2 "><small>550,000</small>
vnd</span>
                                                </h6>
                                                    <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                                    <h6 className="reviews-text mb-0 me-3">4.4/5</h6>
                                                    <div className="reviews-stars">
                                                        <i className="bi-star-fill reviews-icon"></i>
                                                        <i className="bi-star-fill reviews-icon"></i>
                                                        <i className="bi-star-fill reviews-icon"></i>
                                                        <i className="bi-star-fill reviews-icon"></i>
                                                        <i className="bi-star reviews-icon"></i>
                                                    </div>
                                                    <p className="reviews-text mb-0 ms-4">98 Reviews</p>
                                                    </div>
                                            </div>
                                </div>
                                <div className="product1-2 col-6">
                                    <img src="images/product/hinh2.2.jpg" className="product-image" alt=""/>
                                    <div className="menu-info flex-wrap align-items-center">
                                            <h4 className="mb-0">Steak Thịt Tomahawk</h4>
                                            <h6>
                                            Giá<span className="price-tag bg-white shadow-lg lg-4"><small>1,050,000</small>vnd</span>
                                            </h6>
                                            
                                                <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                                <h6 className="reviews-text mb-0 me-3">4.4/5</h6>
                                                <div className="reviews-stars">
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star reviews-icon"></i>
                                                </div>
                                                <p className="reviews-text mb-0 ms-4">128 Reviews</p>
                                                </div>
                                        </div>
                            </div>
                            </div>
                           
                         </div>
          </div>

        </div>
      </div>
    



  )
}
export default Product_details1;