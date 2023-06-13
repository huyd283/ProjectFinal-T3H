import React, { useEffect } from "react";
import { NavLink} from 'react-router-dom';
import Header from "../Components/ShareComponents/Header";

import { useDispatch, useSelector } from "react-redux";
import { getFectProdust, getcategory } from "../redux/slice/getProductSlice";
import { useState } from "react";
import { TabPanel } from "@mui/lab";
import TabPanelUI from "./TabPanelUI";
import'./body.css';

import TabPanelUIcopy from "./TabPanelUIcopy";
function Menu2 (props){
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
                                  <div style={{backgroundImage: "url(/images/product/traicay2.jpg)" }}></div>
                                  <div style={{backgroundImage: "url(/images/product/hot1.jpg)" }}></div>
                                  <div style={{backgroundImage: "url(/images/product/salat4.jpg)" }}></div>

                                  
                                  <div style={{backgroundImage: "url(/images/product/logo.jpg)"  , width:333010}}>

                                  
                                  </div>
                                  
                                  <div style={{backgroundImage: "url(/images/product/daubep.jpg)" }}></div>  
                                  <div style={{backgroundImage: "url(/images/product/salat2.jpg)" }}></div>
                                  <div style={{backgroundImage: "url(/images/product/bbq.jpg)" }}></div>
                            </div>  
                            
                       
                            <div className=" menu-left-1">
                           
                           
                            {/* <h2 className="combo">THỰC ĐƠN NHÀ HÀNG</h2> */}
                           
                    {/* category */}
                    
                            <div>
                                <TabPanelUIcopy listcategory={listcategory} />
                            </div>
                    
                            </div> 
                </div>
                    
                   
                  
                
                <div class="pagination">
                    <a href="#">&laquo;</a>
                    <a href="#"><div>
                               
                            </div></a>
                    <a class="active" href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                    <a href="#">&raquo;</a>
              </div>
              </div>
                   
            
          
)}
        export default Menu2;