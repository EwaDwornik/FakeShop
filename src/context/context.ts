import {createContext} from "react";
import {ContextType} from "../model";


export const Context = createContext<ContextType>({
        products: [],
        cartOpen: false,
        setCartOpen: () => {
        },
        handleAdd: () => [],
        getTotalItems: 0,
        handleRemove: () => [],
        storedItems: []
    }
)