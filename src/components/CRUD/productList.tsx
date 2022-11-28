import React, {useState} from "react";
import {useList} from "react-firebase-hooks/database";
import ProductDataService from "../../services/product.service";
import {generateID} from "../../services/utilities";
import {ProductNoFuture} from "../../model";
import Product from "./product";

const ProductList = () => {
    const [currentProduct, setCurrentProduct] = useState<ProductNoFuture | null>(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    // @ts-ignore
    const [products, loading] = useList(ProductDataService.getAll());

    const refreshList = () => {
        setCurrentProduct(null);
        setCurrentIndex(-1);
    };

    const setActiveProduct = (product: any, index: any): any => {

        setCurrentProduct({
            id: generateID(),
            category: product.category,
            description: product.description,
            image: product.image,
            price: product.price,
            title: product.title,
        })
        ;

        setCurrentIndex(index);
    };

    const removeAllProducts = () => {
        ProductDataService.removeAll()
            .then(() => {
                refreshList();
            })
            .catch((e: any) => {
                console.log(e);
            });
    };
    console.log(products)

    return (
        <div>
            <div >
                <h4>Products List</h4>
                {loading && <span>Loading...</span>}
                <ul >
                    {!loading &&
                        products &&
                        products.map((product, index) => (
                            <li
                                className={(index === currentIndex ? "active" : "")}
                                onClick={() => setActiveProduct(product, index)}
                                key={index}
                            >
                                {product.val().title}
                            </li>
                        ))}
                </ul>

                <button onClick={removeAllProducts}>
                    Remove All
                </button>
            </div>
            <div>
                {currentProduct ? (
                    <Product product={currentProduct} refreshList={refreshList}/>
                ) : (
                    <div>
                        <br/>
                        <p>Please click on a Product...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductList;