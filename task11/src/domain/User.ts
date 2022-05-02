import { Address } from "cluster";
import { Order } from "./Order";

export class User {
    id: number;
    firstName: string;
    lastName: string;
    discount: number;
    email: string;
    password: string;
    address: Address;
    orders: Array<Order> | undefined;

    constructor(id: number, firstName: string, lastName: string, email: string, password: string, address: Address) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.discount = 0;
        this.address = address;
    }

    print() {
        return() => {
            return "This user has id = " + this.id + "\nFull name is: " + this.firstName + " " + this.lastName +
                "\nAccount details are: email: " + this.email + " and password: " + this.password +
                "\nCurrent discount is: " + this.discount + "\nThis user has: " + this.orders?.length + " past orders";
        }
    }
}