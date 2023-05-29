import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useRef } from "react";
import Menu from "../../pages/Menu";
import { useSelector } from "react-redux";

function Header(props) {
    const { cart } = useSelector((state) => state.carts);

    const ref = useRef(null);
    const showModal = () => {
        const element = ref.current;
        element.style.display = 'block';
        element.style.background = 'rgb(0,0,0,0.3)';

    }
    const closeModal = () => {
        const element = ref.current;
        element.style.display = 'none';
    }

    return (
        <React.Fragment>
            <div className="navbar navbar-expand-lg bg-white shadow-lg">
                <div className="container">
                    {/* <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                    <NavLink className="navbar-brand nav-link" to="/">
                        <img src="https://botoquanmoc.com/images/config/logo_1559032387.png" />
                    </NavLink>

                    <div className="d-lg-none">
                        <button type="button" className="custom-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#BookingModal">Reservation</button>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    TRANG CHỦ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Story">
                                    GIỚI THIỆU</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Menu ">
                                    MENU</NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Blog">
                                    TIN TỨC</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Contact">
                                    LIÊN HỆ
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="nav-right  d-flex flex-row-reverse">
                        <button type="button" className="custom-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#BookingModal" onClick={showModal}>ĐẶT BÀN</button>
                        <div className="iconCart">
                        {cart.length === 0 ? "" :  <div className="countItem">
                             <span>{cart.length === 0 ? "" : cart.length} </span>
                    </div>}
                   
                        <NavLink className="my-auto" to="./Cartpage"><FontAwesomeIcon className="me-3 fs-4" icon={faCartShopping} style={{ color: "#000000" }} /></NavLink>
                        </div>
                 
                    </div>
                    <div className="modal fade show" id="BookingModal " ref={ref} tabindex="-1" aria-labelledby="BookingModal" aria-hidden="true" onClick={closeModal}>
                        <div className="modal-dialog modal-dialog-centered modal-xl">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3 className="mb-0">Reserve a table</h3>

                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                                </div>

                                <div className="modal-body d-flex flex-column justify-content-center">
                                    <div className="booking">

                                        <form className="booking-form row" role="form" action="#" method="post">
                                            <div className="col-lg-6 col-12">
                                                <label for="name" className="form-label">Full Name</label>

                                                <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" required />
                                            </div>

                                            <div className="col-lg-6 col-12">
                                                <label for="email" className="form-label">Email Address</label>

                                                <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="your@email.com" required />
                                            </div>

                                            <div className="col-lg-6 col-12">
                                                <label for="phone" className="form-label">Phone Number</label>

                                                <input type="telephone" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control" placeholder="123-456-7890" />
                                            </div>

                                            <div className="col-lg-6 col-12">
                                                <label for="people" className="form-label">Number of persons</label>

                                                <input type="text" name="people" id="people" className="form-control" placeholder="12 persons" />
                                            </div>

                                            <div className="col-lg-6 col-12">
                                                <label for="date" className="form-label">Date</label>

                                                <input type="date" name="date" id="date" value="" className="form-control" />
                                            </div>

                                            <div className="col-lg-6 col-12">
                                                <label for="time" className="form-label">Time</label>

                                                <select className="form-select form-control" name="time" id="time">
                                                    <option defaultValue={5}>5:00 PM</option>
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
                </div>
            </div>
        </React.Fragment>

    );
}
export default Header;
