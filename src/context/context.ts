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

// export const ContextUser = createContext<ContextUserType>({
//     user: auth,
//     loading: auth,
//     name: '',
//     setName: () => {
//     },
// }
// )