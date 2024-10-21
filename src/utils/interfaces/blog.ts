export interface BLOG {
    _id : string,
    title? : string,
    icon? : string,
    rating? : string,
    isOnline? : string ,
    categories : {_id: string,name:string}[],
    size? : string,
    overview? : string,
    backdrop? : string,
    gameUrl? : string,
    releasedDate? : string,
    intro? : string
}

export interface BLOGFORM {
    title? : string,
    overview? : string,
    url? : string,
    size? : string,
    releasedDate? : string,
    categories? : string[]
}