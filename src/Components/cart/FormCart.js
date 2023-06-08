import React from "react";
import { useEffect, useState } from "react";
import { database } from "../../db";
import UserContext from "../context/UserContext";
export default function FormCart(props) {
    const [pay, setPay] = useState([{}]);
    const {state, dispatch } = React.useContext(UserContext);

    const handleInput = (e) => {
        pay[e.target.name] = e.target.value;
        setPay(pay);
        console.log(pay);
    }
    
    const formSubmit = async (e) => {
        console.log("submit success");
        e.preventDefault(); 
        database.ref('cartlist/1').set(pay);
        
    }
    
    return (
        <div className="form mt-4">
            <h6 className="text-bg-danger">Thông tin đặt hàng</h6>
            <form onSubmit={formSubmit}  method="post" className="custom-form contact-form row" action="" role="form">
                <div className="col-lg-6 col-6">
                    <label for="contact-name" className="form-label">Họ và tên</label>

                    <input onChange={handleInput} type="text" name="contact-name" id="contact-name" className="form-control" placeholder="Tên của bạn" required />
                </div>

                <div className="col-lg-6 col-6">
                    <label for="contact-phone" className="form-label">Số điện thoại</label>

                    <input onChange={handleInput} type="telephone" name="contact-phone" id="contact-phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control" placeholder="(+84)123-456-789" />
                </div>

                <div className="col-12">
                    <label for="contact-email" className="form-label">Email</label>

                    <input onChange={handleInput} type="email" name="contact-email" id="contact-email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="@gmail.com" required="" />
                    <label for="contact-name" className="form-label">Địa chỉ</label>

                    <input onChange={handleInput} type="text" name="contact-address" id="contact-name" className="form-control" placeholder="Địa chỉ" required />

                    <label for="contact-address" className="form-label">Địa điểm nhà hàng</label>

                    <select id="contact-address" className="form-control" placeholder="Vui lòng chọn địa điểm">
                        <option defaultValue={"default"}>Vui lòng chọn địa điểm</option>
                        <option defaultValue={"default"}>BÒ TƠ QUÁN MỘC CS1 HÀ NỘI</option>
                        <option defaultValue={"default"}>BÒ TƠ QUÁN MỘC CS2 HÀ NỘI</option>
                        <option defaultValue={"default"}>BÒ TƠ QUÁN MỘC CS1 SÀI GÒN</option>
                        <option defaultValue={"default"}>BÒ TƠ QUÁN MỘC CS2 SÀI GÒN</option>
                    </select>
                    <label for="contact-time" className="form-label">Thời gian ăn</label>

                    <div className="form-group row p-3">
                        <input onChange={handleInput} type="date" name="contact-time" id="contact-time" className="  form-control w-25 " required />
                        <select onChange={handleInput} name="contact-hour" className=" form-control w-25 mx-5" required>
                            {
                                [...Array(24).keys()].map((i) => {
                                    if (7 <= i && i <= 21) {
                                        return (
                                            <option value={i} key={i}>{i} Giờ</option>
                                        )
                                    }
                                })

                            }
                        </select>
                        <select onChange={handleInput} name="contact-minutes" className=" form-control w-25" required>
                            {
                                [...Array(60).keys()].map((i) => {
                                    
                                        return (
                                            <option value={i} key={i}>{i} phút</option>
                                        )
                                    
                                })

                            }
                        </select>
                    </div>

                    <label for="contact-message" className="form-label">Ghi chú cho quán</label>

                    <textarea onChange={handleInput} className="form-control" rows="5" id="contact-note" name="contact-message" placeholder="Bạn đang nghĩ gì..."></textarea>
                </div>

                <div className="col-lg-5 col-12 ms-auto">
                    <button type="submit" className="form-control">Tạo đơn hàng</button>
                </div>
            </form>
        </div>
    )
}