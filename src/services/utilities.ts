import {ProductNoFuture} from "../model";
import {v4 as uuidv4} from "uuid";

export const categories: string[] = ["no future", "inhale exhale"]

export const initialStateAddForm: ProductNoFuture = {
    id: uuidv4(),
    category: "",
    description: "",
    image: "",
    price: 10,
    title: "",
    amountInCart: 0,
};