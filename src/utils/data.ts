import { BLOG } from "./interfaces/blog";
import { CATEGORY } from "./interfaces/category";

export const blogs : BLOG[] = [
    {
        title : "King of Thieves",
        poster : "https://i.pinimg.com/236x/6e/b0/26/6eb0264b2ffdb84eb6a47e5f44bbea88.jpg",
        isOnline : true,
        rating : '3.5',
        category : 'Strategy'
    },
    {
        title : "Squad Busters",
        poster : "https://i.pinimg.com/236x/e6/44/c6/e644c63432c9ac44a1827167218df8af.jpg",
        isOnline : true,
        rating : '3.6',
        category : 'Action'
    },
]

export const categories : CATEGORY[] = [
    {name : "Action"},
    {name : "Adventure"},
    {name : "Arcade"},
    {name : "Board"},
    {name : "Card"},
    {name : "Casion"},
    {name : "Casual"},
    {name : "Educational"},
    {name : "Puzzle"},
    {name : "Racing"},
    {name : "Music"},
    {name : "Role Playing"},
    {name : "Simulation"},
    {name : "Sports"},
    {name : "Strategy"},
    {name : "Survival"},
    {name : "Word"},
]