import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import ModalComponent from "../modal/ModalComponent";

function Header(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <React.Fragment>
      <div className="navbar navbar-expand-lg bg-white shadow-lg">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src="https://botoquanmoc.com/images/config/logo_1559032387.png" alt="Logo" />
          </a>

          <div className="d-lg-none">
            <button type="button" className="custom-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#BookingModal">Reservation</button>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">TRANG CHỦ</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">GIỚI THIỆU</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Menu">MENU</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Blog">TIN TỨC</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">LIÊN HỆ</NavLink>
              </li>
            </ul>
          </div>

          <div className="d-flex flex-row-reverse">
            <button type="button" className="custom-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#BookingModal" onClick={openModal}>ĐẶT BÀN</button>
            <NavLink className="my-auto" to="./Cartpage">
              <FontAwesomeIcon className="me-3 fs-4" icon={faCartShopping} style={{ color: "#000000" }} />
            </NavLink>
          </div>
        </div>
      </div>

      <ModalComponent isOpen={isModalOpen} onClose={closeModal} />
    </React.Fragment>
  );
}

export default Header;
