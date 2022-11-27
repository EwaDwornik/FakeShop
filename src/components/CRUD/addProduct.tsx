import React, { useState } from "react";
import TutorialDataService from "../../services/product.service";

const AddProduct = () => {
    const initialState = {
        id: 3,
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        rating: "",
        amount: "",
    };


    const [product, setProduct] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value });
    };

    const saveTutorial = () => {
        var data = {
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image,
            rating: product.rating,
            amount: product.amount,
        };

        TutorialDataService.create(data)
            .then(() => {
                setSubmitted(true);
            })
            .catch((e: any) => {
                console.log(e);
            });
    };

    const newTutorial = () => {
        setProduct(initialState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newTutorial}>
                        Add
                    </button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="title">ID</label>
                        <input
                            type="text"
                            className="form-control"
                            id="id"
                            required
                            value={product.id}
                            onChange={handleInputChange}
                            name="id"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            required
                            value={product.title}
                            onChange={handleInputChange}
                            name="title"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Price</label>
                        <input
                            type="text"
                            className="form-control"
                            id="price"
                            required
                            value={product.price}
                            onChange={handleInputChange}
                            name="price"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            required
                            value={product.description}
                            onChange={handleInputChange}
                            name="description"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">category</label>
                        <input
                            type="text"
                            className="form-control"
                            id="category"
                            required
                            value={product.category}
                            onChange={handleInputChange}
                            name="category"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">image</label>
                        <input
                            type="text"
                            className="form-control"
                            id="image"
                            required
                            value={product.image}
                            onChange={handleInputChange}
                            name="image"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">rating</label>
                        <input
                            type="text"
                            className="form-control"
                            id="rating"
                            required
                            value={product.rating}
                            onChange={handleInputChange}
                            name="rating"
                        />
                    </div><div className="form-group">
                    <label htmlFor="title">amount</label>
                    <input
                        type="text"
                        className="form-control"
                        id="amount"
                        required
                        value={product.amount}
                        onChange={handleInputChange}
                        name="amount"
                    />
                </div>
                    <button onClick={saveTutorial} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};

export default AddProduct;