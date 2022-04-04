import {configureStore} from "@reduxjs/toolkit";
import productSlice from "../slice/productSlice";


const rootReducer = {
    products: productSlice
}
const store = configureStore({
    reducer: rootReducer
})
export default store