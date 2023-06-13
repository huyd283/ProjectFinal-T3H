import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getById } from "../redux/slice/getProductSlice";
import { NavLink } from "react-router-dom";
import'./body.css';
function ProductDetails(){
  let params = useParams();
  const dispatch = useDispatch();
  


  useEffect(() => {
    dispatch(getById(params.id));
  }, [params]);

  const { productId } = useSelector((state) => state.products);

    if(productId === 0 ) return <h1>unfind</h1>
console.log(productId);
    return(
      <>
     
      {
      productId && productId?.map((item,index)=>{
       
        return <>
        <div className="container">
        <div key={index}  className="nav-link"  class="menu-thumb">
                    <div className="main-item-detail row">
                      <div className="wrapper col-6">
                      <img src={item?.img} alt=""/>
                      </div>
                       <div class="menu-info  align-items-center col-6">
                          <h4 class="mb-0">{item?.nameFood}</h4>
                          <span class="price-tag bg-light shadow-lg lg-2"><small>Giá    :</small></span>
                            <span class="price-tag bg-light shadow-lg lg-2"><small>{item.price}.vnd</small></span>
                          <div className="row">
                         
                          <p><h6>Nguyên Liệu :</h6>{item.describe } </p>
                          </div>
                         


                           <div class="d-flex flex-wrap align-items-center w-100 mt-2">
                             <h6 class="reviews-text mb-0 me-3">{item.reviewDemo }</h6>
                             <div class="reviews-stars">
                                <i class="bi-star-fill reviews-icon"></i>
                                <i class="bi-star-fill reviews-icon"></i>
                                <i class="bi-star-fill reviews-icon"></i>
                                <i class="bi-star-fill reviews-icon"></i>
                                <i class="bi-star reviews-icon"></i>
                             </div>
                            <p class="reviews-text mb-0 ms-4">{item.review }</p>
                           </div>
                   <div>
                        <button className="dish-add-btn" style={{height:70}} onClick={()=>{dispatch(addToCart(item) ,toast("thêm sản phẩm thành !"))}}><h3>Đặt Món</h3></button>
                  </div>
           </div>
           </div>
        </div>
        </div>
              


         
        <section className="BgImage">
            
            </section>          
            <section className="about-sec section" id="about">
                <div className='container'>
                <div className="row">
                            <div className="">
                                <div className="sec-title text-center mb-5">
                                <h2 className="h2-title"> Menu Liên Quan</h2>
                                    <div className="sec-title-shape mb-4">
                                        <img src="images/product/title-shape.svg" alt=""/>
                                    </div>
                                  


                                
                                     <div class="menu-list-row">
                                    <div class="row g-xxl-5 bydefault_show" id="menu-dish">
                                        <div class="col-lg-4 col-sm-6 dish-box-wp breakfast" data-cat="breakfast">
                                            <div class="dish-box text-center">
                                                <div class="dist-img">
                                                    <img src="/images/product/hot2.jpg" alt=""/>
                                                </div>
                                                <div class="dish-rating">
                                                    5
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                </div>
                                                <div class="dish-title">
                                                    <h3 class="h3-title">Sườn Bò Nướng Sốt BBQ</h3>
                                                    <p>23 Đánh Giá Món Ăn</p>
                                                </div>
                                                <div class="dish-info">
                                                    <ul>
                                                        <li>
                                                            <p>Sale</p>
                                                            <b>Thành Tiền</b>
                                                        </li>
                                                        <li>
                                                            <p>Upto 30%</p>
                                                            <b>560000.vnd</b>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="dist-bottom-row">
                                                    <ul>
                                                        
                                                        <li>
                                                          
                                                            <NavLink className="nav-link " to="/Menu">   <button class="dish-add-btn"> Check our Menu</button></NavLink>
                                                            
                                                                </li>
                                                        <li>
                                                        
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-sm-6 dish-box-wp breakfast" data-cat="breakfast">
                                            <div class="dish-box text-center">
                                                <div class="dist-img">
                                                    <img src="/images/product/hot.jpg" alt=""/>
                                                </div>
                                                <div class="dish-rating">
                                                    5
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                </div>
                                                <div class="dish-title">
                                                    <h3 class="h3-title">Combo Bò Wagyu Đặc Biệt</h3>
                                                    <p>38 Đánh Giá Món Ăn</p>
                                                </div>
                                                <div class="dish-info">
                                                    <ul>
                                                        <li>
                                                            <p>Sale</p>
                                                            <b>Thành Tiền</b>
                                                        </li>
                                                        <li>
                                                            <p>Upto 30%</p>
                                                            <b>750000.vnd</b>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="dist-bottom-row">
                                                    <ul>
                                                        
                                                        <li>
                                                          
                                                            <NavLink className="nav-link " to="/Menu">   <button class="dish-add-btn"> Check our Menu</button></NavLink>
                                                            
                                                                </li>
                                                        <li>
                                                        
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-sm-6 dish-box-wp breakfast" data-cat="breakfast">
                                            <div class="dish-box text-center">
                                                <div class="dist-img">
                                                    <img src="/images/product/bbq.jpg" alt=""/>
                                                </div>
                                                <div class="dish-rating">
                                                    5
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                </div>
                                                <div class="dish-title">
                                                    <h3 class="h3-title">Bò Bít Tết (Beef Steak)</h3>
                                                    <p>90 Đánh Giá Món Ăn</p>
                                                </div>
                                                <div class="dish-info">
                                                    <ul>
                                                        <li>
                                                            <p>Sale</p>
                                                            <b>Thành Tiền</b>
                                                        </li>
                                                        <li>
                                                            <p>Upto 30%</p>
                                                            <b>470000.vnd</b>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="dist-bottom-row">
                                                    <ul>
                                                        
                                                        <li>
                                                          
                                                            <NavLink className="nav-link " to="/Menu">   <button class="dish-add-btn"> Check our Menu</button></NavLink>
                                                            
                                                                </li>
                                                        <li>
                                                        
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        

                                    
                                       
                                    </div>
                                    </div> 
                            </div>
                        </div>
                    </div>
                    
                </div>
                       
              
            </section>
                           
                        
        </>
      })
     }
         <ToastContainer position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
      </>
    )
}
export default ProductDetails;