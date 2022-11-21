import React, {useEffect, useState} from 'react';
import './styles/globals.scss';
import { Product} from "./model";
import {Context} from "./context/context";


function App(props: any) {
    const [products, setProducts] = useState<Product[]>([]);


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
                products
            }}>
                {/* sharing data with all children */}
                {props.children}

            </Context.Provider>

        </div>
    );
}

export default App;
