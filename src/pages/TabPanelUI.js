import React, { useEffect, useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getByCate } from '../redux/slice/getProductSlice';
import { NavLink } from 'react-router-dom';
import './body.css';
import { hover } from '@testing-library/user-event/dist/hover';

function TabPanelUI({listcategory}) {
  const [value, setValue] = React.useState(0);
  const [listCaterolyA, setListCateroly] = useState("TẤT CẢ");
  const dispatch = useDispatch();
  const { productId } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getByCate(listCaterolyA));

  }, [listCaterolyA]);

  const { cateProduct } = useSelector((state) => state.products);
  // if(cateProduct === 0 ) return <h1>undfind</h1>
  // if(listcategory === 0 ) return <h1>undfind</h1>
  // console.log(cateProduct);
  // onsole.log(listCaterolcyA);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <TabList  onChange={handleChange}>
      {listcategory && listcategory.map((cate,index)=>{
        return    <Tab onClick={() => {
          setListCateroly(cate.name);
        }} style={{ width:'150px',background:'unset ' }} label={cate.name} value={index} />
      
      })}
      </TabList>
      <div >
      {listcategory && listcategory.map((cate,index)=>{
        return <>
      <TabPanel style={{ width:'100%' }}  key={index} value={index}> 
         <div  className='row'>
             {cateProduct &&cateProduct.map((item,index)=>{
               return <>
                 <div className=' product-item col-4'>
                    <div className='menu-image'>
                     <img src={item.img} class=" menu-image" alt=""/>
                 </div>
                 <div className='"menu-info  flex-wrap align-items-center"'>
                 <h4 class="mb-0">{item.nameFood} </h4><br></br>
                 <span class="price-tag bg-white shadow-lg lg-2"><small>Giá    :</small></span>
                 <span class="price-tag bg-white shadow-lg lg-2"><small>{item.price}.vnd</small></span>
                 
                 
                  <div class="d-flex flex-wrap align-items-center w-100 mt-2">  
                    <h6 class="reviews-text mb-0 me-3">{item.reviewDemo }</h6>
                    <div class="reviews-stars">
                      <i class="bi-star-fill reviews-icon"></i>
                      <i class="bi-star-fill reviews-icon"></i>
                      <i class="bi-star-fill reviews-icon"></i>
                      <i class="bi-star-fill reviews-icon"></i>
                      <i class="bi-star reviews-icon"></i>
                    </div>
                    <p class="reviews-text mb-0 ms-4"> {item.review }</p>
                  </div>
             
            </div>
          <div className=' button row'>
            <div className='col-6' >
              <button ><NavLink to={`/product_details/${item.id}`}>Chi Tiết</NavLink></button>
            </div>
            <div className='col-6' >
              <button ><NavLink to={`/product_details/${item.id}`}>Chi Tiết</NavLink></button>
            </div>
            
           
            
          </div>
         

           
                </div>
        
        </>
       })}
      </div>
       </TabPanel>
        </>
      })}
       </div>

    </TabContext>
  );
}

export default TabPanelUI