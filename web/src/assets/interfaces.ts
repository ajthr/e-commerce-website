import { RouteComponentProps } from 'react-router-dom';

export interface props{
    history: RouteComponentProps["history"];
    location: RouteComponentProps['location'];
    match: RouteComponentProps['match'];
}

export interface product {
    _id: string,
    name: string,
    shortname: string,
    vendor: string,
    price: number,
    msrp: number,
    description: string,
    images: string[]
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
