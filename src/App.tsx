import React, {useEffect, useState} from 'react';
import './styles/globals.scss';
import {Product, ProductNoFuture} from "./model";
import {Context} from "./context/context";
import {productsCollection} from "./services/firebase/firebase.utils";

function App(props: any) {
    const [products, setProducts] = useState<Product[]>([]);
    const [info , setInfo] = useState<ProductNoFuture[]>([]);

    const getProducts = async () => {
        let tempProducts: any[] = []
        productsCollection.get().then((snapshot) => {
            snapshot.forEach((doc) => {
                tempProducts = [...tempProducts, doc.data()]
            })
        }).then(() => {
            setInfo(tempProducts)
        })
    }
    useEffect(() => {
        getProducts()
    }, [])


    //fetching data from API
    const getData = async () => {
        // const response = await fetch("https://fakestoreapi.com/products/");
        // const data = await response.json();
        // setProducts(data.results)
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }

    useEffect(() => {
        getData()
    }, [])



    return (
        <div>
            <Context.Provider value={{
                products, info
            }}>
                {/* sharing data with all children */}
                {props.children}

            </Context.Provider>

        </div>
    );
}

export default App;
