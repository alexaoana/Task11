import { User } from "./User";

export class Address {
    public id: number;
    public city: string;
    public street: string;
    public number: string;
    public userId: number | undefined;
    public user: User | undefined;

    constructor(id: number, city: string, street: string, number: string) {
        this.id = id;
        this.city = city;
        this.street = street;
        this.number = number;
    }
}