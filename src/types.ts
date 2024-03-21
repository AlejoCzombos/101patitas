export interface Product {
    name: string;
    description: string;
    category: string;
    shape: string;
    price: number;
    images?: string[];
}

export interface Order {
    model: string;
    name: string | null;
    phone: string | null;
    backgroundColor: string | null;
    frontColor: string | null;
    waist: string | null;
}