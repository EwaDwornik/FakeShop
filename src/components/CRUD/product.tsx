import React, {useState} from "react";
import ProductDataService from "../../services/product.service";
import {ProductNoFuture} from "../../model";
import {generateID} from "../../services/utilities";

const Product = (props: any) => {
    const initialState: ProductNoFuture & { key: string } = {
        key: "",
        id: generateID(),
        category: "",
        description: "",
        image: "",
        price: 0.1,
        title: "",
    };

    const [currentProduct, setCurrentProduct] = useState(initialState);
    const [message, setMessage] = useState("");

    const {product} = props;
    if (currentProduct.key !== product.key) {
        setCurrentProduct(product);
        setMessage("");
    }

    const handleInputChange = (event: any) => {
        const {name, value} = event.target;
        setCurrentProduct({...currentProduct, [name]: value});
    };

    const updateTutorial = () => {
        const data = {
            category: product.category,
            description: product.description,
            image: product.image,
            price: product.price,
            title: product.title,
        };

        ProductDataService.update(currentProduct.key, data)
            .then(() => {
                setMessage("The product was updated successfully!");
            })
            .catch((e: any) => {
                console.log(e);
            });
    };

    const deleteTutorial = () => {
        ProductDataService.remove(currentProduct.key)
            .then(() => {
                props.refreshList();
            })
            .catch((e: any) => {
                console.log(e);
            });
    };

    return (
        <div>
            {currentProduct ? (
                <div className="edit-form">
                    <h4>Tutorial</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                value={currentProduct.title}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                name="description"
                                value={currentProduct.description}
                                onChange={handleInputChange}
                            />
                        </div>


                    </form>



                    <button className="badge badge-danger mr-2" onClick={deleteTutorial}>
                        Delete
                    </button>

                    <button
                        type="submit"
                        className="badge badge-success"
                        onClick={updateTutorial}
                    >
                        Update
                    </button>
                    <p>{message}</p>
                </div>
            ) : (
                <div>
                    <br />
                    <p>Please click on a Product...</p>
                </div>
            )}
        </div>
    );

}

export default Product;