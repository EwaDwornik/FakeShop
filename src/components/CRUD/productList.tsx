import React, {useContext} from "react";
import {Context} from "../../context/context";
import AddProductCurd from "./addProduct.curd";

const ProductList = () => {
    const {info} = useContext(Context)
    console.log(info)

    return (
        <div>
            <AddProductCurd/>
            <table className="curdListTable">
                <tr>
                    <th>id</th>
                    <th>category</th>
                    <th>title</th>
                    <th>description</th>
                    <th>image</th>
                    <th>price</th>
                </tr>
                {info.map((product) =>
                    <tr>
                        <td>{product.id}</td>
                        <td>{product.category}</td>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.image}</td>
                        <td>{product.price}</td>
                    </tr>
                )}
            </table>
        </div>
    )
};

export default ProductList;