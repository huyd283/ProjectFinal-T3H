import React from "react";
import { NavLink } from "react-router-dom";

function Blog(props) {
    return(
    <React.Fragment>
    <main>
        <header class="site-header site-news-header">
            <div class="container">
                <div class="row">

                    <div class="col-lg-10 col-12 mx-auto">
                        <h1 class="text-white">Tin Tức &amp; Sự Kiện</h1>

                        <strong class="text-white">tin tức, sự kiện và chương trình khuyến mãi đặc biệt</strong>
                    </div>

                </div>
            </div>

            <div class="overlay"></div>
        </header>

        <section class="news section-padding bg-white">
            <div class="container">
                <div class="row">

                    <h2 class="mb-lg-5 mb-4">Tin mới nhất</h2>
                    
                    <div class="col-lg-6 col-md-6 col-12">
                        <div class="news-thumb mb-4">
                            <NavLink to="/BlogDetail0">
                                <img src="https://botoquanmoc.com/images/news/2023/04/27/large/343658403_959895225355526_2705148923649967748_n_1682583011.jpg" class="img-fluid news-image" alt=""/>
                            </NavLink>
                            
                            <div class="news-text-info news-text-info-large">
                                <span class="category-tag bg-danger">Nổi bật</span>

                                <h5 class="news-title mt-2">
                                    <a href="news-detail.html" class="news-title-link">[HÀ NỘI], BÒ TƠ QUÁN MỘC VỪA CẬP NHẬT MENU MỚI HÈ 2023</a>
                                </h5>
                            </div>
                        </div> 
                    </div>

                    <div class="col-lg-6 col-md-6 col-12">
                        <div class="news-thumb mb-4">
                            <a href="news-detail.html">
                                <img src="https://botoquanmoc.com/images/news/2023/04/19/resized/65393736_661120591021348_4470469688463196160_n_1681870833.jpg" class="img-fluid news-image" alt=""/>
                            </a>
                            
                            <div class="news-text-info news-text-info-large">
                                <span class="category-tag bg-danger">Nổi bật</span>

                                <h5 class="news-title mt-2">
                                    <a href="news-detail.html" class="news-title-link">KHÁM PHÁ MẸT BÒ TƠ...</a>
                                </h5>
                            </div>
                        </div> 
                    </div>

                </div>
            </div>
        </section>

        <section class="news section-padding">
            <div class="container">
                <div class="row">

                    <div class="col-12">
                        <h2 class="mb-lg-5 mb-4">Tin Tức &amp; Sự Kiện</h2>
                    </div>

                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="news-thumb mb-4">
                            <NavLink to="/blogdetail1">
                                <img src="https://botoquanmoc.com/images/news/2023/01/11/resized/325072151_1354205105332398_6657784196248892336_n_1673403303.jpg" class="img-fluid news-image" alt=""/>
                            </NavLink>
                            
                            <div class="news-text-info">
                                <span class="category-tag me-3 bg-info">Khuyến mãi</span>

                                <strong>11/01/2023</strong>

                                <h5 class="news-title mt-2">
                                    <a href="news-detail.html" class="news-title-link">BÒ KHÔ MẮC KHÉN QUÀ TẶNG ĐẶC BIỆT...</a>
                                </h5>
                            </div>
                        </div> 
                    </div>

                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="news-thumb mb-4">
                            <a href="news-detail.html">
                                <img src="https://botoquanmoc.com/images/news/2023/01/06/resized/93-2_1672994325.jpg" class="img-fluid news-image" alt=""/>
                            </a>
                            
                            <div class="news-text-info">
                                <span class="category-tag me-3 bg-info">Mới</span>

                                <strong>06/01/2023</strong>

                                <h5 class="news-title mt-2">
                                    <a href="news-detail.html" class="news-title-link">TIN VUI TIN VUI! BÒ TƠ SÀI GÒN CHÍNH THỨC...</a>
                                </h5>
                            </div>
                        </div> 
                    </div>

                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="news-thumb mb-4">
                            <a href="news-detail.html">
                                <img src="https://botoquanmoc.com/images/news/2023/01/03/resized/loi-chuc-tet-2023-nhung-loi-chuc-mung-nam-moi-2023-hay-va-y-nghia-20221215205550_1672719317.jpg" class="img-fluid news-image" alt=""/>
                            </a>
                            
                            <div class="news-text-info">
                                {/* <span class="category-tag me-3 bg-info">Meeting</span> */}

                                <strong>03/01/2023</strong>

                                <h5 class="news-title mt-2">
                                    <a href="news-detail.html" class="news-title-link">BÒ TƠ QUÁN MỘC CHÚC MỪNG NĂM MỚI 2023</a>
                                </h5>
                            </div>
                        </div> 
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="news-thumb mb-4">
                            <a href="news-detail.html">
                                <img src="https://botoquanmoc.com/images/news/2022/12/31/resized/bia-web_1672474004.png" class="img-fluid news-image" alt=""/>
                            </a>
                            
                            <div class="news-text-info">
                                <span class="category-tag me-3 bg-info">Tin tức</span>

                                <strong>31/12/2022</strong>

                                <h5 class="news-title mt-2">
                                    <a href="news-detail.html" class="news-title-link">VÌ SAO MÓN ĂN CHẾ BIẾN BẰNG PHƯƠNG PHÁP HẤP...</a>
                                </h5>
                            </div>
                        </div> 
                    </div>
                    

                </div>
            </div>
        </section>
    </main>
    </React.Fragment>
    )
}
export default Blog;