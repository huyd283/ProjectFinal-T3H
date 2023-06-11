import React, { useEffect } from "react";
import { NavLink} from 'react-router-dom';
import Header from "../Components/ShareComponents/Header";

import { useDispatch, useSelector } from "react-redux";
import { getFectProdust, getcategory } from "../redux/slice/getProductSlice";
import { useState } from "react";
import { TabPanel } from "@mui/lab";
import TabPanelUI from "./TabPanelUI";
import'./body.css';
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


       
        return(
            
            <div className="menu">
            
                <div className ="header">
                              <div className="header-items" >
                                  <div style={{backgroundImage: "url(/images/product/hinh1a.jpg)" }}></div>
                                  <div style={{backgroundImage: "url(/images/product/hot1.jpg)" }}></div>
                                
                                  
                                  <div style={{backgroundImage: "url(/images/product/logo.jpg)"  , width:3010}}></div>
                                  
                                  <div style={{backgroundImage: "url(/images/product/hot1.jpg)" }}></div>  
                                  <div style={{backgroundImage: "url(/images/product/combo2.jpg)" }}></div>
                            </div>  
                            
                       
                            <div className=" menu-left-1">
                           
                           
                            <h2 className="combo">THỰC ĐƠN NHÀ HÀNG</h2>
                           
                    {/* category */}
                    
                            <div>
                                <TabPanelUI listcategory={listcategory} />
                            </div>
                    
                            </div> 
                </div>
                    
                   
                  
                
                <div class="pagination">
                    <a href="#">&laquo;</a>
                    <a href="#">1</a>
                    <a class="active" href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                    <a href="#">&raquo;</a>
              </div>
              </div>
                   
            
          
)}
        export default Menu;