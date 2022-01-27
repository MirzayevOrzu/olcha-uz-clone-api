import { Request, Response } from 'express';
import { productService } from '../services';

const {
    createProductService
} = productService;

export const createProduct = async (req: Request, res: Response) => {
    try {
        console.log(req.files);
        const payload = req.body;
        const files = req.files;
        const entity = await createProductService(payload, files);
        res.status(200).json({
            success: true,
            data: entity,
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e
        });
    }
}