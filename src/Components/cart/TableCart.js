import React from "react";

export default function TableCart(props) {
    return (
        <React.Fragment>
            <table style={{ textAlign: "center", width: "100%" }}>
                        <thead>
                            <tr>
                                <th>Products</th>
                                <th style={{ width: 400 }}></th>
                                <th style={{ width: 100 }}>Price</th>
                                <th>Quantity</th>
                                <th style={{ width: 100 }}>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {pro.map((item, index) => {
                                return (
                                    <tr key={index} style={{ verticalAlign: 'middle' }}>
                                        <td><img src={item.thumbnail} width={80} /></td>
                                        <td style={{ textAlign: "start" }}>{item.name}</td>
                                        <td><b>${item.price}</b></td>
                                        <td >
                                            <div className="mx-auto w-50" style={{ background: "rgb(227 224 224)" }}>
                                                <button style={{ border: "none", background: "transparent" }} >+</button>
                                                {item.qty}
                                                <button style={{ border: "none", background: "transparent" }} >-</button>
                                            </div>
                                        </td>
                                        <td><b>${item.qty * item.price}</b></td>
                                        <th style={{ width: 100, }} onClick={() => deleteItem(item)}><p style={{ cursor: "pointer" }}>X</p></th>
                                    </tr>
                                )
                            })} */}
                        </tbody>
                    </table>
                    <div className="row ">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button className="btn-nav-cart">COUNTINUE</button>
                        <button className="btn-nav-cart">UPDATE CART</button>
                    </div>
                    <div className="row mt-4" >
                        <div className="col">
                            <p className="mb-3"><b>Discount Codes</b></p>
                            <form className="d-flex">
                                <input className="form-control w-50" name="discount-code" placeholder="Enter your coupon code"></input>
                                <button className="btn btn-dark w-25 ms-2" style={{ borderRadius: "0", fontSize: "10px", backgroundColor: "rgba(111,111,111)" }}>APPLY COUPON</button>
                            </form>
                        </div>
                        <div className="col">
                            <p><b>Cart Total</b></p>
                            <div className="row">
                                <div className="col">
                                    <p><b>Subtotal</b></p>
                                </div>
                                <div className="col" style={{ direction: "rtl", color: "red" }}><b></b></div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p><b>Total</b></p>
                                </div>
                                <div className="col" style={{ direction: "rtl", color: "red" }}><b></b></div>
                            </div>
                            <button className="btn btn-primary w-100 process-cart-btn">PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>

        </React.Fragment>
    )
}