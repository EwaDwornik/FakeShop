import React, {useContext} from 'react';
import ProductCards from "./ProductCard/ProductCards";
import {Context} from "../context/context";

const Home = () => {
    const {handleAdd} = useContext(Context)

    return (
        <div>
            <ProductCards handleAdd={handleAdd}/>
        </div>
    )
}


export default Home;