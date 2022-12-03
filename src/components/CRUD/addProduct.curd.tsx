import React, {useEffect, useState} from "react";
import {categories, initialStateAddForm} from "../../services/utilities";
import {productsCollection} from "../../services/firebase/firebase.utils";

const AddProductCurd = ({addOrEdit, currentId}: any) => {

        const [product, setProduct] = useState(initialStateAddForm);
        const [submitted, setSubmitted] = useState(false);

        const handleSubmit = async (e: any) => {
            e.preventDefault();
            setSubmitted(true);
            addOrEdit(product);
            setProduct({...initialStateAddForm});
        };

        const getLinkById = async (id: any) => {
            const doc = await productsCollection.doc(id).get();
            console.log(doc.data());
            // @ts-ignore
            setProduct({...doc.data()});
        };

        const handleInputChange = (e: any) => {
            const {name, value} = e.target;
            setProduct({...product, [name]: value});
        };

        const newProduct = () => {
            setSubmitted(false);
        };

        useEffect(() => {
            if (currentId === "") {
                setProduct({...initialStateAddForm});
            } else {
                getLinkById(currentId);
            }
        }, [currentId]);


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
                                    onChange={handleInputChange}

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
                                    onChange={handleInputChange}

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
                                    onChange={handleInputChange}

                                    name="description"
                                />
                                <span className="focus-border"></span>

                            </div>

                            <div className="pos-relative">
                                <label className="form-label">category</label>
                                <select className="effect-green"
                                        name="category"
                                        onChange={handleInputChange}
                                >
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
                                    onChange={handleInputChange}

                                    name="image"
                                />
                                <span className="focus-border"></span>

                            </div>
                            <div>
                                <button onClick={handleSubmit}>
                                    {currentId === "" ? "Save" : "Update"}
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