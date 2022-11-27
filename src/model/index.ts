export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number, count: number };
    amount: number;
}


export interface ProductNoFuture {
    amount: number;
    category: string;
    description: string;
    image: string;
    price: number;
    rating: number;
    title: string;
}


export interface ContextType {
    products: Product[];
}

export interface Range {
    min: number,
    max: number
}

export interface PropsCard {
    product: Product;
    handleAdd: (clickedItem: Product) => void;
}

export interface PropsCart {
    cartItems: Product[];
    addToCart: (clickedItem: Product) => void;
    removeFromCart: (id: number) => void;
}

export interface PropsItem {
    item: Product
    addToCart: (clickedItem: Product) => void;
    removeFromCart: (id: number) => void;
}

export interface PropsCards {
    handleAdd: (clickedItem: Product) => void;
}