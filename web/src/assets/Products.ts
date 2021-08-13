// contains temperory constants for development

import { brand, product } from './interfaces'

export const CategoriesToBag: { name: string, image: string }[] = [
    { name: "sneakers", image: "https://source.unsplash.com/XZ3EmAIWuz0" },
    { name: "casuals", image: "https://source.unsplash.com/XZ3EmAIWuz0" },
    { name: "boots", image: "https://source.unsplash.com/XZ3EmAIWuz0" },
    { name: "sports", image: "https://source.unsplash.com/XZ3EmAIWuz0" }
]

export const LatestArrivals: product[] = [
    {
        name: "Men Galaxy 5 New Series",
        vendor: "Adidas",
        price: 80,
        msrp: 89,
        images: ["https://source.unsplash.com/JM-qKEd1GMI",
            "https://source.unsplash.com/fUEP0djb1hA"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum beatae, sequi perspiciatis molestiae, commodi et, eaque ipsa quidem veritatis quisquam accusamus! Sequi exercitationem placeat qui, nulla tempora culpa asperiores quod."
    },
    {
        name: "Men Leather Sneakers",
        vendor: "Puma",
        price: 80,
        msrp: 89,
        images: ["https://source.unsplash.com/JM-qKEd1GMI",
            "https://source.unsplash.com/fUEP0djb1hA"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum beatae, sequi perspiciatis molestiae, commodi et, eaque ipsa quidem veritatis quisquam accusamus! Sequi exercitationem placeat qui, nulla tempora culpa asperiores quod."
    },
    {
        name: "Men Flex Experience Runners",
        vendor: "Nike",
        price: 90,
        msrp: 99,
        images: ["https://source.unsplash.com/JM-qKEd1GMI",
            "https://source.unsplash.com/fUEP0djb1hA"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum beatae, sequi perspiciatis molestiae, commodi et, eaque ipsa quidem veritatis quisquam accusamus! Sequi exercitationem placeat qui, nulla tempora culpa asperiores quod."
    },
    {
        name: "Men Solid Sneakers",
        vendor: "Roadster",
        price: 60,
        msrp: 69,
        images: ["https://source.unsplash.com/JM-qKEd1GMI",
            "https://source.unsplash.com/fUEP0djb1hA"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum beatae, sequi perspiciatis molestiae, commodi et, eaque ipsa quidem veritatis quisquam accusamus! Sequi exercitationem placeat qui, nulla tempora culpa asperiores quod."
    }
]

export const TopBrands: brand[] = [
    { name: "Nike", image: "https://source.unsplash.com/SzVXG6FFh0Q" },
    { name: "Adidas", image: "https://source.unsplash.com/SzVXG6FFh0Q" },
    { name: "Puma", image: "https://source.unsplash.com/SzVXG6FFh0Q" },
    { name: "Roadster", image: "https://source.unsplash.com/SzVXG6FFh0Q" }
]

export const Products: product[] = [
    {
        name: "Men Galaxy 5 New Series",
        vendor: "Adidas",
        price: 80,
        msrp: 89,
        images: ["https://source.unsplash.com/fUEP0djb1hA",
            "https://source.unsplash.com/fUEP0djb1hA"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum beatae, sequi perspiciatis molestiae, commodi et, eaque ipsa quidem veritatis quisquam accusamus! Sequi exercitationem placeat qui, nulla tempora culpa asperiores quod."
    },
    {
        name: "Men Leather Sneakers",
        vendor: "Puma",
        price: 70,
        msrp: 79,
        images: ["https://source.unsplash.com/fUEP0djb1hA",
            "https://source.unsplash.com/fUEP0djb1hA"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum beatae, sequi perspiciatis molestiae, commodi et, eaque ipsa quidem veritatis quisquam accusamus! Sequi exercitationem placeat qui, nulla tempora culpa asperiores quod."
    },
    {
        name: "Men Flex Experience Runners",
        vendor: "Nike",
        price: 90,
        msrp: 99,
        images: ["https://source.unsplash.com/fUEP0djb1hA",
            "https://source.unsplash.com/fUEP0djb1hA"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum beatae, sequi perspiciatis molestiae, commodi et, eaque ipsa quidem veritatis quisquam accusamus! Sequi exercitationem placeat qui, nulla tempora culpa asperiores quod."
    },
    {
        name: "Men Solid Sneakers",
        vendor: "Roadster",
        price: 60,
        msrp: 69,
        images: ["https://source.unsplash.com/fUEP0djb1hA",
            "https://source.unsplash.com/fUEP0djb1hA"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum beatae, sequi perspiciatis molestiae, commodi et, eaque ipsa quidem veritatis quisquam accusamus! Sequi exercitationem placeat qui, nulla tempora culpa asperiores quod."
    }
]

export const SingleProduct: product = {
    name: "Men Galaxy 5 New Series",
    vendor: "Adidas",
    price: 80,
    msrp: 89,
    images: ["https://source.unsplash.com/164_6wVEHfI",
        "https://source.unsplash.com/JM-qKEd1GMI",
        "https://source.unsplash.com/fUEP0djb1hA",
        "https://source.unsplash.com/SzVXG6FFh0Q"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum beatae, sequi perspiciatis molestiae, commodi et, eaque ipsa quidem veritatis quisquam accusamus! Sequi exercitationem placeat qui, nulla tempora culpa asperiores quod."
}

export const SimilarProducts: product[] = [
    {
        name: "Men Galaxy 5 New Series",
        vendor: "Adidas",
        price: 80,
        msrp: 89,
        images: ["https://source.unsplash.com/fUEP0djb1hA",
            "https://source.unsplash.com/fUEP0djb1hA"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum beatae, sequi perspiciatis molestiae, commodi et, eaque ipsa quidem veritatis quisquam accusamus! Sequi exercitationem placeat qui, nulla tempora culpa asperiores quod."
    },
    {
        name: "Men Leather Sneakers",
        vendor: "Puma",
        price: 70,
        msrp: 79,
        images: ["https://source.unsplash.com/fUEP0djb1hA",
            "https://source.unsplash.com/fUEP0djb1hA"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum beatae, sequi perspiciatis molestiae, commodi et, eaque ipsa quidem veritatis quisquam accusamus! Sequi exercitationem placeat qui, nulla tempora culpa asperiores quod."
    },
    {
        name: "Men Flex Experience Runners",
        vendor: "Nike",
        price: 90,
        msrp: 99,
        images: ["https://source.unsplash.com/fUEP0djb1hA",
            "https://source.unsplash.com/fUEP0djb1hA"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum beatae, sequi perspiciatis molestiae, commodi et, eaque ipsa quidem veritatis quisquam accusamus! Sequi exercitationem placeat qui, nulla tempora culpa asperiores quod."
    },
    {
        name: "Men Solid Sneakers",
        vendor: "Roadster",
        price: 60,
        msrp: 69,
        images: ["https://source.unsplash.com/fUEP0djb1hA",
            "https://source.unsplash.com/fUEP0djb1hA"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum beatae, sequi perspiciatis molestiae, commodi et, eaque ipsa quidem veritatis quisquam accusamus! Sequi exercitationem placeat qui, nulla tempora culpa asperiores quod."
    }
]

export const Brands: string[] = [
    "Nike",
    "Adidas",
    "Puma",
    "Roadster"
]

export const Colors: string[] = [
    "Black",
    "White",
    "Red",
    "Green"
]
