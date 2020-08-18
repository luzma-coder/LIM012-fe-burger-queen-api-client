export interface User {
    id?: number;
    email: string;
    password: string;
    roles: {
        admin: boolean;
    };
}
