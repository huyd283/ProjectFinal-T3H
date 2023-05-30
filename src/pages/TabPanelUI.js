import React, { useEffect, useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getByCate } from '../redux/slice/getProductSlice';
import { NavLink } from 'react-router-dom';

function TabPanelUI({listcategory}) {
  const [value, setValue] = React.useState(0);
  const [listCaterolyA, setListCateroly] = useState("BÒ NHẬP KHẨU");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getByCate(listCaterolyA));
  }, [listCaterolyA]);

  const { cateProduct } = useSelector((state) => state.products);
  if(cateProduct === 0 ) return <h1>undfind</h1>
  if(listcategory === 0 ) return <h1>undfind</h1>
  console.log(cateProduct);
  console.log(listCaterolyA);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <TabList  onChange={handleChange}>
      {listcategory && listcategory.map((cate,index)=>{
        return <Tab onClick={() => {
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
              <div className='col-3'>
              <div>
                   <img src={item.img} class="img-fluid menu-image" alt=""/>
                 </div>
              <NavLink to={`/product_details/${cate.id}`}>
                {item.nameFood}
               </NavLink>
            <div>
            {item.price} VND

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