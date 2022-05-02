import { Product } from "./Product";

export class Image {
    id: number;
    azurePath: string;
    productId: number | undefined;
    product: Product | undefined;

    constructor(id: number, azurePath: string) {
        this.id = id;
        this.azurePath = azurePath;
    }
}