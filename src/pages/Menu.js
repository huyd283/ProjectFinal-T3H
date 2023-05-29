import React, { useEffect } from "react";
import { NavLink} from 'react-router-dom';
import Header from "../Components/ShareComponents/Header";
import './body.css';
import { useDispatch, useSelector } from "react-redux";
import { getFectProdust, getcategory } from "../redux/slice/getProductSlice";
function Menu (props){
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFectProdust());
      }, []);

      useEffect(() => {
        dispatch(getcategory());
      }, []);

  const { products } = useSelector((state) => state.products);

  const { listcategory } = useSelector((state) => state.products);
  if(listcategory === 0 ) return <h1>undfind</h1>

        if(products === 0 ) return <h1>undfind</h1>
        return(
            <div className="menu">
                <div className ="header">
                              <div className="header-items" >
                               
                            </div>  
                         {/* <div className="link-user">
                                    <NavLink className="nav-link" to="/">TRANG CHỦ</NavLink>
                                    <span className="span">/</span>
                                    <NavLink className="nav-link" to="/Menu">Menu</NavLink>
                                    <span className=""></span>
                            </div>  */}
                            <div className=" menu-left-1">
                           
                            <em> 
                            <h2 className="combo">THỰC ĐƠN NHÀ HÀNG</h2>
                            </em>
                                    
                                    
                                    <div className="cate-item col=12">
                                    
                                                <ul  className="menu-item5555">
                                                

                                                    <div className="item5555">
                                                    {listcategory?.map((item,index)=>{
                                                        return(
                                                            <div className="list-category" key={index} >
                                                            <div > {item.name} </div>
                                                        </div>
                                                        )  
                                                    })}
                                                    </div>
                                                </ul>
                                    </div>
                            </div> 
                         </div>
                    <div className="products">
                    
                                                <b><h5>THỰC ĐƠN CÁC MÓN BÒ NHẬP </h5></b>
                        <div class="row">
                                    {products?.map((product,index)=>{
                                     return   <>
                                           <div key={index} class="product1-2 col-4">
                                            <NavLink className="nav-link" to={`/product_details/${product.id}`} class="menu-thumb">
                                            <img src={product.img} class="img-fluid menu-image" alt=""/>
                                                <div class="menu-info d-flex flex-wrap align-items-center">
                                                    <h4 class="mb-0">{product.nameFood} </h4><br></br>
                                                    <span class="price-tag bg-white shadow-lg lg-2"><small>$</small>{product.price}</span>
                                                        <div class="d-flex flex-wrap align-items-center w-100 mt-2">
                                                        <h6 class="reviews-text mb-0 me-3">4.4/5</h6>
                                                        <div class="reviews-stars">
                                                            <i class="bi-star-fill reviews-icon"></i>
                                                            <i class="bi-star-fill reviews-icon"></i>
                                                            <i class="bi-star-fill reviews-icon"></i>
                                                            <i class="bi-star-fill reviews-icon"></i>
                                                            <i class="bi-star reviews-icon"></i>
                                                        </div>
                                                        <p class="reviews-text mb-0 ms-4">{product.reviewDemo} Reviews</p>
                                                        </div>
                                                </div>
                                            </NavLink>
                                </div>
                                        </>
                                    })}
                              </div>

                    </div>
                    <div className="products">
                    <b><h5>THỰC ĐƠN CÁC COMBO BÒ</h5></b>
                        <div class="row">
                                    {products?.map((product,index)=>{
                                     return   <>
                                           <div key={index} class="product1-2 col-4">
                                            <NavLink className="nav-link" to={`/product_details/${product.id}`} class="menu-thumb">
                                            <img src={product.img} class="img-fluid menu-image" alt=""/>
                                                <div class="menu-info d-flex flex-wrap align-items-center">
                                                    <h4 class="mb-0">{product.nameFood} </h4><br></br>
                                                    <span class="price-tag bg-white shadow-lg lg-2"><small>$</small>{product.price}</span>
                                                        <div class="d-flex flex-wrap align-items-center w-100 mt-2">
                                                        <h6 class="reviews-text mb-0 me-3">4.4/5</h6>
                                                        <div class="reviews-stars">
                                                            <i class="bi-star-fill reviews-icon"></i>
                                                            <i class="bi-star-fill reviews-icon"></i>
                                                            <i class="bi-star-fill reviews-icon"></i>
                                                            <i class="bi-star-fill reviews-icon"></i>
                                                            <i class="bi-star reviews-icon"></i>
                                                        </div>
                                                        <p class="reviews-text mb-0 ms-4">{product.reviewDemo} Reviews</p>
                                                        </div>
                                                </div>
                                            </NavLink>
                                </div>
                                        </>
                                    })}
                              </div>

                    </div>

                </div>
            
          
)}
        export default Menu;
        
        