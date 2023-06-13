import React from 'react';
import { NavLink } from 'react-router-dom';
import './body.css';
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
                                        <div className="wrapper ">
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
                                        <div className="wrapper ">
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

            
            
            <section class="our-menu section bg-light repeat-img" id="menu">
                <div class="sec-wp">
                    <div class="container">
                    <section className="about-sec section" id="about">
                        <div className="row">
                            <div className="">
                                <div className="sec-title text-center mb-5">
                                <h2 className="h2-title">Restaurant story</h2>
                                    <div className="sec-title-shape mb-4">
                                        <img src="images/product/title-shape.svg" alt=""/>
                                    </div>
                                    <div className="content">
                                    <p>
                                        Cơ sở Bò Tơ Quán Mộc đầu tiên được mở tại biệt thự số 102 Thái Thịnh. Giữa khung cảnh phố xá ồn ã, tòa biệt thự như một lát cắt độc đáo về lối sống của người Hà Nội thủa trước. Nằm giữa sự xô bồ, hoa lệ, hiện đại, ngôi biệt thự vẫn giữ được vẻ đẹp riêng biệt nhưng không hề lạc lõng, giống như một cầu nối giữa hiện tại và quá khứ, khiến thực khách ghé thăm đều lưu luyến mãi không thôi. Trải qua hơn 1 năm hoạt động, nhận được nhiều sự yêu quý của khách hàng, Bò Tơ Quán Mộc đã tiếp tục mở cơ sở mới tại D17 ngõ 76 Nguyễn Phong Sắc, đem không gian phố Xưa đến với nhiều thực khách hơn tại Hà Nội.</p>
                                    </div>
                                
                                        <div className="about-video-img" style={{backgroundImage:'url("images/news/priscilla-du-preez-W3SEyZODn8U-unsplash.jpg")'}} >
                                    </div >
                                    </div>
                        </div>
                    </div>
                    
              
                    </section>
                   
                    
                       
                    </div>
                </div>
            </section>
            <section className="about-sec section" id="about">
                <div className='container'>
                <div className="row">
                            <div className="">
                                <div className="sec-title text-center mb-5">
                                <h2 className="h2-title">Restaurant Menu</h2>
                                    <div className="sec-title-shape mb-4">
                                        <img src="images/product/title-shape.svg" alt=""/>
                                    </div>
                                    <div class="reviews-stars">
                                    <i class="bi-star-fill reviews-icon"></i>
                                    <i class="bi-star-fill reviews-icon"></i>
                                    <i class="bi-star-fill reviews-icon"></i>
                                    <i class="bi-star-fill reviews-icon"></i>
                                    <i class="bi-star reviews-icon"></i>
                                </div>


                                
                                     <div class="menu-list-row">
                                    <div class="row g-xxl-5 bydefault_show" id="menu-dish">
                                        <div class="col-lg-4 col-sm-6 dish-box-wp breakfast" data-cat="breakfast">
                                            <div class="dish-box text-center">
                                                <div class="dist-img">
                                                    <img src="images/product/bbq.jpg" alt=""/>
                                                </div>
                                                <div class="dish-rating">
                                                    5
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                </div>
                                                <div class="dish-title">
                                                    <h3 class="h3-title">Sườn Bò Nướng Sốt BBQ</h3>
                                                    <p>23 Đánh Giá Món Ăn</p>
                                                </div>
                                                <div class="dish-info">
                                                    <ul>
                                                        <li>
                                                            <p>Sale</p>
                                                            <b>Thành Tiền</b>
                                                        </li>
                                                        <li>
                                                            <p>Upto 30%</p>
                                                            <b>560000.vnd</b>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="dist-bottom-row">
                                                    <ul>
                                                        
                                                        <li>
                                                          
                                                            <NavLink className="nav-link " to="/Menu">   <button class="dish-add-btn"> Check our Menu</button></NavLink>
                                                            
                                                                </li>
                                                        <li>
                                                        
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-sm-6 dish-box-wp breakfast" data-cat="breakfast">
                                            <div class="dish-box text-center">
                                                <div class="dist-img">
                                                    <img src="images/product/bbq6.jpg" alt=""/>
                                                </div>
                                                <div class="dish-rating">
                                                    5
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                </div>
                                                <div class="dish-title">
                                                    <h3 class="h3-title">Combo Bò Wagyu Đặc Biệt</h3>
                                                    <p>38 Đánh Giá Món Ăn</p>
                                                </div>
                                                <div class="dish-info">
                                                    <ul>
                                                        <li>
                                                            <p>Sale</p>
                                                            <b>Thành Tiền</b>
                                                        </li>
                                                        <li>
                                                            <p>Upto 30%</p>
                                                            <b>750000.vnd</b>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="dist-bottom-row">
                                                    <ul>
                                                        
                                                        <li>
                                                          
                                                            <NavLink className="nav-link " to="/Menu">   <button class="dish-add-btn"> Check our Menu</button></NavLink>
                                                            
                                                                </li>
                                                        <li>
                                                        
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-sm-6 dish-box-wp breakfast" data-cat="breakfast">
                                            <div class="dish-box text-center">
                                                <div class="dist-img">
                                                    <img src="images/product/bbq4.jpg" alt=""/>
                                                </div>
                                                <div class="dish-rating">
                                                    5
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                </div>
                                                <div class="dish-title">
                                                    <h3 class="h3-title">Bò Bít Tết (Beef Steak)</h3>
                                                    <p>90 Đánh Giá Món Ăn</p>
                                                </div>
                                                <div class="dish-info">
                                                    <ul>
                                                        <li>
                                                            <p>Sale</p>
                                                            <b>Thành Tiền</b>
                                                        </li>
                                                        <li>
                                                            <p>Upto 30%</p>
                                                            <b>470000.vnd</b>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="dist-bottom-row">
                                                    <ul>
                                                        
                                                        <li>
                                                          
                                                            <NavLink className="nav-link " to="/Menu">   <button class="dish-add-btn"> Check our Menu</button></NavLink>
                                                            
                                                                </li>
                                                        <li>
                                                        
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-sm-6 dish-box-wp breakfast" data-cat="breakfast">
                                            <div class="dish-box text-center">
                                                <div class="dist-img">
                                                    <img src="images/product/bbq3.jpg" alt=""/>
                                                </div>
                                                <div class="dish-rating">
                                                    5
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                </div>
                                                <div class="dish-title">
                                                    <h3 class="h3-title">Steak Thăn Bò (450Gr)</h3>
                                                    <p>78 Đánh Giá Món Ăn</p>
                                                </div>
                                                <div class="dish-info">
                                                    <ul>
                                                        <li>
                                                            <p>Sale</p>
                                                            <b>Thành Tiền</b>
                                                        </li>
                                                        <li>
                                                            <p>Upto 30%</p>
                                                            <b>550000.vnd</b>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="dist-bottom-row">
                                                    <ul>
                                                        
                                                        <li>
                                                          
                                                            <NavLink className="nav-link " to="/Menu">   <button class="dish-add-btn"> Check our Menu</button></NavLink>
                                                            
                                                                </li>
                                                        <li>
                                                        
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-sm-6 dish-box-wp breakfast" data-cat="breakfast">
                                            <div class="dish-box text-center">
                                                <div class="dist-img">
                                                    <img src="images/product/bbq2.jpg" alt=""/>
                                                </div>
                                                <div class="dish-rating">
                                                    5
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                </div>
                                                <div class="dish-title">
                                                    <h3 class="h3-title">Thăn Bò Nướng Đá Núi Lửa</h3>
                                                    <p>90 Đánh Giá Món Ăn</p>
                                                </div>
                                                <div class="dish-info">
                                                    <ul>
                                                        <li>
                                                            <p>Sale</p>
                                                            <b>Thành Tiền</b>
                                                        </li>
                                                        <li>
                                                            <p>Upto 30%</p>
                                                            <b>380000.vnd</b>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="dist-bottom-row">
                                                    <ul>
                                                        
                                                        <li>
                                                          
                                                            <NavLink className="nav-link " to="/Menu">   <button class="dish-add-btn"> Check our Menu</button></NavLink>
                                                            
                                                                </li>
                                                        <li>
                                                        
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-sm-6 dish-box-wp breakfast" data-cat="breakfast">
                                            <div class="dish-box text-center">
                                                <div class="dist-img">
                                                    <img src="images/product/bbq6.jpg" alt=""/>
                                                </div>
                                                <div class="dish-rating">
                                                    5
                                                    <i className="bi-star-fill reviews-icon"></i>
                                                </div>
                                                <div class="dish-title">
                                                    <h3 class="h3-title">Bò Áp Chảo Macau</h3>
                                                    <p>23 Đánh Giá Món Ăn</p>
                                                </div>
                                                <div class="dish-info">
                                                    <ul>
                                                        <li>
                                                            <p>Sale</p>
                                                            <b>Thành Tiền</b>
                                                        </li>
                                                        <li>
                                                            <p>Upto 30%</p>
                                                            <b>560000.vnd</b>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="dist-bottom-row">
                                                    <ul>
                                                        
                                                        <li>
                                                          
                                                            <NavLink className="nav-link " to="/Menu">   <button class="dish-add-btn"> Check our Menu</button></NavLink>
                                                            
                                                                </li>
                                                        <li>
                                                        
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    
                                       
                                    </div>
                                    </div> 
                            </div>
                        </div>
                    </div>
                    
                </div>
                       
              
            </section>

            {/* say */}
            <section className="about-sec section" id="about">
                        <div className="row">
                            <div className="">
                                <div className="sec-title text-center mb-5">
                               
                                    <h2 class="h2-title" > "Đầu Bếp Danh Tiếng" <span>Masterchef</span></h2>
                               
                                    <div className="sec-title-shape mb-4">
                                        <img src="images/product/title-shape.svg" alt=""/>
                                    </div>

                                
                                    
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                    <div class="row">
                            <div class="col-lg-5">
                                <div class="testimonials-img">
                                    <img src="images/product/testimonial-img.png" alt=""/>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="testimonials-box">
                                            <div class="testimonial-box-top">
                                                  <div class="testimonials-box-img back-img" style={{backgroundImage:'url("images/product/testimonials/t1.jpg")'}}>
                                                  
                                                </div> 
                                                <div class="reviews-stars">
                                    <i class="bi-star-fill reviews-icon"></i>
                                    <i class="bi-star-fill reviews-icon"></i>
                                    <i class="bi-star-fill reviews-icon"></i>
                                    <i class="bi-star-fill reviews-icon"></i>
                                    <i class="bi-star reviews-icon"></i>
                                </div>
                                               

                                            </div>
                                            <div class="testimonials-box-text">
                                                <h3 class="h3-title">
                                                    Nilay Hirpara
                                                </h3>
                                                <h4>Quốc Tịch : France</h4>
                                                <p>Chuyên Gia món Âu.</p>
                                            </div>
                                        </div>
                                    </div>
                                     <div class="col-sm-6">
                                        <div class="testimonials-box">
                                            <div class="testimonial-box-top">
                                            <div class="testimonials-box-img back-img" style={{backgroundImage:'url("images/product/testimonials/t2.jpg")'}}>
                                                  
                                                  </div>
                                                  <div class="reviews-stars">
                                    <i class="bi-star-fill reviews-icon"></i>
                                    <i class="bi-star-fill reviews-icon"></i>
                                    <i class="bi-star-fill reviews-icon"></i>
                                    <i class="bi-star-fill reviews-icon"></i>
                                    <i class="bi-star reviews-icon"></i>
                                </div>

                                            </div>
                                            <div class="testimonials-box-text">
                                                <h3 class="h3-title">
                                                    Tùng Lâm
                                                </h3>
                                                <h4>Quốc Tịch :Việt Nam</h4>
                                                <p>Món Việt Nam Truyền Thống</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="testimonials-box">
                                            <div class="testimonial-box-top">
                                            <div class="testimonials-box-img back-img" style={{backgroundImage:'url("images/product/testimonials/t3.jpg")'}}>
                                                  
                                                  </div>
                                                  <div class="reviews-stars">
                                    <i class="bi-star-fill reviews-icon"></i>
                                    <i class="bi-star-fill reviews-icon"></i>
                                    <i class="bi-star-fill reviews-icon"></i>
                                    <i class="bi-star-fill reviews-icon"></i>
                                    <i class="bi-star reviews-icon"></i>
                                </div>
                                                

                                            </div>
                                            <div class="testimonials-box-text">
                                                <h3 class="h3-title">
                                                    Navnit Kumar
                                                </h3><h4>Quốc Tịch : Thái Lan</h4>
                                                <p>Chuyên Gia Ẩm Thực Thái Lan</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="testimonials-box">
                                            <div class="testimonial-box-top">
                                            <div class="testimonials-box-img back-img" style={{backgroundImage:'url("images/product/testimonials/t4.jpg")'}}>
                                                  
                                                  </div>
                                                  <div class="reviews-stars">
                                    <i class="bi-star-fill reviews-icon"></i>
                                    <i class="bi-star-fill reviews-icon"></i>
                                    <i class="bi-star-fill reviews-icon"></i>
                                    <i class="bi-star-fill reviews-icon"></i>
                                    <i class="bi-star reviews-icon"></i>
                                </div>
                                                

                                            </div>
                                            <div class="testimonials-box-text">
                                                <h3 class="h3-title">
                                                    Davis Nguyễn
                                                </h3>
                                                <h4>Quốc Tịch : Trung Quốc</h4>
                                                <p>Chuyên Ẩm Thực Trung Hoa</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
              
            </section>
            
            {/* gbimage */}
            <section className="BgImage">
            
            </section>
            
            {/* tin tức */}
            <section className="news section-padding">
                <div className="container">
                    <div className="row">

                        <h2 className="text-center mb-lg-5 mb-4">Tin tức &amp; Sự kiện</h2>

                       
                <section class="blog-sec section" id="blog">
                    <div class="sec-wp">
                        <div class="container">
                          
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="blog-box">
                                        <div class="blog-img back-img"
                                             style={{backgroundImage:'url("https://botoquanmoc.com/images/news/2023/04/27/large/343658403_959895225355526_2705148923649967748_n_1682583011.jpg")'}}></div>
                                        <div class="blog-text">
                                            <p class="blog-date">June.15.2023</p>
                                            <a href="#" class="h4-title">[HÀ NỘI], BÒ TƠ QUÁN MỘC CẬP NHẬP MENU MỚI HÈ 2023</a>
                                            <p>Đến hẹn lại lên, Bò Tơ Quán Mộc tiếp tục bổ sung vào menu của mình rất nhiều món ăn ngon, hấp dẫn dịp hè 2023 này để quý khách hàng có thêm phần lựa chọn. Các món ăn mới lần này sẽ là các món ăn từ thịt gà và thịt heo để giúp đa dạng menu nhà Bò Tơ hơn.</p>
                                            <a  class="sec-btn"> <NavLink to="/blogdetail0">  
                                            Read More
                                </NavLink></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="blog-box">
                                        <div class="blog-img back-img"
                                            style={{backgroundImage:'url("https://botoquanmoc.com/images/news/2023/04/20/resized/bia-web_1681979603.png")'}}></div>
                                        <div class="blog-text">
                                            <p class="blog-date">June.15.2023</p>
                                            <a href="#" class="h4-title">RỘN RÀNG KHAI TRƯƠNG, RINH NGAY ƯU ĐÃI 20% TOÀN BỘ MENU ĐỒ ĂN</a>
                                            <p>Buổi lễ khai trương diễn ra thành công tốt đẹp nhờ có sự ủng hộ nhiệt tình của quý thực khách gần xa. Thay lời cảm ơn chân thành nhất, Bò Tơ Quán Mộc dành tặng ưu đãi 20% toàn bộ menu đồ ăn. Ngoải ra, những món quà xinh xắn được Bò Tơ chuẩn bị còn được gửi đến tay quý khách thay lời yêu thương vì sự ủng hộ của tất cả mọi người dành cho Bò Tơ Quán Mộc Sài Gòn.</p>
                                                <a class="sec-btn"> <NavLink to="/blogdetail0">  
                                            Read More
                                </NavLink></a>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                        
                        <div class="row">
                                <div class="col-lg-4">
                                            <div class="blog-box">
                                                <div class="blog-img back-img"
                                                    style={{backgroundImage:'url("https://botoquanmoc.com/images/news/2023/04/19/resized/65393736_661120591021348_4470469688463196160_n_1681870833.jpg")'}}></div>
                                                <div class="blog-text">
                                                    <p class="blog-date">June.15.2023</p>
                                                    <a href="#" class="h4-title">KHÁM PHÁ MẸT BÒ TƠ SIÊU HOT DÀNH CHO TEAM VĂN PHÒNG NHỮNG TRƯA HÈ OI Ả</a>
                                                    <p>GIẢM GIÁ 50% 195K chỉ còn 98K
