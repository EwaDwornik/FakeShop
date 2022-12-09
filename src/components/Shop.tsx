import React, {useContext} from "react";
import ProductCards from "./ProductCard/ProductCards";
import {Context} from "../context/context";

const Shop = () => {

    const {handleAdd} = useContext(Context)

    return (
        <div>
            <div id="third">
            </div>
            <ProductCards handleAdd={handleAdd}/>
            <div id="third"></div>
        </div>
    )
}

export default Shop