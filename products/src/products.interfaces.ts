export interface product {
    _id: string,
    createdAt: Date,
    name: string,
    category: string,
    description: string,
    price: number,
    msrp: number,
    vendor: string,
    sizes: [{
        size: string,
        quantity: number
    }],
    specifications: [{
        specification: string,
        value: string
    }],
    images: string[]
}
