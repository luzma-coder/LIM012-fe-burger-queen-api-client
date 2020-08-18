import { User } from './../app/interfaces/user';

export const USERS: User[] = [
  { id: 11, email: 'admin@burguer.com', password: '123456', roles: {admin: true}},
  { id: 12, email: 'worker1@burguer.com', password: '222222', roles: {admin: false} },
  { id: 13, email: 'worker2@burguer.com', password: '333333', roles: {admin: false} },
  { id: 14, email: 'worker3@burguer.com', password: '444444', roles: {admin: false} },
  { id: 15, email: 'kitchen@burguer.com', password: '555555', roles: {admin: false} },
  { id: 16, email: 'nuevo@burguer.com', password: '666666', roles: {admin: false} }
];

export const dataUSER: User = {
    id: 11,
    email: 'prueba@burguer.com',
    password: '123456',
    roles: { admin: true }
};
