import React, {useEffect, useState} from 'react';
import './styles/globals.scss';
import {ProductNoFuture} from "./model";
import {Context} from "./context/context";
import {productsCollection} from "./services/firebase/firebase.utils";

function App(props: any) {
    const [products, setProducts] = useState<ProductNoFuture[]>([]);

    const getProducts = async () => {
        let tempProducts: any[] = []
        productsCollection.get().then((snapshot) => {
            snapshot.forEach((doc) => {
                tempProducts = [...tempProducts, doc.data()]
            })
        }).then(() => {
            setProducts(tempProducts)
        })
    }

    useEffect(() => {
        getProducts();
    }, [])



    return (
        <div>
            <Context.Provider value={{
                products
            }}>
                {/* sharing data with all children */}
                {props.children}

            </Context.Provider>

        </div>
    );
}

export default App;
