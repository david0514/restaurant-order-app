import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SizeState {
    imageSize: string
}

const initialState: SizeState = {
    imageSize: getSize()
}

function getSize() {
    if (window.innerWidth <= 750) {
        return "small"
    } else if (window.innerWidth <= 1068) {
        return "medium"
    } else {
        return "large"
    }
}

const sizeSlice = createSlice({
    name: "size",
    initialState,
    reducers: {
        updateSize(state, action: PayloadAction<SizeState>) {
            state.imageSize = action.payload.imageSize
        },
    }
})

export const {updateSize} = sizeSlice.actions
export default sizeSlice.reducer