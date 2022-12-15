import React, {useContext, useState} from "react";
import {Context} from "../../context/context";
import AddProductCurd from "./addProduct.curd";
import {doc, deleteDoc, setDoc, updateDoc} from "firebase/firestore";

import {ProductNoFuture} from "../../model";
import {firestore} from "../../services/firebase/firebase.config";

const ProductList = () => {
    const {products} = useContext(Context)
    const [submitted, setSubmitted] = useState(false);
    const [currentId, setCurrentId] = useState<string>("");

    console.log(products);

    const addOrEdit = async (linkObject: ProductNoFuture) => {
        if (currentId === "") {
            await setDoc(doc(firestore, "products", linkObject.id), linkObject)
        } else {

            // @ts-ignore
            await updateDoc(doc(firestore, "products", currentId), linkObject)

            setCurrentId("");
        }
    };

    const deleteProduct = (id: string) => {
        setSubmitted(true);
        const docRef = doc(firestore, "products", id);
        deleteDoc(docRef)
            .then(() => {
                console.log("Product has been deleted successfully.")
            })

    };

    const delProductSub = () => {
        setSubmitted(false);
        alert("product removed successfully");
    };

    // if(user !== 'admin')
    //     return <Navigate to={'/'} />

    return (
        <div>
            <div className="crudInformation">
                Only admin can see this page
            </div>
            <div className="addProductBox">
                <AddProductCurd {...{addOrEdit, currentId}}/>
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
                                <th>edit or delete</th>
                            </tr>
                            {products.map((product, key) =>
                                <tr>
                                    <td>{key + 1}</td>
                                    <td>{product.category}</td>
                                    <td>{product.title}</td>
                                    <td>{product.description}</td>
                                    <td><img src={product.image} alt={product.title}/></td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button onClick={() => {
                                            deleteProduct(product.id)
                                        }}>Delete
                                        </button>
                                        <button onClick={() => setCurrentId(product.id)}>Edit</button>
                                    </td>
                                </tr>
                            )}
                        </table>)}
                </div>
            </div>
        </div>
    )
};

export default ProductList;