import { IUserRepository } from "../abstract/IUserRepository";
import { User } from "../domain/User";

export class UserRepository implements IUserRepository {
    private users: Array<User> = [];
    addUser(user: User): void {
        this.users.push(user);
    }
    removeUser(id: number): void {
        var user = this.findUser(id);
        if (user !== undefined)
            this.users.splice(this.users.indexOf(user), 1);
    }
    updateUser(user: User): void {
        var index = this.users.findIndex(u => u.id = user.id);
        this.users[index] = user;
    }
    findUser(id: number): User | undefined {
        return this.users.find(user => user.id = id);
    }
    findUsers(): User[] {
        throw new Error("Method not implemented.");
    }
}