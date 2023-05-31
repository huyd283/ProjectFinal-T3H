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
                    
                   
                  
                </div>
                   
            
          
)}
        export default Menu;