import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../../redux/slice/productSlice";
import LayoutAdmin from "../../../Layout/Admin/LayoutAdmin";

function Dashboard() {
    const dispath = useDispatch()
    const products = useSelector(state => state.products)
    const actions = getAllProducts()
    dispath(actions)
    console.log(actions)
    console.log(products)
    return (
        <LayoutAdmin>
            DashBoard
        </LayoutAdmin>
    )
}

export default Dashboard