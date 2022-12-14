import React, {useEffect, useState} from "react";
import {categories, initialStateAddForm} from "../../services/utilities";
import {AddOrEditProps} from "../../model";
import { doc, getDoc } from "firebase/firestore";
import {firestore} from "../../services/firebase/firebase.config";


const AddProductCurd = ({addOrEdit, currentId}: AddOrEditProps) => {
        const [product, setProduct] = useState(initialStateAddForm);
        const [submitted, setSubmitted] = useState(false);

        const handleSubmit = async (e: any) => {
            e.preventDefault();
            setSubmitted(true);
            addOrEdit(product);
            setProduct({...initialStateAddForm});
        };

        const getProductById = async (id: string) => {
            const docRef = doc(firestore, "products", id);
            const docSnap = await getDoc(docRef);

            // @ts-ignore
            setProduct({...docSnap.data()});
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
                getProductById(currentId);
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
                                    className="effect-underline"
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
                                    className="effect-underline"
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
                                    className="effect-underline"
                                    value={product.description}
                                    onChange={handleInputChange}
                                    name="description"
                                />
                                <span className="focus-border"></span>

                            </div>

                            <div className="pos-relative">
                                <label className="form-label">category</label>
                                <select className="effect-underline"
                                        name="category"
                                        onChange={handleInputChange}
                                        value={product.category}
                                >
                                    {categories.map((category) =>
                                        <option value={category}>{category}</option>)}
                                </select>
                                <span className="focus-border"></span>
                            </div>

                            <div className="pos-relative">
                                <label className="form-label">image</label>
                                <input
                                    type="field"
                                    className="effect-underline"
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