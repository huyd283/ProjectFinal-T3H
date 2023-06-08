import React,{useContext, useEffect, useState } from "react";
import TableCart from "../Components/cart/TableCart";
import FormCart from "../Components/cart/FormCart";
import UserContext from "../Components/context/UserContext";
export default function CartPage(props) {
    const {state,dispatch} = React.useContext(UserContext);      

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