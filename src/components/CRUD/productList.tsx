import React, {useState} from "react";
import ProductDataService from "../../services/product.service";
import {ProductNoFuture} from "../../model";

const ProductList = () => {
    // const [currentProduct, setCurrentProduct] = useState({});
    // const [currentIndex, setCurrentIndex] = useState(0);
    //
    // const [products, loading] = useList(ProductDataService.getAll());
    //
    // const refreshList = () => {
    //     setCurrentProduct({});
    //     setCurrentIndex(0);
    // };
    //
    // const setActiveProduct = (product: any, index: any): any => {
    //     setCurrentProduct({
    //         key: product.key,
    //         id: generateID(),
    //         category: product.category,
    //         description: product.description,
    //         image: product.image,
    //         price: product.price,
    //         title: product.title,
    //     })
    //     ;
    //     setCurrentIndex(index);
    // };
    //
    // const removeAllProducts = () => {
    //     ProductDataService.removeAll()
    //         .then(() => {
    //             refreshList();
    //         })
    //         .catch((e: any) => {
    //             console.log(e);
    //         });
    // };
    // console.log(products)

    return (
        <div>
            {/*<div>*/}
            {/*    <h4>Products List</h4>*/}
            {/*    {loading && <span>Loading...</span>}*/}
            {/*    <ul>*/}
            {/*        {!loading &&*/}
            {/*            products &&*/}
            {/*            products.map((product, index) => (*/}
            {/*                <li*/}
            {/*                    className={(index === currentIndex ? "active" : "")}*/}
            {/*                    onClick={() => setActiveProduct(product, index)}*/}
            {/*                    key={index}*/}
            {/*                >*/}
            {/*                    {product.val().title}*/}
            {/*                </li>*/}
            {/*            ))}*/}
            {/*    </ul>*/}

            {/*    <button onClick={removeAllProducts}>*/}
            {/*        Remove All*/}
            {/*    </button>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    {currentProduct ? (*/}
            {/*        <Product product={currentProduct} refreshList={refreshList}/>*/}
            {/*    ) : (*/}
            {/*        <div>*/}
            {/*            <br/>*/}
            {/*            <p>Please click on a Product...</p>*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</div>*/}
        </div>
    );
};

export default ProductList;