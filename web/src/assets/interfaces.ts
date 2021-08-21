import React from 'react';

export interface context {
    user: boolean | null,
    setUser: Function | null,
    modal: boolean | null,
    setModal: Function | null
}

export interface product {
    _id: string,
    name: string,
    shortname: string,
    vendor: string,
    price: number,
    msrp: number,
    description: string,
    images: string[],
    createdAt: Date
}

export interface menu {
    name: string,
    keyword: string
}

export interface category {
    name: string,
    image: string
}

export interface brand { 
    name: string, 
    image: string 
}

export interface filter { 
    value: string,
    checked: boolean
}
