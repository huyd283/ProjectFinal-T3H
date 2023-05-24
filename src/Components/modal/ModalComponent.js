import React from "react";

function ModalComponent({ isOpen, onClose }) {
  return (
    <div
      className={`modal fade ${isOpen ? "show" : ""}`}
      id="BookingModal"
      tabIndex="-1"
      aria-labelledby="BookingModal"
      aria-hidden={!isOpen}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="mb-0">Đặt Bàn</h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body d-flex flex-column justify-content-center">
            <div className="booking">
                <form className="booking-form row" role="form" action="#" method="post">
                  <div className="col-lg-6 col-12">
                    <label htmlFor="name" className="form-label">Họ và tên</label>
                    <input type="text" name="name" id="name" className="form-control" placeholder="Họ và tên" required/>
                  </div>

                  <div className="col-lg-6 col-12">
                    <label htmlFor="email" className="form-label">Địa chỉ Email</label>
                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="email@example.com" required/>
                  </div>

                  <div className="col-lg-6 col-12">
                    <label htmlFor="phone" className="form-label">Số điện thoại</label>
                    <input type="tel" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control" placeholder="123-456-7890"/>
                  </div>

                  <div className="col-lg-6 col-12">
                    <label htmlFor="people" className="form-label">Số người</label>
                    <input type="text" name="people" id="people" className="form-control" placeholder="Số người"/>
                  </div>

                  <div className="col-lg-6 col-12">
                    <label htmlFor="date" className="form-label">Ngày</label>
                    <input type="date" name="date" id="date" value="" className="form-control"/>
                  </div>

                  <div className="col-lg-6 col-12">
                    <label htmlFor="time" className="form-label">Giờ</label>
                    <select className="form-select form-control" name="time" id="time">
                      <option value="5" selected>5:00 PM</option>
                      <option value="6">6:00 PM</option>
                      <option value="7">7:00 PM</option>
                      <option value="8">8:00 PM</option>
                      <option value="9">9:00 PM</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label htmlFor="message" className="form-label">Yêu cầu đặc biệt</label>
                    <textarea className="form-control" rows="4" id="message" name="message" placeholder=""></textarea>
                  </div>

                  <div className="col-lg-4 col-12 ms-auto">
                    <button type="submit" className="form-control">Gửi yêu cầu</button>
                  </div>
                </form>
            </div>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;
