import React, { useEffect } from "react";
import { NavLink} from 'react-router-dom';
import Header from "../Components/ShareComponents/Header";
import './body.css';
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

  const tabsData = [
    {
      id: 1,
      title: 'Tab 1',
      content: 'combo'
    },
    {
      id: 2,
      title: 'Tab 2',
      content: 'Content of Tab 2'
    },
    {
      id: 3,
      title: 'Tab 3',
      content: 'Content of Tab 3'
    }
  ];

    useEffect(() => {
        dispatch(getFectProdust());
      }, []);

      useEffect(() => {
        dispatch(getcategory());
      }, []);

  const { products } = useSelector((state) => state.products);
  const { listcategory } = useSelector((state) => state.products);


        if(products === 0 ) return <h1>undfind</h1>
        return(
            
            <div className="menu">
            
                <div className ="header">
                              <div className="header-items" >
                               
                            </div>  
                       
                            <div className=" menu-left-1">
                           
                            <em> 
                            <h2 className="combo">THỰC ĐƠN NHÀ HÀNG</h2>
                            </em>
                    {/* category */}
                            <div>
                                <TabPanelUI listcategory={listcategory} />
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
                                                    <span class="price-tag bg-white shadow-lg lg-2"><small>{product.price}.vnd</small></span>
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
                    {/* <div className="products">
                    <b><h5>THỰC ĐƠN CÁC COMBO BÒ</h5></b>
                        <div class="row">
                                    {products?.map((product,index)=>{
                                     return   <>
                                           <div key={index} class="product1-2 col-4">
                                            <NavLink className="nav-link" to={`/product_details/${product.id}`} class="menu-thumb">
                                            <img src={product.img} class="img-fluid menu-image" alt=""/>
                                                <div class="menu-info d-flex flex-wrap align-items-center">
                                                    <h4 class="mb-0">{product.nameFood} </h4><br></br>
                                                    <span class="price-tag bg-white shadow-lg lg-2"><small>{product.price}.vnd</small></span>
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

                    </div> */}
                  
                </div>
                   
            
          
)}
        export default Menu;