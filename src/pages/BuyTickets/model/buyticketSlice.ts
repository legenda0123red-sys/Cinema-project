import { createSlice } from "@reduxjs/toolkit"

interface IModal {
    openW: boolean
}
const initialState: IModal = {
    openW: false
}

const buyticketSlice = createSlice({
    name: "ticket",
    initialState,
    reducers: {
        openModal(state){
            state.openW = true
        },
        closeModal(state){
            state.openW = false
        }
    }
})
export const {openModal, closeModal} = buyticketSlice.actions
export const buyTicketReducer = buyticketSlice.reducer;