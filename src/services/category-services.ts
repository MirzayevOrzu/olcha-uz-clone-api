import { Category } from '../db/models';
import deleteImage from '../utils/delete-image';

export type Payload = {
    _id?        : string;
    link        : string;
    name_oz     : string;
    name_ru     : string;
    name_uz     : string;
    alies       : string;
    parent_id?  : string;
    main_image? : string;
}
export type File =  {
    fieldname     : string;
    originalname  : string;
    encoding      : string;
    mimetype      : string;
    destination   : string;
    filename      : string;
    path          : string;
    size          : number;
}

export const createCategoryService = 
async (payload: Payload, file: File | undefined) => {
    const { filename } = file ? file : { filename: null }
    const { parent_id } = payload;
    const url = `http://localhost:3000/uploads/category/${filename}`;

    const category = new Category({
        ...payload,
        children: [],
        main_image: url
    });
    const entity = await category.save();
    if (parent_id)
        await Category
            .findByIdAndUpdate(
                parent_id, 
                { $push: { children: entity.id } },
                { runValidators: true }
            )
            .exec();
    return entity;
}

export const getCategoriesService = async () => {
    const categories = await Category
        .find({ parent_id: null })
        .populate('children')
        .exec();
    return categories;
}

export const updateCategoryService = 
async (payload: Payload, file: File | undefined, id: string) => {
    const { main_image } = payload;
    const { filename } = file ? file : { filename: null };
    const url = main_image 
        ? main_image 
        : `http://localhost:3000/uploads/category/${filename}`;

    const entity = await Category
        .findByIdAndUpdate(
            id,
            {
                ...payload,
                main_image: url
            },
            { runValidators: true }
        )
        .exec();

        return entity;
}

export const deleteCategoryService = async (id: string) => {
    const entity = await Category.findById(id).exec();
    entity?.children.forEach((childId) => deleteCategoryService(childId));
    const path = entity?.main_image;
    deleteImage(null, path);
    await Category.findByIdAndDelete(id).exec();
}
