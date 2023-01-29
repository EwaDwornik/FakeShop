import React, {useContext} from 'react';
import ProductCards from "./ProductCard/ProductCards";
import {Context} from "../context/context";
import About from "./About";
import NoFutureWelcome from "./Animation/NoFutureWelcome";
import {motion} from "framer-motion";

const Home = () => {
    const {handleAdd} = useContext(Context)

    const pageAnimation = {
        hidden: { opacity: 0, y: -300 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.25,
                ease: "easeOut",
            },
        },
        exit: {
            opacity: 0,
            // y: 300,
            transition: { duration: 0.2 },
        },
    };

    return (
        <div>
            <NoFutureWelcome/>
            <About/>
            <div id="second"></div>
            <motion.div
                variants={pageAnimation}
                exit={"exit"}
                initial={"hidden"}
                animate={"show"}
            >
                <ProductCards handleAdd={handleAdd}/>
                <div id="second"></div>

            </motion.div>
        </div>
    )
}


export default Home;