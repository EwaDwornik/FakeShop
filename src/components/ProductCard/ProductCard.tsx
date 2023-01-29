import React, {useState} from "react";
import {PropsCard} from "../../model";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({product, handleAdd}: PropsCard) => {
    const [isAnimating, setIsAnimating] = useState(false);

    return (
        <motion.div className="product-card"
                    animate={{
                        opacity: 1,
                        scale: isAnimating ? 1.1 : 1,
                        rotate: 360,
                    }}
                    initial={{opacity: 0.1}}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                    }}
                    onClick={() => setIsAnimating((!isAnimating))}>
            <div><h3>{product.title}</h3></div>
            <div>
                <img src={product.image} alt={product.title}/>
            </div>

            <div>
                <div><h3>{product.price} $</h3></div>
                <div><button><Link to={"/" + product.id}>see more...</Link></button></div>
                <button onClick={() => handleAdd(product)}>Add to cart</button>
            </div>
        </motion.div>

    )
}

export default ProductCard;