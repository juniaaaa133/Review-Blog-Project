export interface User {
    _id? : string
    email? : string,
    password? : string,
    pfp? : string | null,
    username? : string,
    isSuspended? : boolean,
    role? : string
    joinedDate? : string | Date
    authToken? : string ,
    tokenExp? : string
}