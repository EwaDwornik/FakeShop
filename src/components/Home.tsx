import React, {useState} from 'react';
import ProductCards from "./ProductCards";
import {Product} from "../model";
import Drawer from "@mui/material/Drawer";
import Cart from "./Cart/Cart";


function Home() {
    const [cartItems, setCartItems] = useState<Product[]>([])
    const [cartOpen, setCartOpen] = useState(false);

    const handleAdd = (clickedItem: Product) => {
        setCartItems(previous => {
            const isInCart = previous.find(item => item.id === clickedItem.id)
            if (isInCart) {
                return previous.map(item => (
                    item.id === clickedItem.id ? {...item, amount: item.amount + 1} : item
                ))
            }
            return [...previous, {...clickedItem, amount: 1}]
        })
    }

    const getTotalItems = (items: Product[]) => items.reduce((ack: number, item) => ack + item.amount, 0);

    const handleRemove = (id: number) => {
        setCartItems(previous =>
            previous.reduce((ack, item) => {
                if (item.id === id) {
                    if (item.amount === 1) return ack;
                    return [...ack, {...item, amount: item.amount - 1}];
                } else {
                    return [...ack, item];
                }
            }, [] as Product[])
        );
    };

    return (
        <div>
            <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
                <Cart cartItems={cartItems}
                      addToCart={handleAdd}
                      removeFromCart={handleRemove}/>
            </Drawer>

            <button className="cart-open" onClick={() => setCartOpen(true)}>
                Cart {getTotalItems(cartItems)}
            </button>
            <ProductCards handleAdd={handleAdd}/>
        </div>
    )
}

export default Home;