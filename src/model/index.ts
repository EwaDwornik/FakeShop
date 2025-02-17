export interface ProductNoFuture {
    id: string;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amountInCart: number;
}

export interface AddOrEditProps {
    addOrEdit: (clickedItem: ProductNoFuture) => void;
    currentId: string;
}

export interface ContextType {
    products: ProductNoFuture[];
    cartOpen: boolean;
    setCartOpen: (value: boolean) => void;
    handleAdd: (value: ProductNoFuture) => void;
    getTotalItems: any;
    handleRemove: (value: string) => void;
    storedItems: ProductNoFuture[];
}

export interface ContextUserType {
    user: any,
    loading: any,
    name: any,
    setName: any ;
}

export interface PropsCard {
    product: ProductNoFuture;
    handleAdd: (clickedItem: ProductNoFuture) => void;
}

export interface PropsCart {
    cartItems: ProductNoFuture[];
    addToCart: (clickedItem: ProductNoFuture) => void;
    removeFromCart: (id: string) => void;
}

export interface PropsItem {
    item: ProductNoFuture
    addToCart: (clickedItem: ProductNoFuture) => void;
    removeFromCart: (id: string) => void;
}

export interface PropsCards {
    handleAdd: (clickedItem: ProductNoFuture) => void;
}


export interface ContactValues {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface UserInterface {
    name: string;
    email: string;
    password: string
}