import React from "react";
import TableCart from "../Components/cart/TableCart";
import Footer from "../Components/ShareComponents/Footer"
import FormCart from "../Components/cart/FormCart";
export default function CartPage(props) {
    return (
        <React.Fragment>
            <section className="product spad">
                <div className="container row">
                    <h2 className="bg-light-subtle mb-2" >Danh sách sản phẩm</h2>
                    <TableCart></TableCart>
                    <FormCart></FormCart>
                </div>
            </section>
        </React.Fragment>
    )
}