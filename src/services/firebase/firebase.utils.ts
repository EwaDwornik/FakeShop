import {firestore} from "./firebase.config";

export const productsCollection = firestore.collection("products")

export const getProducts = () => {
    let tempProducts: any[] = []
    productsCollection.get().then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log(doc.data(), 'here')

            tempProducts = [...tempProducts, doc.data()]
        })
    }).then(() => {
        console.log(tempProducts, 'here')
    })
}
