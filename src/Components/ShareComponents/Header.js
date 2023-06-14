import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import ModalComponent from "../modal/ModalComponent";
import { useSelector } from "react-redux";
import { useRef } from "react";
import UserContext from "../context/UserContext";

function Header(props) {
  const {state,dispatch} = React.useContext(UserContext);
  // const { cart } = useSelector((state) => state.carts);

  const ref = useRef(null);


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
useEffect(()=>{
  console.log(state.cart.length)
},[])
  return (
    <React.Fragment>
      <div className="navbar navbar-expand-lg bg-white shadow-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="https://botoquanmoc.com/images/config/logo_1559032387.png" alt="Logo" />
          </a>

          

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">TRANG CHỦ</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">GIỚI THIỆU</NavLink>
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
            <div className="iconCart">
                         {state.cart.length === 0 ? "" :  <div className="countItem">
                             <span>{state.cart.length} </span>
                        </div>} 
                   
                        <NavLink className="my-auto" to="./Cartpage"><FontAwesomeIcon className="me-3 fs-4" icon={faCartShopping} style={{ color: "#000000" }} /></NavLink>
                        </div>
            
            {/* <NavLink className="my-auto" to="./Cartpage">
              <FontAwesomeIcon className="me-3 fs-4" icon={faCartShopping} style={{ color: "#000000" }} />
            </NavLink> */}
          </div>
        </div>
      </div>

      <ModalComponent isOpen={isModalOpen} onClose={closeModal} />
    </React.Fragment>
  );
}

export default Header;