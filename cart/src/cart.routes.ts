import { Router, Request, Response } from "express";

import { cartItem } from './cart.interfaces'

const router = Router();

router.get('/', async (request: Request, response: Response): Promise<void> => {
    response.send("hello from cart service")
})

export default router;
