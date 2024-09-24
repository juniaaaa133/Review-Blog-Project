export interface User {
    email? : string,
    password? : string,
    pfp? : string | null,
    username? : string,
    isSuspended? : boolean,
    role? : string
    joinedDate? : string | Date
}