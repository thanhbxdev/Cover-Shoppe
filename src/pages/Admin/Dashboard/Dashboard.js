import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../../redux/slice/productSlice";

function Dashboard() {
    const dispath = useDispatch()
    const products = useSelector(state => state.products)
    const actions = getAllProducts()
    dispath(actions)
    console.log(actions)
    console.log(products)
    return (
        <>
            Dash Board
            <NavLink to="/admin/product/add">
                Add Product
            </NavLink>
            <NavLink to="/admin/category/add">
                Add Category
            </NavLink>
        </>
    )
}

export default Dashboard