import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getById } from "../redux/slice/getProductSlice";
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
                    <button onClick={
                         ()=>{dispatch(addToCart(item) ,toast("thêm sản phẩm thành !"))}
                    }>
                       Đặt Món
                    </button>
                   
                   </div>
           </div>
           </div>
        </div>
        </div>
              


         <div className="product1">
                            <h5>THỰC ĐƠN MÓN LIÊN QUAN</h5>
                           
                           
                         </div>
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