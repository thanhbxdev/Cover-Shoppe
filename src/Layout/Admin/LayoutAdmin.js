import React from "react";
import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin";
import FooterAdmin from "../../components/FooterAdmin/FooterAdmin";

function LayoutAdmin({children}) {
    return (
        <>
            <HeaderAdmin/>
            {children}
            <FooterAdmin/>
        </>
    )
}

export default LayoutAdmin