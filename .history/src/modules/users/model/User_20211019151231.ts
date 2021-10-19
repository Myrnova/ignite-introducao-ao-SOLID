import { v4 as uuidv4 } from "uuid";

class User {
    id: string;
    name: string;
    admin: boolean;
    email: string;
    created_at: Date;
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
            this.created_at = new Date();
        } else this.updated_at = new Date();
    }
}

export { User };