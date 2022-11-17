import {createContext} from "react";
import {ContextType} from "../model";


export const Context = createContext<ContextType>({
    products: [],
})

