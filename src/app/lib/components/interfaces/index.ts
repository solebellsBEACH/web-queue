export interface Address {
    street: string;
    number: number;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
}

export interface Contact {
    phone: string;
    email: string;
    website: string;
}

export interface Hours {
    mondayToFriday: string;
    saturday: string;
    sunday: string;
}

export interface Rating {
    average: number;
    comments: Comment[];
}

export interface Comment {
    user: string;
    comment: string;
    rating: number;
}

export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    description: string;
    stock: number;
}

export interface ShopProfile {
    id: number;
    qrCode: string;
    name: string;
    address: Address;
    contact: Contact;
    hours: Hours;
    rating: Rating;
}

export interface ShopProducts {
    id: number;
    qrCode: string;
    name: string;
    hours: Hours;
    products: Product[];
}
