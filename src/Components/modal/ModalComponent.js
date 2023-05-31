import React, { useState, useEffect } from "react";
import { firestore } from "../../db";
function ModalComponent({ isOpen, onClose }) {
  useEffect(() => {
    // console.log([...Array(24).keys 
}, [])    



  const [order, setOrder] = useState(undefined || {});
    const handleInput = (e) => {
        order[e.target.name] = e.target.value;
        console.log(order);
    }
    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const doc = await firestore.collection("Order").add(order);
            console.log("push thanh cong");
            e.target.value = "";
        } catch (err) {
            console.log(err);
        }
    }
    // const refresh = async () => {
    //     try {
    //         const docs = await firestore.collection("address-hanoi").docs;
    //         setaddHanoi(docs.data());
    //         console.log(addHanoi)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    // useEffect(() => {
    //     refresh();
    // }, [])
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
                <form  onSubmit={formSubmit} className="booking-form row" role="form" action="#" method="post">
                  <div className="col-lg-6 col-12">
                    <label htmlFor="name" className="form-label">Họ và tên</label>
                    <input onChange={handleInput} type="text" name="name" id="name" className="form-control" placeholder="Họ và tên" required/>
                  </div>

                  <div className="col-lg-6 col-12">
                    <label htmlFor="email" className="form-label">Địa chỉ Email</label>
                    <input onChange={handleInput} type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="email@example.com" required/>
                  </div>

                  <div className="col-lg-6 col-12">
                    <label htmlFor="phone" className="form-label">Số điện thoại</label>
                    <input onChange={handleInput} type="tel" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control" placeholder="123-456-7890"/>
                  </div>  


                 

                  <div className="col-lg-6 col-12">
                    <label htmlFor="people" className="form-label">Số người</label>
                    <input onChange={handleInput} type="text" name="people" id="people" className="form-control" placeholder="Số người"/>
                  </div>

                  <div className="col-lg-6 col-12">
                    <label htmlFor="date" className="form-label">Ngày</label>
                    <input onChange={handleInput} type="date" name="date" id="date" value="" className="form-control"/>
                  </div>

                  <div className="col-lg-3 row">
                    <label htmlFor="time" className="form-label">Giờ</label>
                    <div className="col-6">
                    <select className="form-select form-control w-150 " name="time" id="time" onChange={handleInput}>
                    {
                                [...Array(24).keys()].map((i) => {
                                    if (7 <= i && i <= 21) {
                                        return (
                                            <option value={i} key={i}>{i} giờ</option>
                                        )
                                    }
                                })

                            }
                        </select>
                    </div>
                    <div className="col-6">
                        <select id="contact-minutes" className="form-control " required>
                            {
                                [...Array(60).keys()].map((i) => {

                                        return (
                                            <option value={i} key={i}>{i} phút</option>
                                        )

                                })

                            }
                    </select>
                    </div>
                  </div>
                  <div className="col-lg-12 col-12">
                  <label className="form-label">Địa điểm nhà hàng</label>
                  <select name="contact-address" id="contact-address" className="form-control" onChange={handleInput}>
                  <option defaultValue={"default"}>Vui lòng chọn địa chỉ nhà hàng</option>
																	<option value="102 Thái Thịnh ">102 Thái Thịnh </option>
																	<option value="Biệt Thự D17, Ngõ 76 Nguyễn Phong Sắc">Biệt Thự D17, Ngõ 76 Nguyễn Phong Sắc</option>
																	<option value="B52 - Nguyễn Thị Định - Thanh Xuân - Hà Nội">B52 - Nguyễn Thị Định - Thanh Xuân - Hà Nội</option>
																	<option value="Số 2 Hoa Lư - Quận Hai Bà Trưng - Hà Nội">Số 2 Hoa Lư - Quận Hai Bà Trưng - Hà Nội</option>
																	<option value="88 Ngã tư Vạn Phúc - Hà Đông">88 Ngã tư Vạn Phúc - Hà Đông</option>
																	<option value="Bò Tơ Quán Mộc CS6 Hà Nội">Bò Tơ Quán Mộc CS6 Hà Nội</option>
																	<option value="14 BT7 KĐT Văn Quán, Hà Đông">14 BT7 KĐT Văn Quán, Hà Đông</option>
																	<option value="02 Đặng Dung Ba Đình">02 Đặng Dung Ba Đình</option>
																	<option value="1A Tăng Bạt Hổ, Phạm Đình Hổ, Hai Bà Trưng, Hà Nội">1A Tăng Bạt Hổ, Phạm Đình Hổ, Hai Bà Trưng, Hà Nội</option>
																	<option value="B2BT5 Lưu Hữu Phước - KĐT Mỹ Đình">B2BT5 Lưu Hữu Phước - KĐT Mỹ Đình</option>
																	<option value="84 Ngọc Khánh - Ba Đình">84 Ngọc Khánh - Ba Đình</option>
																	<option value="43-45 Nguyễn Thị Thập, P.Tân Hưng, Khu dân cư Him Lam, Quận 7, TP HCM">43-45 Nguyễn Thị Thập, P.Tân Hưng, Khu dân cư Him Lam, Quận 7, TP HCM</option>
																	<option value="Số 486 Nguyễn Thị Minh Khai, P2, Q3, TP HCM ">Số 486 Nguyễn Thị Minh Khai, P2, Q3, TP HCM </option>
																	<option value="111A Gò Dầu, phường Tân Quý, quận Tân Phú, Tp.HCM">111A Gò Dầu, phường Tân Quý, quận Tân Phú, Tp.HCM</option>
																	<option value="206-210 Trần Văn Giàu, phường Bình Trị Đông, quận Bình Tân, TP HCM">206-210 Trần Văn Giàu, phường Bình Trị Đông, quận Bình Tân, TP HCM</option>
															</select>
                  
                  </div>

                  <div className="col-12">
                      <label htmlFor="message" className="form-label">Yêu cầu đặc biệt</label>
                      <textarea onChange={handleInput} className="form-control" rows="4" id="comment" name="message" placeholder=""></textarea>
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
