import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart,addQauntity } from "../redux/slice/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getById } from "../redux/slice/getProductSlice";
function ProductDetails(){
  let params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getById(params.id));
  }, [params]);

  const { productId } = useSelector((state) => state.products);
    if(productId === 0 ) return <h1>undfind</h1>
console.log(productId);
    return(
      <>
     {
      productId?.map((productId,index)=>{
        return <>
              <div key={index}  className="nav-link"  class="menu-thumb">
                    <div className="main-item-detail">
         <img src={productId?.img} class="img-fluid menu-image" alt=""/>
           <div class="menu-info  align-items-center">
               <h4 class="mb-0">{productId?.nameFood}</h4>
                <span class="price-tag bg-white shadow-lg ms-4"><small>$</small>24.50</span>
                   <div class="d-flex flex-wrap align-items-center w-100 mt-2">
                    <h6 class="reviews-text mb-0 me-3">4.4/5</h6>
                    <div class="reviews-stars">
                       <i class="bi-star-fill reviews-icon"></i>
                       <i class="bi-star-fill reviews-icon"></i>
                       <i class="bi-star-fill reviews-icon"></i>
                       <i class="bi-star-fill reviews-icon"></i>
                       <i class="bi-star reviews-icon"></i>
                    </div>
                    <p class="reviews-text mb-0 ms-4">{productId?.reviewDemo} Reviews</p>
                   </div>
                   <div>
                    <button onClick={
                         ()=>{dispatch(addToCart(productId) ,toast("thêm sản phẩm thành !"))}
                    }>
                        add cart
                    </button>
                   </div>
           </div>
           </div>
         </div>
         <div className="product1">
                            <h5>THỰC ĐƠN MÓN LIÊN QUAN</h5>
                            <div className="row">
                                <div className="product1-1 col-6">
                                        <img src="images/product/combo1.jpg" className="product-image" alt=""/>
                                        <div className="menu-info  flex-wrap align-items-center ">
                                                <h4 className="text-align:center">Steak Thịt Bụng Bò (225Gr) </h4>
                                                <h6>
                                                    Giá<span className="price-tag bg-white shadow-lg lg-2 "><small>550,000</small>
vnd</span>
                                                </h6>
                                                    <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                                    <h6 className="reviews-text mb-0 me-3">4.4/5</h6>
                                                    <div className="reviews-stars">
                                                        <i className="bi-star-fill reviews-icon"></i>
                                                        <i className="bi-star-fill reviews-icon"></i>
                                                        <i className="bi-star-fill reviews-icon"></i>
                                                        <i className="bi-star-fill reviews-icon"></i>
                                                        <i className="bi-star reviews-icon"></i>
                                                    </div>
                                                    <p className="reviews-text mb-0 ms-4">98 Reviews</p>
                                                    </div>
                                            </div>
                                </div>
                                <div className="product1-2 col-6">
                                    <img src="./images/product/combo2.jpg" className="product-image" alt=""/>
                                    <div className="menu-info flex-wrap align-items-center">
                                            <h4 className="mb-0">Steak Thịt Tomahawk</h4>
                                            <h6>
                                            Giá<span className="price-tag bg-white shadow-lg lg-4"><small>1,050,000</small>vnd</span>
                                            </h6>
                                            
                                                <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                                <h6 className="reviews-text mb-0 me-3">4.4/5</h6>
                                                <div className="reviews-stars">
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star reviews-icon"></i>
                                                </div>
                                                <p className="reviews-text mb-0 ms-4">128 Reviews</p>
                                                </div>
                                        </div>
                            </div>
                            </div>
                           
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