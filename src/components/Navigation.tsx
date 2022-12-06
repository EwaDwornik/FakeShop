import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {routes} from "../services/routes";
import Drawer from "@mui/material/Drawer";
import Cart from "./Cart/Cart";
import {Context} from "../context/context";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navigation = () => {
    const {cartOpen, setCartOpen, storedItems, getTotalItems, handleAdd, handleRemove} = useContext(Context)

    return (
        <header className="navigation">
            <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
                <Cart cartItems={storedItems}
                      addToCart={handleAdd}
                      removeFromCart={handleRemove}/>
            </Drawer>
            <div className="navigation-links">
                <Link to={routes.home}>Home</Link>
                <Link to={routes.addProduct}>Add product</Link>
                <Link to={routes.contact}>Contact</Link>
                <Link to={routes.login}>Login</Link>

                <div className="cart-open" onClick={() => setCartOpen(true)}>
                    <ShoppingCartIcon/>
                   {getTotalItems(storedItems)}
                </div>
            </div>
        </header>
    )
}

export default Navigation;

