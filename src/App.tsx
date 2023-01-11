import React, {useEffect, useState} from 'react';
import './styles/globals.scss';
import {ProductNoFuture} from "./model";
import {Context} from "./context/context";
import 'animate.css';
import {collection, getDocs, query, where} from "firebase/firestore";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, firestore} from "./services/firebase/firebase.config";
import {useNavigate} from "react-router-dom";
import {getProducts, getTotalItems} from "./services/utilities";


const App = (props: any) => {
    const [products, setProducts] = useState<ProductNoFuture[]>([]);
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState<ProductNoFuture[]>([]);


    useEffect(() => {
        getProducts(setProducts);
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
        <div>
            <Context.Provider value={{
                products,
                cartOpen,
                setCartOpen,
                handleAdd,
                getTotalItems,
                handleRemove,
                storedItems: cartItems,

            }}>
                {/* sharing data with all children */}
                {props.children}

            </Context.Provider>

        </div>
    );
}

export default App;
