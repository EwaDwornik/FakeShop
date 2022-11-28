import firebase from "./firebase";
import {ProductNoFuture} from "../model";

const db = firebase.ref("/add");

const getAll = () => {
    return db;
};


const create = (data: ProductNoFuture) => {
    return db.push(data);
};

const update = (key: string, data: any) => {
    return db.child(key).update(data);
};

const remove = (key: string) => {
    return db.child(key).remove();
};

const removeAll = () => {
    return db.remove();
};

export default {
    getAll,
    create,
    update,
    remove,
    removeAll,
};