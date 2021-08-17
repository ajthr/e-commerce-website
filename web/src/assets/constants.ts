// constant values

import { menu } from './interfaces'

export const baseUri: string = window.location.origin

export const heroImage: string = "https://source.unsplash.com/jLEGurepDco/1600x800"

export const menMenu: menu[] = [
    {name : "Casual Shoes", keyword: ""},
    {name : "Formal Shoes", keyword: ""},
    {name : "Sports Shoes", keyword: ""},
    {name : "Sneakers", keyword: ""}
]

export const womenMenu: menu[] = [
    {name : "Boots", keyword: ""},
    {name : "Casual Shoes", keyword: ""},
    {name : "Sports Shoes", keyword: ""}
]

export const kidsMenu: menu[] = [
    {name : "Casual Shoes", keyword: ""},
    {name : "Casual Shoes", keyword: ""},
    {name : "Sports Shoes", keyword: ""}
]

export const profileMenu: menu[] = [
    {name : "Orders", keyword: ""},
    {name : "Contact Us", keyword: ""}
]

export const features: { feature: string, class: string }[] = [
    { feature: "Fast Delivery", class: "fas fa-truck fs-3" },
    { feature: "Return Policy", class: "fas fa-random fs-3" },
    { feature: "24/7 Support", class: "fas fa-headphones fs-3" },
    { feature: "Secure Payment", class: "fas fa-database fs-3" }
]

export const sortBy: string[] = [
    "Latest",
    "Price: High to Low",
    "Price: Low to High"
]