Mẹt bò tơ cuốn bánh tráng của nhà Bò Tơ Quán Mộc có gì ngon mà nhiều người “nghiền” đến thế???</p>
                                                    <a  class="sec-btn"> <NavLink to="/blogdetail0">  
                                                    Read More
                                        </NavLink></a>
                                                </div>
                                            </div>
                                </div>
                                <div class="col-lg-4">
                                            <div class="blog-box">
                                                <div class="blog-img back-img"
                                                    style={{backgroundImage:'url(https://botoquanmoc.com/images/news/2023/03/04/resized/78_1677900197.png)'}}></div>
                                                <div class="blog-text">
                                                    <p class="blog-date">June.15.2023</p>
                                                    <a href="#" class="h4-title">THÀNH PHẦN DINH DƯỠNG TUYỆT VỜI TỪ THỊT BÒ MANG LẠI</a>
                                                    <p>Cùng Bò Tơ Quán Mộc điểm danh các thành phần dinh dưỡng tuyệt vời có trong thịt bò bên dưới bài viết cả nhà nhé</p>
                                                    <a  class="sec-btn"> <NavLink to="/blogdetail0">  
                                                    Read More
                                        </NavLink></a>
                                                </div>
                                            </div>
                                </div>
                                <div class="col-lg-4">
                                            <div class="blog-box">
                                                <div class="blog-img back-img"
                                                    style={{backgroundImage:'url("https://botoquanmoc.com/images/news/2023/01/11/resized/325072151_1354205105332398_6657784196248892336_n_1673403303.jpg")'}}></div>
                                                <div class="blog-text">
                                                    <p class="blog-date">June.15.2023</p>
                                                    <a href="#" class="h4-title">​ BÒ KHÔ MẮC KHÉN - QUÀ TẶNG ĐẶC BIỆT DỊP TẾT 2023</a>
                                                    <p>Tinh hoa Tây Bắc, món quà ý nghĩa dịp cuối năm dành tặng cho những người thân yêu đó chính là bò khô mắc khén thơm ngon được sản xuất độc quyền tại Bò Tơ Quán Mộc.</p>
                                                    <a  class="sec-btn"> <NavLink to="/blogdetail0">  
                                                    Read More
                                        </NavLink></a>
                                                </div>
                                            </div>
                                </div>
                        </div>
                    </div>
                </section>

               
           



                     

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