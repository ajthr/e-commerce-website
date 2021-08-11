import { Router, Request, Response } from "express";

import { product } from './products.interfaces'

import Product from './products.models'

const router = Router();

router.get('/', async (request: Request, response: Response): Promise<void> => {
    try {
        const products: product[] | undefined = await Product.find({})

        if (typeof (products) !== "undefined") {
            response.status(200).send(products)
            console.log(products)
            return;
        } else {
            response.status(404).send()
            return;
        }
    } catch (err) {
        response.status(400).send(err)
        return;
    }
})

router.get('/p/:id', async (request: Request, response: Response): Promise<void> => {
    const id: String = request.params.id;
    try {
        const product: product | undefined = await Product.findOne({
            _id: id,
        })

        if (typeof (product) !== "undefined") {
            console.log(product)
            response.status(200).send(product)
            return;
        } else {
            response.status(404).send()
            return;
        }
    } catch (err) {
        response.status(400).send(err)
        return;
    }
})

export default router;
