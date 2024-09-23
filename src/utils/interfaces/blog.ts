export interface BLOG {
    title? : string,
    icon? : string,
    rating? : string,
    isOnline? : boolean | null,
    categories? : string[],
    size? : string,
    overview? : string,
    backdrop? : string,
    url? : string,
    releasedDate? : string,
}

export interface BLOGFORM {
    title? : string,
    overview? : string,
    url? : string,
    size? : string,
    releasedDate? : string,
    categories? : string[]
}