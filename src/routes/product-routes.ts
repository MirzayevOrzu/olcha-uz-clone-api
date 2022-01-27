import express from 'express';

import { createProduct } from '../controllers';
import { validateCreateProduct } from '../validations';
import imageStorage from '../utils/image-upload.js';

const upload = imageStorage('public/uploads/product', 1);
const router = express.Router();

router.post(
    '/products',
    upload.array('images', 10),
    validateCreateProduct,
    createProduct,
);

export default router;