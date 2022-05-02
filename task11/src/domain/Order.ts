import { OrderStatus } from "../enums/OrderStatus";
import { ProductOrder } from "./ProductOrder";
import { User } from "./User";

export class Order {
    id: number;
    orderStatus: OrderStatus;
    userId: number | undefined;
    user: User | undefined;
    productOrders: Array<ProductOrder> = [];
    readonly price: number = this.productOrders.reduce((sum, productOrder) => sum + productOrder.price, 0);
    readonly numberOfProducts: number = this.productOrders.length;
    
    constructor(id: number) {
        this.id = id;
        this.orderStatus = OrderStatus.InProgress;
    }
}