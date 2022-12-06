import React, {useContext} from 'react';
import ProductCards from "./ProductCard/ProductCards";
import {Context} from "../context/context";
import About from "./About";

const Home = () => {
    const {handleAdd} = useContext(Context)

    return (
        <div>
            <div id="first">
                <p className="animate__animated animate__backInLeft">Welcome to No Future!</p>
            </div>
            <About/>
            <div id="second"></div>
            <ProductCards handleAdd={handleAdd}/>
            <div id="second"></div>

        </div>
    )
}


export default Home;