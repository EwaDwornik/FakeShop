import React, {useEffect, useState} from "react";
import {categories, initialStateAddForm} from "../../services/utilities";
import {AddOrEditProps} from "../../model";
import {doc, getDoc} from "firebase/firestore";
import {firestore, storage} from "../../services/firebase/firebase.config";

import {getDownloadURL, ref, uploadBytesResumable} from "@firebase/storage";
import { motion } from "framer-motion";


const AddProductCurd = ({addOrEdit, currentId}: AddOrEditProps) => {
        const [product, setProduct] = useState(initialStateAddForm);
        const [submitted, setSubmitted] = useState(false);
        const [progresspercent, setProgresspercent] = useState(0);

        //const {user} = useUser()

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
            setProduct({...product, [name]: value})
        };

        const handlePhoto = (e: any) => {
            e.preventDefault()
            const file = e.target.files[0]
            if (!file) return;
            const storageRef = ref(storage, `files/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on("state_changed",
                (snapshot) => {
                    const progress =
                        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgresspercent(progress);
                },
                (error) => {
                    alert(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setProduct({...product, image: downloadURL})
                    });
                }
            );

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
                <motion.div className="formAddProduct"
                >
                    {submitted ? (
                        <div>
                            <p>You submitted successfully!</p>
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
                                    type="file"
                                    className="effect-underline"
                                    onChange={handlePhoto}
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
                </motion.div>
            </div>
        );
    }
;

export default AddProductCurd;