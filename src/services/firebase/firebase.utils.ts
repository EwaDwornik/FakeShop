import {firestore} from "./firebase.config";
import { collection } from "firebase/firestore";


export const productsCollection = collection(firestore, "products")


