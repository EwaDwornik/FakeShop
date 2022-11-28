import React, {useState} from "react";
import ProductDataService from "../../services/product.service";
import {categories, generateID} from "../../services/utilities";
import {ProductNoFuture} from "../../model";

const AddProduct = () => {
    const initialState: ProductNoFuture = {
        id: 0,
        category: "",
        description: "",
        image: "",
        price: 0.1,
        title: "",
    };


    const [product, setProduct] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const {name, value} = event.target;
        setProduct({...product, [name]: value});
    };

    const saveProduct = () => {
        var data = {
            id: generateID(),
            category: product.category,
            description: product.description,
            image: product.image,
            price: product.price,
            title: product.title,
        };

        ProductDataService.create(data)
            .then(() => {
                setSubmitted(true);
            })
            .catch((e: any) => {
                console.log(e);
            });
    };

    const newProduct = () => {
        setProduct(initialState);
        setSubmitted(false);
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
                            <select onChange={handleInputChange}
                                    className="effect-green">
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
                            <button onClick={saveProduct}>
                                Submit
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddProduct;