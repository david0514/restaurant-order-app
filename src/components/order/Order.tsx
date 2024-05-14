import React from 'react';
import './Order.css';
import {useAppSelector} from "../../app/hooks";
import OrderItem from "../order-item/OrderItem";
import {useNavigate} from "react-router-dom";

function Order() {

    const navigate = useNavigate();

    const cart = useAppSelector((state) => state.cart)

    return (
        <div className="order-container">
            <div className="title">Kosár</div>
            <button
                style={{marginBottom: "1rem"}}
                className="filled-button filled-button-dark"
                onClick={() => {
                    navigate("/payment", {replace: true});
                }}
            >
                Tovább a fizetéshez
            </button>
            <div style={{marginBottom: "1rem"}}>Összesen: {cart.cart.reduce((acc, product) => acc + (product.item.price * product.number), 0)} Ft + 10% szervízdíj</div>
            {cart.cart.map((cartItem) => <OrderItem cartItem={cartItem} key={cartItem.item.name+" - "+cartItem.ration}></OrderItem>)}
        </div>
    );
}

export default Order;
