import { Product } from '../db/models';
import { File } from './category-services.js';
import makeUrl from '../utils/make-url.js';

type Payload = {
    alies             : string;
    category          : string;
    discount_price    : string;
    monthly_repayment : number;
    name_oz           : string;
    name_ru           : string;
    name_uz           : string;
    product_type      : string;
    quantity          : number;
    total_price       : number;
}

type Files = { [fieldname: string]: File[]; } | File[] | undefined;

export const createProductService = 
async (payload: Payload, files: Files) => {
    if (files) {
        const images = makeUrl(files as File[], 'product');
        const product = new Product({
            ...payload,
            main_image: images[0],
            images: images,
        });
        const entity = await product.save();
        return entity;
    }
    throw new Error('file and files not found');
}