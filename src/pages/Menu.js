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


    useEffect(() => {
        dispatch(getFectProdust());
      }, []);

      useEffect(() => {
        dispatch(getcategory());
      }, []);

  const { products } = useSelector((state) => state.products);
  const { listcategory } = useSelector((state) => state.products);

  // phân trang
  

       
        return(
            
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
                       
                            <div className=" menu-left-1">
                           
                           
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
                   
            
          
)}
        export default Menu;