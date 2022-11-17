export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number, count: number }
}

export interface Cart {
    productQuantity: number;
    title: string;
    totalElements: number;
    totalPrice: number;
}

export interface ContextType {
    products: Product[];
}

export interface Range {
    min: number,
    max: number
}