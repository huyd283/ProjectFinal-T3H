import React from "react";
import { NavLink, Link } from 'react-router-dom';
import Header from "../Components/ShareComponents/Header";
import './body.css';
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { getFectProdust, getcategory } from "../redux/slice/getProductSlice";
import { useState } from "react";
import { TabPanel } from "@mui/lab";
import TabPanelUI from "./TabPanelUI";

function Menu (props){

  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };


    useEffect(() => {
        dispatch(getFectProdust());
      }, []);

      useEffect(() => {
        dispatch(getcategory());
      }, []);

  const { products } = useSelector((state) => state.products);
  const { listcategory } = useSelector((state) => state.products);

  // phân trang
  

       
=======

function Menu (props){
    
>>>>>>> 21090f20d484cbe468a8344878ca5ef638a2d6ac
        return(
            <div className="container">
                    <div className="menu">
                        <div className ="header">
                              <div className="header-items" >
                              <div style={{backgroundImage: "url(/images/product/hinh1a.jpg)" }}></div>
                              <div style={{backgroundImage: "url(/images/product/hot1.jpg)" }}></div>
                             
                              
                               <div style={{backgroundImage: "url(/images/product/logo.jpg)" }}></div>
                               <div style={{backgroundImage: "url(/images/product/logo2.jpg)" }}></div>
                               
                               <div style={{backgroundImage: "url(/images/product/hot1.jpg)" }}></div>  
                               <div style={{backgroundImage: "url(/images/product/combo2.jpg)" }}></div>
                            </div>  
                         {/* <div className="link-user">
                                    <NavLink className="nav-link" to="/">TRANG CHỦ</NavLink>
                                    <span className="span">/</span>
                                    <NavLink className="nav-link" to="/Menu">Menu</NavLink>
                                    <span className=""></span>
                            </div>  */}
                            <div className=" menu-left-1">
<<<<<<< HEAD
                           
                           
                            <h2 className="combo">THỰC ĐƠN NHÀ HÀNG</h2>
                           
                    {/* category */}
                    
                            <div>
                                <TabPanelUI listcategory={listcategory} />
                            </div>
                    
                            </div> 
                         </div>
                    
                   
                  
                
                <div id="pagination">
                    <h1>Đâu rồi</h1>
              </div>
              </div>
                   
=======
                            <em> 
                            <h2 className="combo"> NHÀ HÀNG</h2>
                            </em>
                                    
                                    
                                    <div className="cate-item col=12">
                                    
                                                <ul  className="menu-item5555">
                                                    <div className="item5555">
                                                        <li id="menu-item-5577" className="menu-item-5577"><a href="/product1">BÒ NHẬP KHẨU</a></li>
                                                        <li id="menu-item-5578" className="menu-item-5577"><a href="#combo">BÒ KOBE</a></li>
                                                        <li id="menu-item-5579" className="menu-item-5577"><a href="#salad">COMBO</a></li>
                                                        <li id="menu-item-5580" className="menu-item-5577"><a href="#appetizer">SALAT</a></li>
                                                        <li id="menu-item-5581" className="menu-item-5577"><a href="#ahijo">MÓN KHAI VỊ</a></li>
                                                    </div>
                                                    <br></br>
                                                    <div className="item5556">
                                                    
                                                    <li id="menu-item-6480" className="menu-item-5577"><a href="#chefsspecial">ĐẦU BẾP ĐẶC BIỆT</a></li>
                                                    <li id="menu-item-5582" className="menu-item-5577"><a href="#hotdish">HOT </a></li>
                                                    <li id="menu-item-5583" className="menu-item-5577"><a href="#ricepasta">CƠM &amp; MỲ</a></li>
                                                    <li id="menu-item-5584" className="menu-item-5577"><a href="#desert">TRÁNG MIỆNG</a></li>
                                                    </div>
                                                    <br></br>
                                                    <div className="item5557">
                                                        <li id="menu-item-6000"className="menu-item-5577"><a href="https://ussinavietnam.vn/thuc-don-do-uong-nha-hang-ussina-aging-beef-bar/">ĐỒ UỐNG</a></li>
                                                        <li id="menu-item-6000" className="menu-item-5577"><a href="https://ussinavietnam.vn/thuc-don-ruou-tai-ussina-aging-beef-bar/">RƯỢU</a></li>
                                                    </div>
                                                   
                                                </ul>
                                    </div>
                            </div> 
                         </div>

                         <div className="product1">
                            <b><h5>CÁC MÓN BÒ NHẬP KHẨU     </h5></b>
                             <div className="row">
                                    <div className="product1-1 col-6">
                                        <NavLink className="nav-link" to="/product_details1" >
                                            <img src="images/product/hinh1.jpg" className="product-image" alt=""/>
                                            <div className="menu-info  flex-wrap align-items-center ">
                                                    <h4 className="text-align:center">Thăn Nội Wagyu </h4>
                                                    <h6>
                                                        Giá    <span className="price-tag bg-white shadow-lg lg-2 "><small>1,680,000</small>
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
                                                        <p className="reviews-text mb-0 ms-4">128 Reviews</p>
                                                        </div>
                                                </div>
                                            </NavLink>
                                    </div>
                                    <div className="product1-2 col-6">
                                        <img src="images/product/hinh1a.jpg" className="product-image" alt=""/>
                                        <div className="menu-info flex-wrap align-items-center">
                                                <h4 className="mb-0">   Steak Thịt Vai Wagyu (450Gr)</h4>
                                                <h6>
                                                Giá<span className="price-tag bg-white shadow-lg lg-4"><small>2,500,000</small>vnd</span>
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
                         <div className="product1">
                            <h5>CÁC MÓN BÒ KOBE</h5>
                            <div className="row">
                                <div className="product1-1 col-6">
                                        <img src="images/product/hinh2.1.jpg" className="product-image" alt=""/>
                                        <div className="menu-info  flex-wrap align-items-center ">
                                                <h4 className="text-align:center">Steak Thịt Bụng Bò (225Gr) </h4>
                                                <h6>
                                                    Giá<span className="price-tag bg-white shadow-lg lg-2  "><small>550,000</small>
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
                         <div className="product1">
                            <h5> COMBO</h5>
                            <div className="row">
                                <div className="product1-1 col-6">
                                        <img src="images/product/combo1.jpg" className="product-image" alt=""/>
                                        <div className="menu-info  flex-wrap align-items-center ">
                                                <h4 className="text-align:center">Combo Bò Wagyu 3 Loại (Steak Nạc Vai, Mông Trên, Mông Đùi) </h4>
                                                <h6>
                                                    Giá<span className="price-tag bg-white shadow-lg lg-2 "><small>2,180,000</small>
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
                                    <img src="images/product/combo2.jpg" className="product-image" alt=""/>
                                    <div className="menu-info flex-wrap align-items-center">
                                            <h4 className="mb-0">Combo Lớn (Steak Bụng Bò, Lưỡi Bò, Mông Trên, Thịt Xông Khói, Xúc Xích)</h4>
                                            <h6>
                                            Giá<span className="price-tag bg-white shadow-lg lg-4"><small>3,180,000</small>vnd</span>
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
                         <div className="product1">
                            <h5> CÁC MÓN SALAD</h5>
                            <div className="row">
                                <div className="product1-1 col-6">
                                        <img src="images/product/salat1.jpg" className="product-image" alt=""/>
                                        <div className="menu-info  flex-wrap align-items-center ">
                                                <h4 className="text-align:center">Salad Romaine Nướng & Bacon Shinshu </h4>
                                                <h6>
                                                    Giá<span className="price-tag bg-white shadow-lg lg-2 "><small>290,000</small>
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
                                                    <p className="reviews-text mb-0 ms-4">128 Reviews</p>
                                                    </div>
                                            </div>
                                </div>
                                <div className="product1-2 col-6">
                                    <img src="images/product/salat2.jpg" className="product-image" alt=""/>
                                    <div className="menu-info flex-wrap align-items-center">
                                            <h4 className="mb-0">Salad Cà Chua Hokkaido & Rau Hỗn Hợp</h4>
                                            <h6>
                                            Giá<span className="price-tag bg-white shadow-lg lg-4"><small>320,000</small>vnd</span>
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
                         <div className="product1">
                            <h5> CÁC MÓN KHAI VỊ</h5>
                            <div className="row">
                                <div className="product1-1 col-6">
                                        <img src="images/product/khaivi.jpg" className="product-image" alt=""/>
                                        <div className="menu-info  flex-wrap align-items-center ">
                                                <h4 className="text-align:center">Ham Tươi & Salami </h4>
                                                <h6>
                                                    Giá<span className="price-tag bg-white shadow-lg lg-2 "><small>250,000</small>
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
                                                    <p className="reviews-text mb-0 ms-4">128 Reviews</p>
                                                    </div>
                                            </div>
                                </div>
                                <div className="product1-2 col-6">
                                    <img src="images/product/khaivi1.jpg" className="product-image" alt=""/>
                                    <div className="menu-info flex-wrap align-items-center">
                                            <h4 className="mb-0">Bánh Mì Cắt Lát Kèm Cà Chua & Húng Quế</h4>
                                            <h6>
                                            Giá<span className="price-tag bg-white shadow-lg lg-4"><small>120,000</small>vnd</span>
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
                         <div className="product1">
                            <h5> CÁC MÓN KHAI VỊ</h5>
                            <div className="row">
                                <div className="product1-1 col-6">
                                        <img src="images/product/kho.jpg" className="product-image" alt=""/>
                                        <div className="menu-info  flex-wrap align-items-center ">
                                                <h4 className="text-align:center">Ahijo Lưỡi Bò </h4>
                                                <h6>
                                                    Giá<span className="price-tag bg-white shadow-lg lg-2 "><small>180,000</small>
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
                                                    <p className="reviews-text mb-0 ms-4">128 Reviews</p>
                                                    </div>
                                            </div>
                                </div>
                                <div className="product1-2 col-6">
                                    <img src="images/product/kho1.jpg" className="product-image" alt=""/>
                                    <div className="menu-info flex-wrap align-items-center">
                                            <h4 className="mb-0">Ahijo Bạch Tuộc Và Nấm</h4>
                                            <h6>
                                            Giá<span className="price-tag bg-white shadow-lg lg-4"><small>200,000</small>vnd</span>
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
                         <div className="product1">
                            <h5> CÁC MÓN DO ĐẦU BẾP ĐẶC BIỆT</h5>
                            <div className="row">
                                <div className="product1-1 col-6">
                                        <img src="images/product/chef.jpg" className="product-image" alt=""/>
                                        <div className="menu-info  flex-wrap align-items-center ">
                                                <h4 className="text-align:center">Tôm Hùm Sốt Bào Ngư</h4>
                                                <h6>
                                                    Giá<span className="price-tag bg-white shadow-lg lg-2 "><small>1,390,000</small>
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
                                                    <p className="reviews-text mb-0 ms-4">128 Reviews</p>
                                                    </div>
                                            </div>
                                </div>
                                <div className="product1-2 col-6">
                                    <img src="images/product/chef1.jpg" className="product-image" alt=""/>
                                    <div className="menu-info flex-wrap align-items-center">
                                            <h4 className="mb-0">Sò Điệp Hokkaido Sốt Kem</h4>
                                            <h6>
                                            Giá<span className="price-tag bg-white shadow-lg lg-4"><small>390,000</small>vnd</span>
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
                         <div className="product1">
                            <h5> CÁC MÓN HOT</h5>
                            <div className="row">
                                <div className="product1-1 col-6">
                                        <img src="images/product/dish.jpg" className="product-image" alt=""/>
                                        <div className="menu-info  flex-wrap align-items-center ">
                                                <h4 className="text-align:center">Tôm Hùm Sốt Bào Ngư</h4>
                                                <h6>
                                                    Giá<span className="price-tag bg-white shadow-lg lg-2 "><small>1,390,000</small>
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
                                                    <p className="reviews-text mb-0 ms-4">128 Reviews</p>
                                                    </div>
                                            </div>
                                </div>
                                <div className="product1-2 col-6">
                                    <img src="images/product/dish1.jpg" className="product-image" alt=""/>
                                    <div className="menu-info flex-wrap align-items-center">
                                            <h4 className="mb-0">Phô Mai Camembert Nướng Sốt Mật Ong</h4>
                                            <h6>
                                            Giá<span className="price-tag bg-white shadow-lg lg-4"><small>160,000</small>vnd</span>
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
                         <div className="product1">
                            <h5> CÁC MÓN CƠM & MỲ</h5>
                            <div className="row">
                                <div className="product1-1 col-6">
                                        <img src="images/product/pas.jpg" className="product-image" alt=""/>
                                        <div className="menu-info  flex-wrap align-items-center ">
                                                <h4 className="text-align:center">Sushi Bò Tuyết Nướng</h4>
                                                <h6>
                                                    Giá<span className="price-tag bg-white shadow-lg lg-2 "><small>390,000</small>
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
                                                    <p className="reviews-text mb-0 ms-4">128 Reviews</p>
                                                    </div>
                                            </div>
                                </div>
                                <div className="product1-2 col-6">
                                    <img src="images/product/pas1.jpg" className="product-image" alt=""/>
                                    <div className="menu-info flex-wrap align-items-center">
                                            <h4 className="mb-0">Mì Ý Bò Bằm</h4>
                                            <h6>
                                            Giá<span className="price-tag bg-white shadow-lg lg-4"><small>
350,000</small>vnd</span>
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
                         <div className="product1">
                            <h5> CÁC MÓN TRÁNG MIỆNG</h5>
                            <div className="row">
                                <div className="product1-1 col-6">
                                        <img src="images/product/traicay.jpg" className="product-image" alt=""/>
                                        <div className="menu-info  flex-wrap align-items-center ">
                                                <h4 className="text-align:center">Thố Kem Trái Cây</h4>
                                                <h6>
                                                    Giá<span className="price-tag bg-white shadow-lg lg-2 "><small>160,000</small>
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
                                                    <p className="reviews-text mb-0 ms-4">128 Reviews</p>
                                                    </div>
                                            </div>
                                </div>
                                <div className="product1-2 col-6">
                                    <img src="images/product/traicay1.jpg" className="product-image" alt=""/>
                                    <div className="menu-info flex-wrap align-items-center">
                                            <h4 className="mb-0">Đĩa Tráng Miệng Tổng Hợp</h4>
                                            <h6>
                                            Giá<span className="price-tag bg-white shadow-lg lg-4"><small>
                                            120,000</small>vnd</span>
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
                         
                         




                {/* <div className="container">
                    <div className="category-layout">
                        <div className=" menu-left-1">
                                    <h5 className="combo">Menu</h5>
                                    
                                    <div className="cate-item col=12">
                                    
                                                <ul  className="menu-item5555">
                                                    <li id="menu-item-5576" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5576"><a href="#snowagingwagyu">SNOW AGING WAGYU</a></li>
                                                    <li id="menu-item-5577" className="menu-item-5577"><a href="#agingbeef">AGING BEEF</a></li>
                                                    <li id="menu-item-5578" className="menu-item-5577"><a href="#combo">COMBO</a></li>
                                                    <li id="menu-item-5579" className="menu-item-5577"><a href="#salad">SALAD</a></li>
                                                    <li id="menu-item-5580"className="menu-item-5577"><a href="#appetizer">APPETIZER</a></li>
                                                    <li id="menu-item-5581" className="menu-item-5577"><a href="#ahijo">AHIJO</a></li>
                                                    <li id="menu-item-6480" className="menu-item-5577"><a href="#chefsspecial">CHEF'S SPECIAL</a></li>
                                                    <li id="menu-item-5582" className="menu-item-5577"><a href="#hotdish">HOT DISH</a></li>
                                                    <li id="menu-item-5583" className="menu-item-5577"><a href="#ricepasta">RICE &amp; PASTA</a></li>
                                                    <li id="menu-item-5584" className="menu-item-5577"><a href="#desert">DESSERT</a></li>
                                                    <li id="menu-item-5585"className="menu-item-5577"><a href="https://ussinavietnam.vn/thuc-don-do-uong-nha-hang-ussina-aging-beef-bar/">ĐỒ UỐNG</a></li>
                                                    <li id="menu-item-6088" className="menu-item-5577"><a href="https://ussinavietnam.vn/thuc-don-ruou-tai-ussina-aging-beef-bar/">RƯỢU</a></li>
                                                </ul>
                                    </div>
                        </div>     
                    </div>
                    <div className="products">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-12">
                                    <NavLink className="nav-link" to="/product_details1" >
                                    <img src="images/breakfast/brett-jordan-8xt8-HIFqc8-unsplash.jpg" className="img-fluid menu-image" alt=""/>
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
                                                </div>
                                        </div>
                                    </NavLink>
                                    </div>

                                <div className="col-lg-4 col-md-6 col-12">
                                    <NavLink className="nav-link" to="/product_details2">
                                    <div className="menu-thumb">
                                        <img src="images/breakfast/lucas-swennen-1W_MyJSRLuQ-unsplash.jpg" className="img-fluid menu-image" alt=""/>

                                        <div className="menu-info d-flex flex-wrap align-items-center">
                                        <h4 className="mb-0">Baked Creamy</h4>

                                            <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>16.50</span>

                                            <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                                <h6 className="reviews-text mb-0 me-3">3/5</h6>

                                            <div className="reviews-stars">
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star reviews-icon"></i>
                                                    <i className="bi-star reviews-icon"></i>
                                                </div>

                                                <p className="reviews-text mb-0 ms-4">64 Reviews</p>
                                            </div>
                                        </div>
                                    </div>
                                    </NavLink>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                <NavLink className="nav-link" to="/product_details3">
                                    <div className="menu-thumb">
                                        <img src="images/breakfast/louis-hansel-dphM2U1xq0U-unsplash.jpg" className="img-fluid menu-image" alt=""/>

                                        <div className="menu-info d-flex flex-wrap align-items-center">
                                            <h4 className="mb-0">Burger Set</h4>

                                            <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>24.50</span>

                                            <del className="ms-4"><small>$</small>36.50</del>
                                            <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                                <h6 className="reviews-text mb-0 me-3">3/5</h6>

                                                <div className="reviews-stars">
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star reviews-icon"></i>
                                                    <i className="bi-star reviews-icon"></i>
                                                </div>

                                            <p className="reviews-text mb-0 ms-4">32 Reviews</p>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                                
                                </div>

                                </div>

                    </div>
                </div> */}
              
            </div>
              {/* <div className="pagination">
                        <a href="#">1</a>
                        <a href="#">2sssssssss</a>
                        <a href="#">3</a>
                        <a href="#"><i className="fa fa-long-arrow-right"></i></a>
            </div> */}
            
            </div>
            
>>>>>>> 21090f20d484cbe468a8344878ca5ef638a2d6ac
            
          
)}
        export default Menu;
        
        