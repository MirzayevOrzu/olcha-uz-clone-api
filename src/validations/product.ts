import { Request, Response, NextFunction } from 'express';
// import { Product }                         from '../db/models';
import deleteImage                         from '../utils/delete-image.js';

export const validateCreateProduct = 
async (req: Request, res: Response, next: NextFunction) => {
    // if (!req.file) {
    //     res.status(400).json({
    //         success: false,
    //         message: 'Image file is required!'
    //     });
    // } else 
    if (!req.files) {
        res.status(400).json({
            success: false,
            message: 'Image files is required!'
        });
    } else if (typeof req.body.alies !== 'string') {
        deleteImage(req.file);
        res.status(400).json({
            success: false,
            message: 'Field "alies" is required!',
        });
    } else if (typeof req.body.category !== 'string') {
        deleteImage(req.file);
        res.status(400).json({
            success: false,
            message: 'Field "category" is required!',
        });
    } else if (typeof req.body.discount_price !== 'string') {
        console.log(req.body.discount_price);
        deleteImage(req.file);
        res.status(400).json({
            success: false,
            message: 'Field "discount_price" is required!',
        });
    } else if (typeof req.body.monthly_repayment !== 'string') {
        deleteImage(req.file);
        res.status(400).json({
            success: false,
            message: 'Field "monthly_repayment" is required!',
        });
    } else if (typeof req.body.name_oz !== 'string') {
        deleteImage(req.file);
        res.status(400).json({
            success: false,
            message: 'Field "name_oz" is required!',
        });
    } else if (typeof req.body.name_ru !== 'string') {
        deleteImage(req.file);
        res.status(400).json({
            success: false,
            message: 'Field "name_ru" is required!',
        });
    } else if (typeof req.body.name_uz !== 'string') {
        deleteImage(req.file);
        res.status(400).json({
            success: false,
            message: 'Field "name_uz" is required!',
        });
    } else if (typeof req.body.product_type !== 'string') {
        deleteImage(req.file);
        res.status(400).json({
            success: false,
            message: 'Field "product_type" is required!',
        });
    } else if (typeof req.body.quantity !== 'string') {
        deleteImage(req.file);
        res.status(400).json({
            success: false,
            message: 'Field "quantity" is required!',
        });
    } else if (typeof req.body.total_price !== 'string') {
        deleteImage(req.file);
        res.status(400).json({
            success: false,
            message: 'Field "total_price" is required!',
        });
    } else {
        next();
    }
}