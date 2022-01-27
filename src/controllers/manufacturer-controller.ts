import { Request, Response } from 'express';
import { manufacturerService } from '../services';

const {
    createManufacturerService,
    getManufacturersService,
    updateManufacturerService,
    deleteManufacturerService,
    getOneManufacturerService
} = manufacturerService;

export const createManufacturer = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const file = req.file;
        const entity = await createManufacturerService(payload, file);
        res.status(200).json({
            success: true,
            data: entity
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e
        })
    }
}

export const getManufacturers = async (req: Request, res: Response) => {
    try {
        const manufacturers = await getManufacturersService();
        res.status(200).json({
            success: true,
            data: manufacturers,
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e
        });
    }
}

export const updateManufacturer = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const file    = req.file;
        const { id }  = req.params;
        const entity  = await updateManufacturerService(payload, file, id);
        res.status(200).json({
            success: true,
            data: entity
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e
        });
    }
}

export const deleteManufacturer = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await deleteManufacturerService(id);
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

export const getOneManufacturer = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const entity = await getOneManufacturerService(id);
        res.status(200).json({
            success: true,
            data: entity
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e
        });
    }
}