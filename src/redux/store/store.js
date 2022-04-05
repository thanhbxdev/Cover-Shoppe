import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../slice/productSlice";
import userReducer from "../slice/userSlice";


const rootReducer = {
    products: productReducer,
    user: userReducer
}

const store = configureStore({
    reducer: rootReducer
})
export default store