import React from "react";
import'./about.css';
import { NavLink } from "react-router-dom";

export default class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <header className="site-header site-news-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-12 mx-auto">
                <h1 className="text-white">Bò Tơ Quán Mộc</h1>
                <strong className="text-white">Vẻ Đẹp Phố Xưa Hà Nội</strong>
              </div>
            </div>
          </div>
          <div className="overlay"></div>
        </header> */}

        <section className="main-banner" id="home">
                <div className="js-parallax-scene">
                    <div className="banner-shape-1 w-100" data-depth="0.30">
                        <img src="assets/images/berry.png" alt=""/>
                    </div>
                    <div className="banner-shape-2 w-100" data-depth="0.25">
                        <img src="assets/images/leaf.png" alt=""/>
                    </div>
                </div>
                <div className="sec-wp">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-text">
                                    <h1 className="h1-title">
                                    BÒ TƠ QUÁN MỘC
                                       
                                    </h1>
                                    <p> Bò Tơ Quán Mộc - Nhà hàng phong cách phố Xưa Hà Nội! Một điểm đến nhuốm đậm màu thời gian, dẫu có chút hoài cổ nhưng luôn mang lại cảm giác bình yên, ấm cúng cho bất cứ ai. Đây là địa điểm lý tưởng để bạn thưởng thức bữa tiệc gặp mặt gia đình hay hội họp cùng bạn bè rôm rả.</p>
                                    <div className="banner-btn mt-4">
                                        <NavLink className="nav-link sec-btn" to="/Menu">Check our Menu</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner-img-wp">
                                    <div className="banner-img"  style={{backgroundImage:'url("images/product/bbq.jpg")'}} >
                                    
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <section className="about-sec section" id="about">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <div className="sec-title text-center mb-5">
                              <h2 className="h2-title">KHÔNG GIAN PHỐ XƯA HÀ NỘI <span>restaurant story</span></h2>
                                <div className="sec-title-shape mb-4">
                                    <img src="images/product/title-shape.svg" alt=""/>
                                </div>
                                <div >
                                      <p >
                                            Đã từ lâu, người ta đã không còn nhớ được rằng, nhắc đến Bò tơ quán mộc là nhớ đến Hà Nội xưa, hay nghĩ đến không gian phố xưa Hà Nội là nhớ đến Bò tơ quán mộc. Tọa lạc tại những con phố sầm uất và đông đúc người qua lại, chuỗi nhà hàng Bò tơ quán mộc trong mắt người Hà thành đã sớm trở thành địa điểm hiếm hoi, thân thuộc còn lưu giữ được vẻ đẹp thuần túy, bình yên và truyền thống.
                                    </p>
                                </div>
                                    
                                     <div className="about-video-img" style={{backgroundImage:'url("https://botoquanmoc.com/upload_images/images/2019/06/27/51874720_579608439172564_4629655259650719744_o.jpg")'}} >
                                    </div>
                                <div  className="content">
                                    <p>
                                    Đưa thực khách ngược dòng thời gian về với Hà Nội của 40 năm về trước, Bò Tơ Quán Mộc mở ra một không gian kiến trúc ấn tượng, vừa lạ vừa quen với những khung cảnh xưa cũ, giản dị, đạm bạc nhưng dịu dàng, ấm áp. Thực khách đến đây không chỉ để trải nghiệm ẩm thực mà còn để trải nghiệm một không gian gợi nhiều ký ức ấu thơ, đong đầy cảm xúc, gần gũi như chính ngôi nhà của mình. Mỗi một khung cửa gỗ, chiếc bàn, cái ghế, thậm chí là rèm cửa, chạn bát đều ẩn dấu hình bóng một Hà Nội thập niên 80 - thời điểm khốn khó, vất vả nhưng lại chan chứa tình người và tiếng cười vô tư của những đứa trẻ.</p>
                                </div>
                                     
                                   
                        </div>
                        </div>
                    </div>
                    
                </div>
        </section>
        <section className="about-sec section" id="about">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <div className="sec-title text-center mb-5">
                              <h2 className="h2-title">ĐƯA MỌI NGƯỜI LẠI GẦN NHAU HƠN <span>restaurant story</span></h2>
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
                    
                </div>
        </section>

        <section class="two-col-sec section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5">
                            <div class="sec-img mt-5">
                                <img src="images/news/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg" alt=""/>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="sec-text">
                                <h2 class="xxl-title">MÓN ĂN NGON</h2>
                                <p>Khách hàng yêu thích Bò Tơ Quán Mộc phần nhiều cũng vì món ăn ngon. Giống như tên gọi, chúng tôi chọn nguyên liệu là bò tơ – món ăn được xem là đặc sản vùng sông nước, từng tạo nên cơn sốt "bò tơ Tây Ninh" một thời ở Hà thành. Nhưng trải qua năm tháng, món ăn này của Bò Tơ Quán Mộc đã trở thành món ngon độc đáo mang phong vị riêng biệt của vùng Đông Kinh – Bắc Thành tự khi nào.

Bò tơ – thứ thực phẩm có bao nhiêu thân quen với cuộc sống thường ngày, chỉ gọi tên thôi cũng thấy gần gũi, giản đơn, lại không kém phần mộc mạc, chân chất. Dẫu quen thuộc là thế, nhưng trải qua bàn tay của những vị đầu bếp chuyên nghiệp, thực đơn của nhà hàng Bò Tơ Quán Mộc lại luôn khiến thực khách phải bất ngờ và háo hức khi thưởng thức.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="two-col-sec section pt-0">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 order-lg-1 order-2">
                            <div class="sec-text">
                                <h2 class="xxl-title">Chất lượng</h2>
                              
                                <p>Nguyên liệu bò tơ được lựa chọn đúng theo tiêu chí TƯƠI – SẠCH – NGON để đảm bảo món ăn tròn vị, giữ được sự tươi ngon đặc trưng của thịt. Cùng với đó, các món ăn được chế biến theo công thức riêng biệt, có phần tinh tế và cầu kỳ. Ngay cả việc nêm nếm, gia giảm gia vị cũng phải được làm một cách bài bản, chăm chút, chỉ để mong mang đến được hương vị vẹn nguyên, phảng phất dáng vẻ thanh cao của chốn Hà thành.

                              Ngồi giữa khung cảnh phố Xưa Hà Nội, ngắm dòng người tất bật qua khung cửa sổ gỗ xanh, thư giãn trong không gian ấm cúng như nhà mình, rồi nếm thử một miếng bò tơ chín mềm nóng hổi, thực khách sẽ cảm thấy cả miền ký ức Hà Nội thập niên 80 chợt thu bé lại, mênh mang và đầy thương!
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6 order-lg-2 order-1">
                            <div class="sec-img">
                            <img src="images/product/hot1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

       
        </React.Fragment>
    );
  }
}



