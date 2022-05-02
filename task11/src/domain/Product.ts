import { ProductUnit } from "../enums/ProductUnit";
import { Image } from "./Image";
import { ProductOrder } from "./ProductOrder";

export class Product {
    id: number;
    name: string;
    description: string;
    amount: number;
    price: number;
    productUnit: ProductUnit;
    coffeeIntensity: number;
    image: Image;
    productOrders: Array<ProductOrder> | undefined;

    constructor(id: number, name: string, description: string, amount: number, price: number, 
        productUnit: ProductUnit, coffeeIntensity: number, image: Image) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.amount = amount;
            this.price = price;
            this.productUnit = productUnit;
            this.coffeeIntensity = coffeeIntensity;
            this.image = image;
        }
}