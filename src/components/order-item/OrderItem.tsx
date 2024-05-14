import React from 'react';
import './OrderItem.css';
import {useAppDispatch} from "../../app/hooks";
import {addCartItem, Item, removeCartItem, setCartItemNumber} from "../../features/cartSlice";

function OrderItem(params: { cartItem: { number: number, ration: "kis adag" | "normál adag", item: Item } }) {
    const dispatch = useAppDispatch()


    function handleNumberInputChange(event: any) {

        if (typeof event.target.value === 'number') {
            console.log("lefut")
            dispatch(setCartItemNumber({number: event.target.value, ration: params.cartItem.ration, item: params.cartItem.item}))
        }
        if (typeof event.target.value === 'string' && !isNaN(parseInt(event.target.value))) {
            console.log("lefut")
            dispatch(setCartItemNumber({number: parseInt(event.target.value), ration: params.cartItem.ration, item: params.cartItem.item}))
        }

    }

    return (
        <div className="order-item-container">
            <div>
            <div className="item-number-container">
                <button style={{margin:"0.25rem"}} onClick={() => dispatch(removeCartItem({ration: params.cartItem.ration, item: params.cartItem.item}))}>–
                </button>
                <input style={{backgroundColor:"rgba(255, 255, 255, 0.5)"}} type="number" value={params.cartItem.number} onChange={handleNumberInputChange}/>
                {/*<span style={{marginLeft: "0.5rem"}}>db</span>*/}
                <button  style={{margin:"0.25rem"}} onClick={() => dispatch(addCartItem({number: 1, ration: params.cartItem.ration, item: params.cartItem.item}))}>+
                </button>
            </div>
            <span>{params.cartItem.ration === "kis adag" ? "Kis adag" : "Normál adag"} - {params.cartItem.item.name}</span>
            </div>
            <div>
                <span style={{textWrap: "nowrap"}}>{params.cartItem.item.price * params.cartItem.number} {params.cartItem.item.currency === "HUF" ? "Ft" : ""}</span>
                {/*<button*/}
                {/*    className="filled-button filled-button-dark"*/}
                {/*    onClick={() => {dispatch(setCartItemNumber({number: 0, item: params.cartItem.item}))}}*/}
                {/*>*/}
                {/*    Remove*/}
                {/*</button>*/}
            </div>

        </div>
    );
}

export default OrderItem;
