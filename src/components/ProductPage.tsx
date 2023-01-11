import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import {Context} from "../context/context";

const ProductPage = () => {
    const {id} = useParams();
    const {products} = useContext(Context)

    const product = products.find((pro: { id: string }) => pro.id === id);

    if (product) {
        return <div className="flex flex-wrap">
            {product.title}
        </div>
    } else {
        return (<div>
            <h4>Product with this id doesn't exist</h4>
        </div>)
    }

}

export default ProductPage;