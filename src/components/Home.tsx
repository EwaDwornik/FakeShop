import React, {useState} from 'react';
import ProductCards from "./ProductCard/ProductCards";
import { ProductNoFuture} from "../model";
import Drawer from "@mui/material/Drawer";
import Cart from "./Cart/Cart";


function Home() {
    const [cartItems, setCartItems] = useState<ProductNoFuture[]>([])
    const [cartOpen, setCartOpen] = useState(false);

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