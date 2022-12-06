import React from "react";
import {PropsCard} from "../../model";

const ProductCard = ({product, handleAdd}: PropsCard) => {

    return (
        <div className="product-card">
            <div><h3>{product.title}</h3></div>
            <div>
                <img src={product.image} alt={product.title}/>
            </div>
            <div>{product.description}</div>
            <div>
                <div><h3>{product.price} $</h3></div>
                <div><h3>{product.category}</h3></div>
                <button onClick={() => handleAdd(product)}>Add to cart</button>
            </div>
        </div>)
}

export default ProductCard;