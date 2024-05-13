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
    cart: {number: number, item: Item}[]
}

const initialState: CartState = {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem(state, action: PayloadAction<{number?: number, item: Item}>) {
            const selectedCartItem = state.cart.find((cartItem) => cartItem.item.name === action.payload.item.name)
            if (selectedCartItem !== undefined) {
                selectedCartItem.number += action.payload.number !== undefined ? action.payload.number : 1
            } else {
                state.cart.push({number: action.payload.number !== undefined ? action.payload.number : 1, item: action.payload.item})
            }
        },
        removeCartItem(state, action: PayloadAction<Item>) {
            const selectedCartItem = state.cart.find((cartItem) => cartItem.item.name === action.payload.name)
            if (selectedCartItem !== undefined) {
                selectedCartItem.number--
                if (selectedCartItem.number <= 0) {
                    state.cart = state.cart.filter((cartItem) => cartItem.item.name !== selectedCartItem.item.name)
                }
            } else {
                state.cart.push({number: 1, item: action.payload})
            }
        },
        setCartItemNumber(state, action: PayloadAction<{number: number, item: Item}>) {
            const selectedCartItem = state.cart.find((cartItem) => cartItem.item.name === action.payload.item.name)
            if (selectedCartItem !== undefined) {
                selectedCartItem.number = action.payload.number
                if (action.payload.number <= 0) {
                    console.log(action.payload.number)
                    state.cart = state.cart.filter((cartItem) => cartItem.item.name !== selectedCartItem.item.name)
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