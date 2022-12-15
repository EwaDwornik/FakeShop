import React, {useEffect, useState} from 'react';
import './styles/globals.scss';
import {ProductNoFuture} from "./model";
import {productsCollection} from "./services/firebase/firebase.utils";
import {Context} from "./context/context";
import 'animate.css';
import {getDocs} from "firebase/firestore";


const App = (props: any) => {
    const [products, setProducts] = useState<ProductNoFuture[]>([]);
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState<ProductNoFuture[]>([]);

    const getProducts = async () => {
        const notesSnapshot = await getDocs(productsCollection);
        const tempProducts: any = notesSnapshot.docs.map((doc) => doc.data());
        setProducts(tempProducts)
    }

    useEffect(() => {
        getProducts();
        const storedItems = JSON.parse(localStorage.getItem('items') || "")
        setCartItems(storedItems)
    }, [])


    const handleAdd = (clickedItem: ProductNoFuture) => {
        setCartItems(previous => {
            const isInCart = previous.find(item => item.id === clickedItem.id)

            if (isInCart) {
                return previous.map(item => (
                    item.id === clickedItem.id ? {...item, amountInCart: item.amountInCart + 1} : item
                ))
            }
            const newItems = [...previous, {...clickedItem, amountInCart: 1}]
            localStorage.setItem('items', JSON.stringify(newItems));
            return newItems
        })

    }
    const getTotalItems = (items: ProductNoFuture[]) => items.reduce((ack: number, item) => ack + item.amountInCart, 0);

    const handleRemove = (id: string) => {

        setCartItems(previous => {
                const newItems = previous.reduce((ack, item) => {
                    if (item.id === id) {
                        if (item.amountInCart === 1) return ack;
                        return [...ack, {...item, amountInCart: item.amountInCart - 1}];
                    } else {
                        return [...ack, item];
                    }
                }, [] as ProductNoFuture[])
                localStorage.setItem('items', JSON.stringify(newItems));

                return newItems
            }
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
                storedItems: cartItems
            }}>
                {/* sharing data with all children */}
                {props.children}

            </Context.Provider>

        </div>
    );
}

export default App;
