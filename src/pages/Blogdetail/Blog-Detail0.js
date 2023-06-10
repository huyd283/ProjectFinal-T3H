import React from "react";

export default function BlogDetail1(props) {
    return (
        <main>
        <header class="site-header site-news-detail-header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>[HÀ NỘI], BÒ TƠ QUÁN MỘC VỪA CẬP NHẬT MENU MỚI HÈ 2023</h2>
                    </div>
                </div>
            </div>
        </header>

        <section class="news-detail section-padding pt-0">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-12">
                        <h4 class="mb-3">Đến hẹn lại lên, Bò Tơ Quán Mộc tiếp tục bổ sung vào menu của mình rất nhiều món ăn ngon, hấp dẫn dịp hè 2023 này để quý khách hàng có thêm phần lựa chọn. Các món ăn mới lần này sẽ là các món ăn từ thịt gà và thịt heo để giúp đa dạng menu nhà Bò Tơ hơn.</h4>

                        <div class="col-lg-10 col-10 mx-auto mt-5">

                        <h5 class="mb-5">Cụ thể các món mới lần này sẽ bao gồm:</h5>
                            <h6 className="ml-0">- Chả ốc Tây Hồ.</h6>
                            <img src="https://botoquanmoc.com/upload_images/images/2023/04/27/101-1%20-%20Copy.jpg" class="img-fluid news-detail-image" alt="fine dining experience"/>

                            <h6 className="ml-0">- Má heo trộn thính kiểu Thái.</h6>
                            <img src="https://botoquanmoc.com/upload_images/images/2023/04/27/%E1%BA%A2nh-2.jpg" class="img-fluid news-detail-image" alt="fine dining experience"/>
                            
                            <h6 className="ml-0">- Nộm sứa.</h6>
                            <img src="https://botoquanmoc.com/upload_images/images/2023/04/27/%E1%BA%A2nh-3.jpg" class="img-fluid news-detail-image" alt="fine dining experience"/>
                            
                            <h6 className="ml-0">- Chân gà xả tắc.</h6>
                            <img src="https://botoquanmoc.com/upload_images/images/2023/04/27/%E1%BA%A2nh-4.jpg" class="img-fluid news-detail-image" alt="fine dining experience"/>
                            
                            <h6 className="ml-0">- Chân gà chiên mắm.</h6>
                            <img src="https://botoquanmoc.com/upload_images/images/2023/04/27/%E1%BA%A3nh-5.jpg" class="img-fluid news-detail-image" alt="fine dining experience"/>
                            <p> Nghe tên các món ăn là đã thấy thật hấp dẫn rồi, mời quý khách hàng ghé Bò Tơ Quán Mộc để thưởng thức các món ăn mới này.</p>
                            </div>
                    </div>

                </div>
            </div>
        </section>

        <section class="comments section-padding">
            <div class="container">
                <div class="row">

                    <div class="col-12">
                        <h4 class="text-center mb-4">Bình luận</h4>
                    </div>

                    <div class="col-lg-7 col-12 mx-auto">
                        <form class="custom-form comment-form" action="#" method="get" role="form">
                            
                            <input type="text" name="comment-name" id="comment-name" class="form-control" placeholder="Your Name" required/>
                            
                            <input type="email" name="comment-email" id="comment-email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Your Email" required=""/>
                        
                            <textarea class="form-control" rows="5" id="comment" name="comment" placeholder="Nội dung" required></textarea>

                            <div class="col-lg-3 col-4 mx-auto">
                                <button type="submit" class="form-control" id="subscribe">Gửi</button>
                            </div>
                        </form>

                        <div class="news-author d-flex flex-wrap align-items-center">
                            <img src="images/author/alexander-hipp-iEEBWgY_6lA-unsplash.jpg" class="img-fluid news-author-image" alt=""/>

                            <div class="ms-4 w-50">
                                <p class="mb-2">Donec pharetra tellus nulla, aliquam elementum lorem hendrerit non.</p>
                                
                                <a href="#">David Martin</a>
                            </div>

                            <span class="ms-auto">14 hours ago</span>
                        </div>

                        <div class="news-author d-flex flex-wrap align-items-center">
                            <img src="images/author/shoeib-abolhassani-ojl7T2Ah93U-unsplash.jpg" class="img-fluid news-author-image" alt=""/>

                            <div class="ms-4 w-50">
                                <p class="mb-2">Quisque non libero ut mauris fermentum efficitur ac ut nibh.</p>
                                
                                <a href="#">Jessica Noel</a>
                            </div>

                            <span class="ms-auto">3 days ago</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section class="related-news section-padding bg-white">
            <div class="container">
                <div class="row">

                    <h2 class="text-center mb-lg-5 mb-4">Related News</h2>

                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="news-thumb mb-4">
                            <a href="news-detail.html">
                                <img src="https://botoquanmoc.com/images/news/2023/04/20/resized/bia-web_1681979603.png" class="img-fluid news-image" alt=""/>
                            </a>
                            
                            <div class="news-text-info">
                                <span class="category-tag me-3 bg-info">Promotions</span>

                                <strong>12 April 2022</strong>

                                <h5 class="news-title mt-2">
                                    <a href="news-detail.html" class="news-title-link">RỘN RÀNG KHAI TRƯƠNG, RINH NGAY ƯU ĐÃI 20% TOÀN BỘ MENU ĐỒ ĂN</a>
                                </h5>
                            </div>
                        </div> 
                    </div>

                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="news-thumb mb-4">
                            <a href="news-detail.html">
                                <img src="https://botoquanmoc.com/images/news/2023/04/19/resized/65393736_661120591021348_4470469688463196160_n_1681870833.jpg" class="img-fluid news-image" alt=""/>
                            </a>
                            
                            <div class="news-text-info">
                                <span class="category-tag me-3 bg-info">Career</span>

                                <strong>18 April 2022</strong>

                                <h5 class="news-title mt-2">
                                    <a href="news-detail.html" class="news-title-link">KHÁM PHÁ MẸT BÒ TƠ SIÊU HOT DÀNH CHO TEAM VĂN PHÒNG NHỮNG TRƯA HÈ OI Ả
</a>
                                </h5>
                            </div>
                        </div> 
                    </div>

                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="news-thumb mb-4">
                            <a href="news-detail.html">
                                <img src="https://botoquanmoc.com/images/news/2023/03/04/resized/78_1677900197.png" class="img-fluid news-image" alt=""/>
                            </a>
                            
                            <div class="news-text-info">
                                <span class="category-tag me-3 bg-info">Meeting</span>

                                <strong>30 April 2022</strong>

                                <h5 class="news-title mt-2">
                                    <a href="news-detail.html" class="news-title-link">THÀNH PHẦN DINH DƯỠNG TUYỆT VỜI TỪ THỊT BÒ MANG LẠI</a>
                                </h5>
                            </div>
                        </div> 
                    </div>

                </div>
            </div>
        </section>

    </main>  
    )
}
