export interface UserInteface{
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    //repeatPassword: string;
}

/*
* interface Credentials {
* email: string;
* password: string;
* */

//export type UserLoginOptionalInterface = Omit<UserInteface, "id" | "firstName" | "lastName" | "phone" | "repeatPassword">

export type UserLoginInterface = Pick<UserInteface, "email" | "password">;