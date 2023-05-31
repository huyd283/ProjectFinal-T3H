import React from "react";
import { useEffect, useState } from "react";
import { firestore } from "../../db";
export default function FormCart(props) {
    const [pays, setPays] = useState(undefined || {});
    const handleInput = (e) => {
        pays[e.target.name] = e.target.value;
        setPays(pays);
        console.log(pays);
    }
    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const doc = await firestore.collection("pays").add(pays);
            console.log("push thanh cong");
            e.target.value = "";
        } catch (err) {
            console.log(err);
        }
    }
    const refresh = async () => {
        try {
            const docs = await firestore.collection("pays").docs;
            setPays(docs.data());
            console.log(pays);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        refresh();
        // console.log([...Array(24).keys()])
    }, [])
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

                    <select id="contact-address" className="form-control">
                        <option defaultValue={"default"}>Vui lòng chọn địa chỉ nhà hàng</option>
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