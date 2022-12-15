import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {routes} from "../services/routes";
import Drawer from "@mui/material/Drawer";
import Cart from "./Cart/Cart";
import {Context} from "../context/context";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, firestore} from "../services/firebase/firebase.config";
import {collection, getDocs, query, where} from "firebase/firestore";
import {logout} from "../services/providers/authentications";

const Navigation = () => {
    const {cartOpen, setCartOpen, storedItems, getTotalItems, handleAdd, handleRemove} = useContext(Context)

    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("");

    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
            const q = query(collection(firestore, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occurred while fetching user data");
        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchUserName();
    }, [user, loading]);

    return (
        <header className="navigation">
            <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
                <Cart cartItems={storedItems}
                      addToCart={handleAdd}
                      removeFromCart={handleRemove}/>
            </Drawer>
            <div className="navigation-links">
                <Link to={routes.home}>Home</Link>
                <Link to={routes.shop}>Shop</Link>
                <Link to={routes.addProduct}>Add product</Link>
                <Link to={routes.contact}>Contact</Link>
                {user === null ? <Link to={routes.login}>Login</Link> : <>
                    <p>Logged in as {name}</p>
                    <button onClick={logout}>
                        Logout
                    </button>
                </>}
                <div className="cart-open" onClick={() => setCartOpen(true)}>
                    <ShoppingCartIcon/>
                    {getTotalItems(storedItems)}
                </div>
            </div>
        </header>
    )
}

export default Navigation;

