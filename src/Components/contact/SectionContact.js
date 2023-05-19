import React, { useState, useEffect } from "react";
import { firestore } from "../../db"
export default function SectionContact(props) {
    const [address, setAddress] = useState(undefined || {});
    const [addHanoi, setaddHanoi] = useState(null);
    const handleInput = (e) => {
        address[e.target.name] = e.target.value;
        setAddress(address);
        console.log(address);
    }
    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const doc = await firestore.collection("address-hanoi").add(address);
            console.log("push thanh cong");
            e.target.value = "";
        } catch (err) {
            console.log(err);
        }
    }
    const refresh = async () => {
        try {
            const docs = await firestore.collection("address-hanoi").docs;
            setaddHanoi(docs.data());
            console.log(addHanoi)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        refresh();
    }, [])
    return (
        <section className="contact section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-3 mx-auto">
                        <h2 className="text-center">
                            LIÊN HỆ
                        </h2>
                        <form method="post" onSubmit={formSubmit}>
                            <div className="form-group">
                                <input onChange={handleInput} type="text" name="address" placeholder="title" />
                            </div>
                            <div className="form-group">
                                <input onChange={handleInput} type="text" name="email" placeholder="address" />
                            </div>
                            <div className="form-group">
                                <input onChange={handleInput} type="text" name="phoneNum" placeholder="email" />
                            </div>
                            <div className="form-group">
                                <input onChange={handleInput} type="text" name="title" placeholder="phone" />
                            </div>
                            <button type="submit" className="site-btn"> Add Product</button>
                            <button type="button" className="site-btn" onClick={() => this.updateProduct}> Update</button>
                        </form>
                        <div className="d-flex justify-content-around">
                            <button className="btn btn-primary button-contact">Hà Nội</button>
                            <button className="btn btn-primary button-contact">Sài Gòn</button>
                        </div>
                    </div>
                    <div className="col-9 mx-auto">
                        <div className="row">
                            <div className="w-100 list_address">
                                <div className="address-list">
                                    <h2>BÒ TƠ QUÁN MỘC CS5 HÀ NỘI</h2>
                                    <h4>Địa chỉ:</h4><p>88 Ngã tư Vạn Phúc - Hà Đông</p>
                                    <h4>Email:</h4><p> cskh1.aladdin@gmail.com</p>
                                    <h4>Điện thoại:</h4><p>094 195 3399</p>
                                </div>
                                {/* {addHanoi.map(item => {
                                            return (
                                                <div className="item_address">
                                                    <h4>Địa chỉ:{item.address}</h4>
                                                    <h4>Email:{item.email}</h4>
                                                    <h4>Điện thoại:{item.phone}</h4>
                                                </div>
                                            )
                                        })} */}
                            </div>
                            <div className="col-12">
                                <h2 className="mb-4">Hãy để lại thông tin của bạn</h2>
                            </div>

                            <div className="col-lg-6 col-12">
                                <form className="custom-form contact-form row" action="#" method="post" role="form">
                                    <div className="col-lg-6 col-6">
                                        <label for="contact-name" className="form-label">Họ và tên</label>

                                        <input type="text" name="contact-name" id="contact-name" className="form-control" placeholder="Tên của bạn" required />
                                    </div>

                                    <div className="col-lg-6 col-6">
                                        <label for="contact-phone" className="form-label">Số điện thoại</label>

                                        <input type="telephone" name="contact-phone" id="contact-phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control" placeholder="(+84)123456789" />
                                    </div>

                                    <div className="col-12">
                                        <label for="contact-email" className="form-label">Email</label>

                                        <input type="email" name="contact-email" id="contact-email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="abc@gmail.com" required="" />
                                        <label for="contact-name" className="form-label">Địa chỉ</label>

                                        <input type="text" name="contact-name" id="contact-name" className="form-control" placeholder="Địa chỉ" required />

                                        <label for="contact-message" className="form-label">Lời nhắn</label>

                                        <textarea className="form-control" rows="5" id="contact-message" name="contact-message" placeholder="Bạn đang nghĩ gì..."></textarea>
                                    </div>

                                    <div className="col-lg-5 col-12 ms-auto">
                                        <button type="submit" className="form-control">Gửi</button>
                                    </div>
                                </form>
                            </div>

                            <div className="col-lg-4 col-12 mx-auto mt-lg-5 mt-4">

                                <h5>Các ngày trong tuần</h5>

                                <div className="d-flex mb-lg-3">
                                    <p>Từ thứ 2 đến thứ 6</p>

                                    <p className="ms-5">10:00  - 20:00 </p>
                                </div>

                                <h5>Cuối tuần</h5>

                                <div className="d-flex">
                                    <p>Thứ bảy và Chủ nhật</p>

                                    <p className="ms-5">11:00 - 23:00 </p>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="google-map pt-3">
                                    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_-cyct6FgRXaXUbjNYNrcrKLgkF-7LBM&q=bò+tơ+quán+mộc/@21.0510037,105.6969974,13z/data=!3m1!4b1?hl=vi-VN" width="100%" height="300" style={{ border: "0" }} allowFullScreen="" loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}