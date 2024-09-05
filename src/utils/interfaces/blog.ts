export interface BLOG {
    title : string,
    poster : string,
    rating : string,
    isOnline : boolean | null,
    category : string,
    // size : string,
    // overview : string,
    // backdrop : string,
    // url : string,
    // releaseDate : string,
}

export interface BLOGFORM {
    title? : string,
    overview? : string,
    url? : string,
    size? : string,
    releasedDate? : string,
}