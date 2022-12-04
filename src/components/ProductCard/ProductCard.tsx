import React from "react";
import {PropsCard} from "../../model";

const ProductCard = ({product, handleAdd}: PropsCard) =>(
    <div className="product-card">
        <div><h3>{product.category}</h3></div>
        <div>
            <img src={product.image} alt={product.title}/>
        </div>
        <div>{product.title}</div>
        <div>
            <div><h3>{product.price} $</h3></div>
            <button onClick={() => handleAdd(product)}><h3>Add to cart</h3></button>
        </div>
    </div>
)

export default ProductCard;