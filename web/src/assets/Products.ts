// contains temperory constants for development

import { brand } from './interfaces'

export const CategoriesToBag: { name: string, image: string }[] = [
    { name: "sneakers", image: "https://source.unsplash.com/JM-qKEd1GMI" },
    { name: "loafers", image: "https://source.unsplash.com/LkuH3Txi_gs" },
    { name: "boots", image: "https://source.unsplash.com/3OZr-hLbsq0" },
    { name: "sports", image: "https://source.unsplash.com/164_6wVEHfI" }
]

export const TopBrands: brand[] = [
    { name: "nike", image: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/5544cd64-d95b-461d-802a-8025fdfeb3331605363272844-Home---Nike.jpg" },
    { name: "adidas", image: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/c9f66558-feab-4d76-aa3c-adc68d81dce21598348260415-Levis.jpg" },
    { name: "puma", image: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/581e2bf6-6d47-4a4b-a11f-43200dc9c6791598892519362-Puma.jpg" },
    { name: "roadster", image: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/178c1e5d-69f2-402f-a2a5-ef44700a0f691596640983793-Roadster---.jpg" }
]

export const Brands: string[] = [
    "nike",
    "adidas",
    "puma",
    "roadster"
]

export const Colors: string[] = [
    "black",
    "white",
    "red",
    "green"
]
