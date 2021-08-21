// constant values

import { menu, filter } from './interfaces'

export const baseUri: string = window.location.origin

export const heroImage: string = "https://source.unsplash.com/jLEGurepDco/1600x800"

export const menMenu: menu[] = [
    {name : "Sneakers", keyword: "?category=sneakers&gender=men"},
    {name : "Loafers", keyword: "?category=loafers&gender=men"},
    {name : "Boots", keyword: "?category=boots&gender=men"},
    {name : "Sports", keyword: "?category=sports&gender=men"}
]

export const womenMenu: menu[] = [
    {name : "Sneakers", keyword: "?category=sneakers&gender=women"},
    {name : "Boots", keyword: "?category=boots&gender=women"},
    {name : "Heels", keyword: "?category=heels&gender=women"},
    {name : "flats", keyword: "?category=flats&gender=women"}
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

export const sortBy: menu[] = [
    { name: "Latest", keyword: "" },
    { name: "Price: High to Low", keyword: "price_dsc" },
    { name: "Price: Low to High", keyword: "price_asc" }
]

export const Brands: filter[] = [
    { value: "nike", checked: false },
    { value: "adidas", checked: false },
    { value: "puma", checked: false },
    { value: "roadster", checked: false }
]

export const Colors: filter[] = [
    { value: "black", checked: false },
    { value: "white", checked: false },
    { value: "red", checked: false },
    { value: "green", checked: false }
]
