import React, {useContext, useState} from "react";
import {Context} from "../../context/context";
import AddProductCurd from "./addProduct.curd";
import {productsCollection} from "../../services/firebase/firebase.utils";
import {ProductNoFuture} from "../../model";

const ProductList = () => {
    const {info} = useContext(Context)
    const [submitted, setSubmitted] = useState(false);
    const [currentId, setCurrentId] = useState<string>("");

    console.log(info);

    const addOrEdit = async (linkObject: ProductNoFuture) => {
        if (currentId === "") {
            await productsCollection.doc(linkObject.id).set(linkObject);
        } else {
            await productsCollection.doc(currentId).update(linkObject);
            setCurrentId("");
        }
    };

    const deleteProduct = (id: string) => {
        setSubmitted(true);
        productsCollection
            .doc(id)
            .delete()
            .then(() => console.log("Document deleted" + id)) // Document deleted
            .catch((error) => console.error("Error deleting document", error));
    }

    const delProductSub = () => {
        setSubmitted(false);
        alert("product removed successfully");
    };

    return (
        <div>
            <AddProductCurd {...{ addOrEdit, currentId }}/>
            <div className="crudListTable">
                {submitted ? (
                    <div>
                        <h4>You deleted successfully!</h4>
                        <button onClick={delProductSub}>go back to list
                        </button>
                    </div>
                ) : (
                    <table>
                        <tr>
                            <th>id</th>
                            <th>category</th>
                            <th>title</th>
                            <th>description</th>
                            <th>image</th>
                            <th>price</th>
                        </tr>
                        {info.map((product, key) =>
                            <tr>
                                <td>{key}</td>
                                <td>{product.category}</td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.image}</td>
                                <td>{product.price}</td>
                                <button onClick={() => {
                                    deleteProduct(product.id)
                                }}>Delete
                                </button>
                                <button onClick={() => setCurrentId(product.id)}>Edit</button>

                            </tr>
                        )}
                    </table>)}
            </div>
        </div>
    )
};

export default ProductList;