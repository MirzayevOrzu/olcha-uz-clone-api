import { Manufacturer } from '../db/models';
import { File } from './category-services.js';

type Payload = {
    name_oz     : string;
    name_ru     : string;
    name_uz     : string;
    slug        : string;
    main_image? : string;
}


export const createManufacturerService = 
async (payload: Payload, file: File | undefined) => {
    const { filename } = file ? file : { filename: null };
    const url = `http://localhost:3000/uploads/manufacturer/${filename}`;

    const manufacturer = new Manufacturer({
        ...payload,
        main_image: url
    });
    const entity = await manufacturer.save();
    return entity;
}


export const getManufacturersService = async () => {
    const entities = await Manufacturer.find({}).exec();
    return entities;
}


export const updateManufacturerService = 
async (payload: Payload, file: File | undefined, id: string) => {
    const { filename } = file ? file : { filename: null };
    const { main_image } = payload;
    const url = main_image
        ? main_image
        : `http://localhost:3000/uploads/manufacturers/${filename}`;

    const entity = Manufacturer
        .findByIdAndUpdate(
            id,
            {
                ...payload,
                main_image: url
            },
            {
                runValidators: true
            }
        )
        .exec();
    return entity;
}


export const deleteManufacturerService = async (id: string) => {
    await Manufacturer.findByIdAndDelete(id).exec();
}


export const getOneManufacturerService = async (id: string) => {
    const entity = await Manufacturer.findById(id).exec();
    return entity;
}