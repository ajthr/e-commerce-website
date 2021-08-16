import { Router, Request, Response } from "express";

import { product } from './products.interfaces'

import Product from './products.models'

const router = Router();

router.get('/', async (request: Request, response: Response): Promise<void> => {
    try {
        const products: product[] | null = await Product.find(request.query).select({ description: 0, name: 0, specifications: 0, sizes: 0, category: 0, createdAt: 0 })
        
        if (products !== null) {
            response.status(200).send(products)
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

router.get('/latest', async (request: Request, response: Response): Promise<void> => {
    const { limit }: any = request.query;
    try {
        const products: product[] | undefined = await Product.find({}).sort({ createdAt: -1 }).select({ description: 0, name: 0, specifications: 0, sizes: 0, category: 0, createdAt: 0 }).limit(parseInt(limit))

        if (products !== null) {
            response.status(200).send(products)
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

router.get('/similar', async (request: Request, response: Response): Promise<void> => {
    const { id, limit }: any = request.query;
    console.log(id, limit);
    try {
        let category: product | null = await Product.findOne({
            _id: id,
        });
        const products: product[] | undefined = await Product.find({ _id: {$ne: id}, category: category?.category }).select({ description: 0, name: 0, specifications: 0, sizes: 0, category: 0, createdAt: 0 }).limit(parseInt(limit))

        if (products !== null) {
            response.status(200).send(products)
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
        const product: product | null = await Product.findOne({
            _id: id,
        })

        if (product !== null) {
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
