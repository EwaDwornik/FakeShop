import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import {Context} from "../context/context";
import {PropsCards} from "../model";
import ProductCard from "./ProductCard/ProductCard";

const ProductPage = () => {
    const {id} = useParams();
    const {products} = useContext(Context)
    const {handleAdd} = useContext(Context)

    const product = products.find((pro: { id: string }) => pro.id === id);

    // @ts-ignore
    const result = products.filter(pro => (pro.category).includes(product.category));

    if (product) {
        return (
            <div className="container flex flex-wrap justify-between mt-32">
                <div className="w-1/2 flex justify-center"><img className="rounded-xl" src={product.image}
                                                                alt={product.title}/></div>
                <div className="w-1/2 flex flex-col justify-between">
                    <div className=" flex justify-between font-bold text-xl">
                        <h1 className="m-2">{product.title}</h1>
                        <h1 className="m-2">{product.price} euro</h1>
                    </div>

                    <button className="rounded-xl p-2 w-full" onClick={() => handleAdd(product)}>Add to cart
                    </button>
                    <div className="flex flex-col justify-start items-start">
                        <div className="font-bold text-xl">Description</div>
                        <div className="font-lg">{product.description}</div>
                    </div >
                    <div className="flex flex-col justify-start items-start">See similar products:</div>

                </div>

                {result.map((product) =>
                    <ProductCard product={product} handleAdd={handleAdd}/>
                )}
            </div>

        )
    } else {
        return (
            <div>
                <h4>Product with this id doesn't exist</h4>
            </div>)
    }

}

export default ProductPage;