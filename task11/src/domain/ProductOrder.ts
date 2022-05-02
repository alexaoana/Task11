import { Order } from "./Order";
import { Product } from "./Product";

export class ProductOrder {
    id: number;
    productId: number | undefined;
    product: Product | undefined;
    orderId: number | undefined;
    order: Order | undefined;
    name: string;
    description: string;
    amount: number;
    price: number;
    coffeeIntensity: number;
    quantity: number;

    constructor(id: number, product: Product, quantity: number) {
        this.id = id;
        this.name = product.name;
        this.description = product.description;
        this.amount = product.amount;
        this.price = product.price;
        this.coffeeIntensity = product.coffeeIntensity;
        this.quantity = quantity;
    }
}