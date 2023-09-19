import { DeliveryUser, User, Users, usersOptions } from "../types/types";

const users: Users = [
    {
        email: "standard_user",
        password: "secret_sauce"
    }
]
export const getUser = (user: usersOptions): User => {
    return users.find((credentials) => credentials.email === user);
}

export const deliveryUser: DeliveryUser = {
    name: 'Jan',
    surname: 'Kowalski',
    postCode: '00-001'
}
