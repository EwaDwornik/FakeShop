export interface ProductNoFuture {
    id: string;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amountInCart: number;
}

export interface addOrEditProps {
    addOrEdit: (clickedItem: ProductNoFuture) => void;
    currentId: string;
}

export interface ContextType {
    products: ProductNoFuture[];
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