import express from 'express';

import { 
    createManufacturer, 
    getManufacturers, 
    updateManufacturer,
    deleteManufacturer,
    getOneManufacturer          } from '../controllers';
import { 
    validateCreateManufacturer, 
    validateUpdateManufacturer  } from '../validations';
import imageStorage               from '../utils/image-upload.js';

const upload = imageStorage('public/uploads/manufacturer', 1);
const router = express.Router();

router.post(
    '/manufacturers', 
    upload.single('image'),
    validateCreateManufacturer,
    createManufacturer
);

router.get(
    '/manufacturers',
    getManufacturers
);

router.put(
    '/manufacturers/:id',
    upload.single('image'),
    validateUpdateManufacturer,
    updateManufacturer,
);

router.delete(
    '/manufacturers/:id',
    deleteManufacturer
)

router.get(
    '/manufacturers/:id',
    getOneManufacturer
)

export default router;

