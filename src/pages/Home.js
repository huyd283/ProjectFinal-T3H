import React from 'react';
function Home (props){
    return (
        <React.Fragment>
        <main>

            <section className="hero">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-5 col-12 m-auto">
                            <div className="heroText">

                                <h1 className="text-white mb-lg-5 mb-3">BÒ - TƠ QUÁN - MỘC</h1>

                                <div className="c-reviews my-3 d-flex flex-wrap align-items-center">
                                    <div className="d-flex flex-wrap align-items-center">
                                        <h4 className="text-white mb-0 me-3">4.4/5</h4>

                                        <div className="reviews-stars">
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                        </div>
                                    </div>

                                    <p className="text-white w-100">From <strong>1,206+</strong> Customer Reviews</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-12">
                            <div id="carouselExampleCaptions" className="carousel carousel-fade hero-carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="carousel-image-wrap">
                                            <img src="https://botoquanmoc.com/images/slideshow/2019/05/28/compress/slide1_1559039241.jpg" className="img-fluid carousel-image" alt=""/>
                                        </div>
                                        
                                        <div className="carousel-caption">
                                            <span className="text-white">
                                                <i className="bi-geo-alt me-2"></i>
                                                Thái Thịnh, Hà Nội
                                            </span>

                                            <h4 className="hero-text">THƯỞNG THỨC BÒ TƠ THƯỢNG HẠNG</h4>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="carousel-image-wrap">
                                            <img src="images/slide/jason-leung-O67LZfeyYBk-unsplash.jpg" className="img-fluid carousel-image" alt=""/>
                                        </div>
                                        
                                        <div className="carousel-caption">
                                            <div className="d-flex align-items-center">
                                                <h4 className="hero-text">Steak</h4>

                                                <span className="price-tag ms-4"><small>Đ</small>26.50</span>
                                            </div>

                                            <div className="d-flex flex-wrap align-items-center">
                                                <h5 className="reviews-text mb-0 me-3">3.8/5</h5>

                                                <div className="reviews-stars">
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star reviews-icon"></i>
                                                    <i className="bi-star reviews-icon"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="carousel-image-wrap">
                                            <img src="images/slide/ivan-torres-MQUqbmszGGM-unsplash.jpg" className="img-fluid carousel-image" alt=""/>
                                        </div>
                                        
                                        <div className="carousel-caption">
                                            <div className="d-flex align-items-center">
                                                <h4 className="hero-text">Sausage Pasta</h4>

                                                <span className="price-tag ms-4"><small>Đ</small>18.25</span>
                                            </div>

                                            <div className="d-flex flex-wrap align-items-center">
                                                <h5 className="reviews-text mb-0 me-3">4.2/5</h5>

                                                <div className="reviews-stars">
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                    <i className="bi-star reviews-icon"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>

                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="img-wrap">
                    <video autoplay="" loop="" muted="" className="custom-video" poster="">
                        <source src="video/production_ID_3769033.mp4" type="video/mp4"/>
                        	Your browser does not support the video tag.
                    	</video>
                    {/* <img src="/public/images/home/homeImg1.jpg" /> */}
                </div>

                <div className="overlay"></div>
            </section>

            <section className="menu section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-12">
                            <h2 className="text-center mb-lg-5 mb-4">Special Menus</h2>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="menu-thumb">
                                <div className="menu-image-wrap">
                                    <img src="https://botoquanmoc.com/images/products/2023/05/08/large/342720443_617543967096001_1356484114668483016_n_1683528923.jpg" className="img-fluid menu-image" alt=""/>

                                    <span className="menu-tag bg-warning">Dinner</span>
                                </div>

                                <div className="menu-info d-flex flex-wrap align-items-center">
                                    <h4 className="mb-0">BÒ SỐT TIÊU ĐEN</h4>

                                    <span className="price-tag bg-white shadow-lg ms-4">119.000<small>Đ</small></span>

                                    <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                        <h6 className="reviews-text mb-0 me-3">4.3/5</h6>

                                        <div className="reviews-stars">
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                        </div>

                                        <p className="reviews-text mb-0 ms-4">102 Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="menu-thumb">
                                <div className="menu-image-wrap">
                                    <img src="https://botoquanmoc.com/images/products/2023/05/08/large/342702175_217389224337088_589677272958336657_n_1683528885.jpg" className="img-fluid menu-image" alt=""/>

                                    <span className="menu-tag bg-warning">Lunch</span>
                                </div>

                                <div className="menu-info d-flex flex-wrap align-items-center">
                                    <h4 className="mb-0">BÒ SỐT TIÊU ĐEN + BÁNH BAO</h4>

                                    <span className="price-tag bg-white shadow-lg ms-4">185.000<small>Đ</small></span>

                                    <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                        <h6 className="reviews-text mb-0 me-3">3/5</h6>

                                        <div className="reviews-stars">
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                        </div>

                                        <p className="reviews-text mb-0 ms-4">50 Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="menu-thumb">
                                <div className="menu-image-wrap">
                                    <img src="https://botoquanmoc.com/images/products/2023/05/08/large/344595423_930630421391829_3761460050034676019_n_1683515996.jpg" className="img-fluid menu-image" alt=""/>

                                    <span className="menu-tag bg-warning">Breakfast</span>
                                </div>

                                <div className="menu-info d-flex flex-wrap align-items-center">
                                    <h4 className="mb-0">XÔI CHIÊN</h4>

                                    <span className="price-tag bg-white shadow-lg ms-4">45.000<small>Đ</small></span>

                                    <del className="ms-4">150<small>Đ</small></del>

                                    <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                        <h6 className="reviews-text mb-0 me-3">3/5</h6>

                                        <div className="reviews-stars">
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                        </div>

                                        <p className="reviews-text mb-0 ms-4">86 Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="menu-thumb">
                                <div className="menu-image-wrap">
                                    <img src="https://botoquanmoc.com/images/products/2023/05/08/large/119205895_999066027226801_8360464199140109388_n_1683520069.jpg" className="img-fluid menu-image" alt=""/>

                                    <span className="menu-tag bg-warning">Dinner</span>
                                </div>

                                <div className="menu-info d-flex flex-wrap align-items-center">
                                    <h4 className="mb-0">CHÁO TIM BÒ</h4>

                                    <span className="price-tag bg-white shadow-lg ms-4">95.000<small>Đ</small></span>

                                    <del className="ms-4">124.000<small>Đ</small></del>

                                    <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                        <h6 className="reviews-text mb-0 me-3">3/5</h6>

                                        <div className="reviews-stars">
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                        </div>

                                        <p className="reviews-text mb-0 ms-4">44 Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-lg-4 col-md-6 col-12">
                            <div className="menu-thumb">
                                <div className="menu-image-wrap">
                                    <img src="images/breakfast/louis-hansel-dphM2U1xq0U-unsplash.jpg" className="img-fluid menu-image" alt=""/>

                                    <span className="menu-tag bg-warning">Breakfast</span>
                                </div>

                                <div className="menu-info d-flex flex-wrap align-items-center">
                                    <h4 className="mb-0">Burger Set</h4>

                                    <span className="price-tag bg-white shadow-lg ms-4"><small>Đ</small>20.50</span>

                                    <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                        <h6 className="reviews-text mb-0 me-3">4.3/5</h6>

                                        <div className="reviews-stars">
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                        </div>

                                        <p className="reviews-text mb-0 ms-4">102 Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="menu-thumb">
                                <div className="menu-image-wrap">
                                    <img src="images/lunch/farhad-ibrahimzade-D5c9ZciQy_I-unsplash.jpg" className="img-fluid menu-image" alt=""/>

                                    <span className="menu-tag bg-warning">Lunch</span>
                                </div>

                                <div className="menu-info d-flex flex-wrap align-items-center">
                                    <h4 className="mb-0">Healthy Soup</h4>

                                    <span className="price-tag bg-white shadow-lg ms-4"><small>Đ</small>34.20</span>

                                    <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                                        <h6 className="reviews-text mb-0 me-3">3/5</h6>

                                        <div className="reviews-stars">
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star-fill reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                            <i className="bi-star reviews-icon"></i>
                                        </div>

                                        <p className="reviews-text mb-0 ms-4">64 Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </section>

            <section className="BgImage"></section>

            <section className="news section-padding">
                <div className="container">
                    <div className="row">

                        <h2 className="text-center mb-lg-5 mb-4">Tin tức &amp; Sự kiện</h2>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="news-thumb mb-4">
                                <a href="news-detail.html">
                                    <img src="https://botoquanmoc.com/images/news/2023/04/27/large/343658403_959895225355526_2705148923649967748_n_1682583011.jpg" className="img-fluid news-image" alt=""/>
                                </a>
                                
                                <div className="news-text-info news-text-info-large">
                                    <span className="category-tag bg-danger">27/04/23</span>

                                    <h5 className="news-title mt-2">
                                        <a href="news-detail.html" className="news-title-link">[HÀ NỘI], BÒ TƠ QUÁN MỘC CẬP NHẬP MENU MỚI HÈ 2023</a>
                                    </h5>
                                </div>
                            </div> 
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="news-thumb mb-4">
                                <a href="news-detail.html">
                                    <img src="https://botoquanmoc.com/images/news/2023/04/20/resized/bia-web_1681979603.png" className="img-fluid news-image" alt=""/>
                                </a>
                                
                                <div className="news-text-info news-text-info-large">
                                    <span className="category-tag bg-danger">20/04/23</span>

                                    <h5 className="news-title mt-2">
                                        <a href="news-detail.html" className="news-title-link">RỘN RÀNG KHAI TRƯƠNG, RINH NGAY ƯU ĐÃI 20% TOÀN BỘ MENU ĐỒ ĂN</a>
                                    </h5>
                                </div>
                            </div> 
                        </div>

                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="news-thumb mb-lg-0 mb-lg-4 mb-0">
                                <a href="news-detail.html">
                                    <img src="https://botoquanmoc.com/images/news/2023/04/19/resized/65393736_661120591021348_4470469688463196160_n_1681870833.jpg" className="img-fluid news-image" alt=""/>
                                </a>
                                
                                <div className="news-text-info">
                                    <span className="category-tag me-3 bg-info">Khuyến mại</span>
                                    <strong>19/04/23</strong>
                                    <h5 className="news-title mt-2">
                                        <a href="news-detail.html" className="news-title-link">KHÁM PHÁ MẸT BÒ TƠ SIÊU HOT DÀNH...</a>
                                    </h5>
                                </div>
                            </div> 
                        </div>

                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="news-thumb mb-lg-0 mb-lg-4 mb-2">
                                <a href="news-detail.html">
                                    <img src="https://botoquanmoc.com/images/news/2023/03/04/resized/78_1677900197.png" className="img-fluid news-image" alt=""/>
                                </a>
                                
                                <div className="news-text-info">
                                    <span className="category-tag">Mới</span>
                                    <strong> 04/03/23</strong>
                                    <h5 className="news-title mt-2">
                                        <a href="news-detail.html" className="news-title-link">THÀNH PHẦN DINH DƯỠNG</a>
                                    </h5>
                                </div>
                            </div> 
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="news-thumb mb-4">
                                <a href="news-detail.html">
                                    <img src="https://botoquanmoc.com/images/news/2023/01/11/resized/325072151_1354205105332398_6657784196248892336_n_1673403303.jpg" className="img-fluid news-image" alt=""/>
                                </a>
                                
                                <div className="news-text-info">
                                    <span className="category-tag me-3 bg-info">Khuyến mại</span>

                                    <strong>11/01/23</strong>

                                    <h5 className="news-title mt-2">
                                        <a href="news-detail.html" className="news-title-link">BÒ KHÔ MẮC KHÉN - QUÀ TẶNG ĐẶC BIỆT DỊP TẾT 2023</a>
                                    </h5>
                                </div>
                            </div> 
                        </div>

                    </div>
                </div>
            </section>

        </main>
        <div className="modal fade" id="BookingModal" tabindex="-1" aria-labelledby="BookingModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="mb-0">Reserve a table</h3>

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body d-flex flex-column justify-content-center">
                        <div className="booking">
                            
                            <form className="booking-form row" role="form" action="#" method="post">
                                <div className="col-lg-6 col-12">
                                    <label for="name" className="form-label">Full Name</label>

                                    <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" required/>
                                </div>

                                <div className="col-lg-6 col-12">
                                    <label for="email" className="form-label">Email Address</label>

                                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="your@email.com" required/>
                                </div>

                                <div className="col-lg-6 col-12">
                                    <label for="phone" className="form-label">Phone Number</label>

                                    <input type="telephone" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control" placeholder="123-456-7890"/>
                                </div>

                                <div className="col-lg-6 col-12">
                                    <label for="people" className="form-label">Number of persons</label>

                                    <input type="text" name="people" id="people" className="form-control" placeholder="12 persons"/>
                                </div>

                                <div className="col-lg-6 col-12">
                                    <label for="date" className="form-label">Date</label>

                                    <input type="date" name="date" id="date" value="" className="form-control"/>
                                </div>

                                <div className="col-lg-6 col-12">
                                    <label for="time" className="form-label">Time</label>

                                    <select className="form-select form-control" name="time" id="time">
                                      <option value="5" selected>5:00 PM</option>
                                      <option value="6">6:00 PM</option>
                                      <option value="7">7:00 PM</option>
                                      <option value="8">8:00 PM</option>
                                      <option value="9">9:00 PM</option>
                                    </select>
                                </div>

                                <div className="col-12">
                                    <label for="message" className="form-label">Special Request</label>

                                    <textarea className="form-control" rows="4" id="message" name="message" placeholder=""></textarea>
                                </div>

                                <div className="col-lg-4 col-12 ms-auto">
                                    <button type="submit" className="form-control">Submit Request</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="modal-footer"></div>
                    
                </div>
                
            </div>
        </div>
        </React.Fragment>
    );
}
export default Home;