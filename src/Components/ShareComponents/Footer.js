import React from "react";

function Footer (props) {
    return (
        <React.Fragment>
        
        <footer className="site-footer section-padding">
            
            <div className="container">
                
                <div className="row">

                    <div className="col-12">
                        <h4 className="text-white mb-4 me-5">Bò Tơ Quán Mộc</h4>
                    </div>

                    <div className="col-lg-4 col-md-7 col-xs-12 tooplate-mt30">
                        <h6 className="text-white mb-lg-4 mb-3">Địa điểm</h6>

                        <p>102 Thái Thịnh, Đống Đa, Hà Nội</p>

                        <a href="https://www.google.co.th/maps/place/102+P.+Th%C3%A1i+Th%E1%BB%8Bnh,+Th%E1%BB%8Bnh+Quang,+%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i,+Vietnam/@21.0082992,105.8178483,552m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3135ab7d51e06cc5:0xec5664bc38d39b34!8m2!3d21.0082992!4d105.8204232!16s%2Fg%2F11c5fnp8g2?hl=en" className="custom-btn btn btn-dark mt-2">Vị trí</a>
                    </div>

                    <div className="col-lg-4 col-md-5 col-xs-12 tooplate-mt30">
                        <h6 className="text-white mb-lg-4 mb-3">Giờ mở cửa</h6>

                        <p className="mb-2">Thứ 2 - Thứ 7</p>

                        <p>9:00 AM - 08:00 PM</p>

                        <p>Tel: <a href="tel: 010-02-0340" className="tel-link">010-02-0340</a></p>
                    </div>

                    <div className="col-lg-4 col-md-6 col-xs-12 tooplate-mt30">
                        <h6 className="text-white mb-lg-4 mb-3">Mạng xã hội</h6>

                        <ul className="social-icon">
                            <li><a href="#" className="social-icon-link bi-facebook"></a></li>

                            <li><a href="#" className="social-icon-link bi-instagram"></a></li>

                            <li><a href="https://twitter.com/search?q=tooplate.com&src=typed_query&f=live" target="_blank"
                            	 className="social-icon-link bi-twitter"></a></li>

                            <li><a href="#" className="social-icon-link bi-youtube"></a></li>
                        </ul>
                    
                        <p className="copyright-text tooplate-mt60">© Bò tơ quán mộc. All Right Reserved
                        </p>
                        
                    </div>

                </div>
                
             </div>
             
        </footer>
        </React.Fragment>

    );
}
export default Footer;
