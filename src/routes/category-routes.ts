import express from 'express';

import { 
    createCategory,
    getCategories, 
    updateCategory,
    deleteCategory           } from '../controllers';
import {
    validateCreateCategory, 
    validateUpdateCategory   } from '../validations'
import imageStorage            from '../utils/image-upload.js';

const upload = imageStorage('public/uploads/category', 1);
const router = express.Router();

router.post(
    '/categories',
    upload.single('image'),
    validateCreateCategory,
    createCategory
);

router.get(
    '/categories',
    getCategories,
);

router.put(
    '/categories/:id',
    upload.single('image'),
    validateUpdateCategory,
    updateCategory,
);

router.delete(
    '/categories/:id',
    deleteCategory,
)

export default router;
