import { Request, Response } from 'express';
import { categoryService } from '../services';

const {
    createCategoryService,
    getCategoriesService,
    updateCategoryService,
    deleteCategoryService
} = categoryService;

export const createCategory = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const file = req.file;
        const entity = await createCategoryService(payload, file);
        res.status(200).json({
            success: true,
            data: entity
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e
        });
    }
}

export const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await getCategoriesService();
        res.status(200).json({
            success: true,
            data: categories
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e
        });
    }
}

export const updateCategory = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const file = req.file;
        const { id } = req.params;
        const entity = await updateCategoryService(payload, file, id);
        res.status(200).json({
            success: true,
            data: entity
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e
        });
    }
}

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await deleteCategoryService(id);
        res.status(200).json({
            success: true,
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e
        });
    }
}
