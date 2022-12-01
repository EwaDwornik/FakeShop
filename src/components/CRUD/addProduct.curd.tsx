import React, {useState} from "react";
import {categories} from "../../services/utilities";
import {ProductNoFuture} from "../../model";
import {productsCollection} from "../../services/firebase/firebase.utils";


const AddProductCurd = () => {
    const initialState: Omit<ProductNoFuture, "id"> = {
        category: "",
        description: "",
        image: "",
        price: 0.1,
        title: "",
    };

        const [product, setProduct] = useState(initialState);
        const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setSubmitted(true);
        productsCollection.add(product)
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    };


    const newProduct = () => {
        setProduct(initialState);
        setSubmitted(false);
        console.log(product)
    };

        return (
            <div>
                <div className="formAddProduct">
                    {submitted ? (
                        <div>
                            <h4>You submitted successfully!</h4>
                            <button onClick={newProduct}>
                                Add
                            </button>
                        </div>
                    ) : (
                        <div>
                            <div className="pos-relative">
                                <label className="form-label">Title</label>
                                <input
                                    type="text"
                                    className="effect-green"
                                    id="title"
                                    required
                                    value={product.title}
                                    onChange={e => {
                                        setProduct({...product, title: e.target.value});
                                    }}
                                    name="title"
                                />
                                <span className="focus-border"></span>

                            </div>
                            <div className="pos-relative">
                                <label className="form-label">Price in euro</label>
                                <input
                                    type="number"
                                    className="effect-green"
                                    id="price"
                                    required
                                    value={product.price}
                                    onChange={e => {
                                        // @ts-ignore
                                        setProduct({...product, price: e.target.value});
                                    }}
                                    name="price"
                                />
                                <span className="focus-border"></span>

                            </div>
                            <div className="pos-relative">
                                <label className="form-label">description</label>
                                <input
                                    type="text"
                                    className="effect-green"
                                    id="description"
                                    required
                                    value={product.description}
                                    onChange={e => {
                                        setProduct({...product, description: e.target.value})
                                    }}
                                    name="description"
                                />
                                <span className="focus-border"></span>

                            </div>

                            <div className="pos-relative">
                                <label className="form-label">category</label>
                                <select className="effect-green"
                                        onChange={e => {
                                            setProduct({...product, category: e.target.value})
                                        }}>
                                    {categories.map((category) =>
                                        <option value={product.category}>{category}</option>)}
                                </select>
                                <span className="focus-border"></span>
                            </div>

                            <div className="pos-relative">
                                <label className="form-label">image</label>
                                <input
                                    type="text"
                                    className="effect-green"
                                    id="image"
                                    required
                                    value={product.image}
                                    onChange={e => {
                                        setProduct({...product, image: e.target.value})
                                    }}
                                    name="image"
                                />
                                <span className="focus-border"></span>

                            </div>
                            <div>
                                <button onClick={handleSubmit}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
;

export default AddProductCurd;