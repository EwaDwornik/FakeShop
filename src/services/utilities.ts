import {ProductNoFuture} from "../model";
import {v4 as uuidv4} from "uuid";
import { getDocs} from "firebase/firestore";
import {productsCollection} from "./firebase/firebase.utils";


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

export const getProducts = async (setProducts: any) => {
    const notesSnapshot = await getDocs(productsCollection);
    const tempProducts: any = notesSnapshot.docs.map((doc) => doc.data());
    setProducts(tempProducts)
}

export const getTotalItems = (items: ProductNoFuture[]) => items.reduce((ack: number, item) => ack + item.amountInCart, 0);
