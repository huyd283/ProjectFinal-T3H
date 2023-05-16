import React from "react";

function Header (props) {
    return (
        <React.Fragment>
            <div className="navbar navbar-expand-lg bg-white shadow-lg">
            <div className="container">
                {/* <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <a className="navbar-brand" href="index.html">
                <img src="https://botoquanmoc.com/images/config/logo_1559032387.png" />
                </a>

                <div className="d-lg-none">
                    <button type="button" className="custom-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#BookingModal">Reservation</button>
                </div>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="index.html">TRANG CHỦ</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="about.html">GIỚI THIỆU</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="menu.html">MENU</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="news.html">TIN TỨC</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">LIÊN HỆ</a>
                        </li>
                    </ul>
                </div>

                <div className="d-none d-lg-block">
                    <button type="button" className="custom-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#BookingModal">ĐẶT BÀN</button>
                </div>

            </div>
        </div>
        </React.Fragment>

    );
}
export default Header;
