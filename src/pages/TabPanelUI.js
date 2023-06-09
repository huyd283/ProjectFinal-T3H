import React, { useEffect, useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getByCate } from '../redux/slice/getProductSlice';
import { NavLink } from 'react-router-dom';
import './body.css';
import { hover } from '@testing-library/user-event/dist/hover';
import { addToCart } from '../redux/slice/cartSlice';
import { ToastContainer, toast } from 'react-toastify';

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
      <div className='listcate'>
      <TabList  onChange={handleChange}>
      {listcategory && listcategory.map((cate,index)=>{
        return <Tab  onClick={() => {
          setListCateroly(cate.name);
        }} style={{ width:'150px' ,background:'unset ' }} label={cate.name}  value={index} />
      
      })}
      </TabList>
      </div>
    
      <div >
      {listcategory && listcategory.map((cate,index)=>{
        return <>
      <TabPanel style={{ width:'100%' }}  key={index} value={index}> 
         <div  className='row'>
             {cateProduct &&cateProduct.map((item,index)=>{
               return <>
                 <div className=' product-item col-3'>
                    <div className='wrapper'>
                     <img src={item.img} alt=""/>
                 </div>
                 <div className='"menu-info  flex-wrap align-items-center"'>
                 <h4 class="mb-0">{item.nameFood} </h4><br></br>
                 <span class="price-tag bg-light shadow-lg lg-2"><small>Giá    :</small></span>

                 <span class="price-tag bg-light shadow-lg lg-2"><small>{item.price}.vnd</small></span>
                 
                 
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
             <NavLink to={`/product_details/${item.id}`}><button>Chi Tiết</button></NavLink>
            </div>
            <div className='col-6' >
             <button onClick={  ()=>{dispatch(addToCart(item) ,toast("thêm sản phẩm thành !"))}}>Đặt Món</button>
            </div>
           
            
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