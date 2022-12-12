import React, {useEffect, useState} from 'react';
import './styles/globals.scss';
import {ProductNoFuture} from "./model";
import {productsCollection} from "./services/firebase/firebase.utils";
import {Context} from "./context/context";
import 'animate.css';

const App = (props: any) => {
    const [products, setProducts] = useState<ProductNoFuture[]>([]);
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState<ProductNoFuture[]>( []);


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


    localStorage.setItem('items', JSON.stringify(cartItems));
    const storedItems = JSON.parse(localStorage.getItem('items') || "")

    const handleAdd = (clickedItem: ProductNoFuture) => {
        setCartItems(previous => {
            const isInCart = previous.find(item => item.id === clickedItem.id)

            if (isInCart) {
                return previous.map(item => (
                    item.id === clickedItem.id ? {...item, amountInCart: item.amountInCart + 1} : item
                ))
            }
            return [...previous, {...clickedItem, amountInCart: 1}]
        })
    }
    const getTotalItems = (items: ProductNoFuture[]) => items.reduce((ack: number, item) => ack + item.amountInCart, 0);

    const handleRemove = (id: string) => {
        setCartItems(previous =>
            previous.reduce((ack, item) => {
                if (item.id === id) {
                    if (item.amountInCart === 1) return ack;
                    return [...ack, {...item, amountInCart: item.amountInCart - 1}];
                } else {
                    return [...ack, item];
                }
            }, [] as ProductNoFuture[])
        );
    };


    return (
        <div>
            <Context.Provider value={{
                products,
                cartOpen,
                setCartOpen,
                handleAdd,
                getTotalItems,
                handleRemove,
                storedItems
            }}>
                {/* sharing data with all children */}
                {props.children}

            </Context.Provider>

        </div>
    );
}

export default App;
