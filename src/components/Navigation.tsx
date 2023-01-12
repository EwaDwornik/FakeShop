import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {routes} from "../services/routes";
import Drawer from "@mui/material/Drawer";
import Cart from "./Cart/Cart";
import {Context} from "../context/context";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {firestore} from "../services/firebase/firebase.config";
import {collection, getDocs, query, where} from "firebase/firestore";
import {logout} from "../services/authentications";
import {useLoginAuth} from "../hooks/useLoginAuth";
import Switcher from "./Switcher";

const Navigation = () => {
    const {cartOpen, setCartOpen, storedItems, getTotalItems, handleAdd, handleRemove} = useContext(Context)

    const {user} = useLoginAuth()
    const [name, setName] = useState("");

    const fetchUserName = async () => {
        try {
            const q = query(collection(firestore, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);

        }
    };
    useEffect(() => {
        fetchUserName();
    }, [user]);

    return (
        <header className="navigation">
            <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
                <Cart cartItems={storedItems}
                      addToCart={handleAdd}
                      removeFromCart={handleRemove}/>
            </Drawer>
            <div className="navigation-links ">
                <Link to={routes.home}>Home</Link>
                <Link to={routes.shop}>Shop</Link>
                <Link to={routes.contact}>Contact</Link>
                {user === null ? <Link to={routes.login}>Login</Link> : <>
                    <Link to={routes.addProduct}>Add product</Link>
                    <div onClick={logout}>
                        Logout
                    </div>
                </>}
                <div className="cart-open" onClick={() => setCartOpen(true)}>
                    <ShoppingCartIcon/>
                    {getTotalItems(storedItems)}
                </div>
                {user === null ? <p></p> : <p className="font-normal text-gray-700
                            dark:text-gray-400">Hello {name}!</p>}
                <Switcher/>

            </div>

        </header>
    )
}

export default Navigation;

