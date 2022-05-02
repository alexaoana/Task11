import { User } from "../domain/User";

export interface IUserRepository {
    addUser(user: User): void;
    removeUser(id: number): void;
    updateUser(user: User): void;
    findUser(id: number): User | undefined;
    findUsers(): Array<User>;
}