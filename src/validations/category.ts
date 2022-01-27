import { Request, Response, NextFunction } from 'express';
import { Category }                        from '../db/models';
import deleteImage                         from '../utils/delete-image.js';

export const validateCreateCategory = 
async (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) {
        res.status(400).json({
            success: false,
            message: 'Image file is required!'
        });
    } else if (typeof req.body.link !== 'string') {
        deleteImage(req.file);
        res.status(400).json({
            success: false,
            message: 'Field "link" is required!',
        });
    } else if (typeof req.body.alies !== 'string') {
        deleteImage(req.file);
        res.status(400).json({
            success: false,
            message: 'Field "alies" is required!',
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
    } else {
        next();
    }
}

export const validateUpdateCategory = 
async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    if (typeof req.body.main_image !== 'string') {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'Either send "main_image" field or upload Image file!'
            });
        } else {
            const path = await Category.getMainImagePath(id);
            deleteImage(null, path);
        }
    }

    if (typeof req.body.link !== 'string') {
        deleteImage(req.file);
        res.status(400).json({
            success: false,
            message: 'Field "link" is required!',
        });
    } else if (typeof req.body.alies !== 'string') {
        deleteImage(req.file);
        res.status(400).json({
            success: false,
            message: 'Field "alies" is required!',
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
    } else {
        next();
    }
}