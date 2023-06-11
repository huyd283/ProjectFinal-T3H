import React from "react";

export default function BlogDetail1(props) {
    return (
        <main>
        <header class="site-header site-news-detail-header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>BÒ KHÔ MẮC KHÉN - QUÀ TẶNG ĐẶC BIỆT DỊP TẾT 2023</h2>
                    </div>
                </div>
            </div>
        </header>

        <section class="news-detail section-padding pt-0">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-12">
                        <img src="https://botoquanmoc.com/upload_images/images/2023/01/11/DSC07845.jpg" class="img-fluid news-detail-image" alt="fine dining experience"/>

                        <div class="col-lg-10 col-10 mx-auto mt-5">
                            
                            <h4 class="mb-3">Tinh hoa Tây Bắc, món quà ý nghĩa dịp cuối năm dành tặng cho những người thân yêu đó chính là bò khô mắc khén thơm ngon được sản xuất độc quyền tại Bò Tơ Quán Mộc.</h4>

                            <p>Bò khô mắc khén là món ăn được các đầu bếp hàng đầu nhà Bò Tơ nghiên cứu, chế biến từ thịt bò tươi, cùng các gia vị, công thức độc quyền và cho ra đời miếng bò khô ngon, đậm vị. Với 3kg thịt bò tươi sẽ cho ra đời 1kg bò khô thành phẩm.</p>
                            <p>Đây quả thực là món ăn thích hợp là món ăn nhâm nhi, lai rai ngày Tết bên những câu chuyện đầu năm. Lưu ý: nếu ăn cùng với tương ớt và chút chanh vị ngon của bò khô sẽ được nhân đôi.</p>

                            {/* <div class="ratio ratio-16x9 my-5">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/6vebbDZxoKE?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div> */}
                            </div>
                    </div>
                    <div class="col-lg-12 col-12">
                        <img src="https://botoquanmoc.com/upload_images/images/2023/01/11/B%C3%B2-kh%C3%B4%20(2).jpg" class="img-fluid news-detail-image" alt="fine dining experience"/>

                        <div class="col-lg-10 col-10 mx-auto mt-5">
                            <p>Bò Tơ Quán Mộc đang áp dụng chương trình ưu đãi cực lớn dịp cuối năm, giảm giá cực mạnh cho các loại bò khô mắc khén, cụ thể như sau:</p>

                            <p>Bò khô mắc khén loại 1kg giảm giá từ 1200k => 950k</p>

                            <p>Bò khô mắc khén loại 0,5kg giảm giá từ 600k => 500k</p>

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

        {/* <section class="newsletter section-padding">
            <div class="container">
                <div class="row">

                    <div class="col-lg-6 col-12">
                        <img src="images/charles-deluvio-FdDkfYFHqe4-unsplash.jpg" class="img-fluid newsletter-image" alt=""/>
                    </div>

                    <div class="col-lg-6 col-12 d-flex align-items-center mt-5 mt-lg-0 mx-auto">
                        <div class="subscribe-form-wrap">
                            <h4 class="mb-0">Our Newsletter</h4>

                            <p>The food news every day</p>

                            <form class="custom-form subscribe-form mt-4" role="form">
                                <input type="email" name="subscribe-email" id="subscribe-email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Your email address" required=""/>

                                <button type="submit" class="form-control mb-3" id="subscribe">Subscribe</button>

                                <small>By signing up, you agree to our Privacy Notice and the data policy</small>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section> */}
    </main>  
    )
}
