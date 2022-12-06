import React, {useContext} from 'react';
import ProductCards from "./ProductCard/ProductCards";
import {Context} from "../context/context";
import About from "./About";

const Home = () => {
    const {handleAdd} = useContext(Context)

    return (
        <div>
            <ProductCards handleAdd={handleAdd}/>
            <About />
        </div>
    )
}


export default Home;