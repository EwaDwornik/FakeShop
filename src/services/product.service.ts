import firebase from "./firebase";

const db = firebase.ref("/add");

const getAll = () => {
    return db;
};

const create = (data: { image: string; amount: string; price: string; rating: string; description: string; id: number; title: string; category: string }) => {
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