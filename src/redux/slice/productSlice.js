import {createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        addProducts(state, actions) {
        },
        updateProducts(state, actions) {
        },
        removeProducts(state, actions) {
        },
        getAllProducts(state, actions) {
            return state
        },
        getProductsById(state, actions) {
        }
    }
})
const {actions, reducer} = productSlice
export const {addProducts, updateProducts, removeProducts, getAllProducts, getProductsById} = actions
export default reducer