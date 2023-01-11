import React from "react";
import {PropsCard} from "../../model";
import {Link} from "react-router-dom";

const ProductCard = ({product, handleAdd}: PropsCard) => {

    return (
        <div className="product-card">
            <div><h3>{product.title}</h3></div>
            <div>
                <img src={product.image} alt={product.title}/>
            </div>

            <div>
                <div><h3>{product.price} $</h3></div>
                <div><Link to={"/" + product.id}>see more...</Link></div>
                <button onClick={() => handleAdd(product)}>Add to cart</button>
            </div>
        </div>

    )
}

export default ProductCard;