export type User = {
    email: string,
    password: string
}

export type Users = [User];

export type DeliveryUser = {
    name: string,
    surname: string,
    postCode: string
}

export enum usersOptions {
    standardUser = "standard_user"
}