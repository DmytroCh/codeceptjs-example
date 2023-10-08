export type User = {
    email: string,
    password: string
}

export type Users = Array<User>;

export type DeliveryUser = {
    name: string,
    surname: string,
    postCode: string
}

export enum usersOptions {
    standardUser = "standard_user",
    problemUser = "problem_user",
    lockedOutUser = "locked_out_user",
    performanceGlitchUser = "performance_glitch_user"
}