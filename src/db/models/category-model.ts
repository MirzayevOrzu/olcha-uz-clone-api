import mongoose from 'mongoose';
import T        from '../../utils/mongoose-types.js';

export interface CategoryDocument { 
    link          : string;
    main_image    : string;
    manufacturers : string[],
    name_oz       : string;
    name_ru       : string;
    name_uz       : string;
    parent_id     : string | null;
    alies         : string;
    children      : string[],
}

export interface CategoryModel extends mongoose.Model<CategoryDocument> {
    getMainImagePath(id: string ): string;
}

const { Schema, model } = mongoose;

const categorySchema = new Schema({
    link          : { type: T.String, required: true },
    main_image    : { type: T.String, required: true },
    manufacturers : { type: [T.ObjectId], ref: 'Manufacturer' },
    name_oz       : { type: T.String, required: true },
    name_ru       : { type: T.String, required: true },
    name_uz       : { type: T.String, required: true },
    parent_id     : { type: T.ObjectId, default: null },
    alies         : { type: T.String, required: true },
    children      : { type: [T.ObjectId], ref: 'Category' }
});

categorySchema.statics.getMainImagePath = async function (id: string) {
    const entity = await this.findById(id);
    return entity.main_image;
};

export const Category: CategoryModel = 
model<CategoryDocument, CategoryModel>('Category', categorySchema);
