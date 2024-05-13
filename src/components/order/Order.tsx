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
            {cart.cart.map((cartItem) => <OrderItem cartItem={cartItem} key={cartItem.item.name}></OrderItem>)}

        </div>
    );
}

export default Order;
