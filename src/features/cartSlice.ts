import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Item {
    "name": string,
    "shortDescription"?: string,
    "description"?: string,
    "imageUrl": string,
    "contains": string[],
    "tags": string[],
    "price": number,
    "currency": string
}

export interface CartState {
    cart: {number: number, ration: "kis adag" | "normál adag" | "nagy adag", item: Item}[]
}

const initialState: CartState = {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem(state, action: PayloadAction<{number?: number, ration: "kis adag" | "normál adag" | "nagy adag", item: Item}>) {
            const selectedCartItem = state.cart.find((cartItem) => cartItem.item.name === action.payload.item.name && cartItem.ration === action.payload.ration)
            if (selectedCartItem !== undefined) {
                selectedCartItem.number += action.payload.number !== undefined ? action.payload.number : 1
            } else {
                state.cart.push({number: action.payload.number !== undefined ? action.payload.number : 1, ration: action.payload.ration,  item: action.payload.item})
            }
        },
        removeCartItem(state, action: PayloadAction<{item: Item, ration: "kis adag" | "normál adag" | "nagy adag"}>) {
            const selectedCartItem = state.cart.find((cartItem) => cartItem.item.name === action.payload.item.name && cartItem.ration === action.payload.ration)
            if (selectedCartItem !== undefined) {
                selectedCartItem.number--
                if (selectedCartItem.number <= 0) {
                    state.cart = state.cart.filter((cartItem) => cartItem.item.name !== selectedCartItem.item.name || cartItem.ration !== selectedCartItem.ration)
                }
            }
        },
        setCartItemNumber(state, action: PayloadAction<{number: number, ration: "kis adag" | "normál adag" | "nagy adag", item: Item}>) {
            const selectedCartItem = state.cart.find((cartItem) => cartItem.item.name === action.payload.item.name && cartItem.ration === action.payload.ration)
            if (selectedCartItem !== undefined) {
                selectedCartItem.number = action.payload.number
                if (action.payload.number <= 0) {
                    state.cart = state.cart.filter((cartItem) => cartItem.item.name !== selectedCartItem.item.name || cartItem.ration !== selectedCartItem.ration)
                }
            }
        },
        clearCart(state, ) {
            state.cart = []
        },
    }
})

export const {addCartItem, removeCartItem, setCartItemNumber, clearCart} = cartSlice.actions
export default cartSlice.reducer