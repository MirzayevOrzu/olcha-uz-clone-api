import mongoose from 'mongoose';
import T        from '../../utils/mongoose-types.js';

export interface ManufacturerDoc {
    main_image    : string;
    name_oz       : string;
    name_ru       : string;
    name_uz       : string;
    slug          : string;
}

export interface ManufacturerModel extends mongoose.Model<ManufacturerDoc> {
    getMainImagePath(id: string ): string;
}

const { Schema, model } = mongoose;

const manufacturerSchema = new Schema({
    main_image    : { type: T.String, required: true },
    name_oz       : { type: T.String, required: true },
    name_ru       : { type: T.String, required: true },
    name_uz       : { type: T.String, required: true },
    slug          : { type: T.String, required: true }
});

manufacturerSchema.statics.getMainImagePath = async function (id: string) {
    const entity = await this.findById(id);
    return entity.main_image;
};

export const Manufacturer: ManufacturerModel = 
model<ManufacturerDoc, ManufacturerModel>('Manufacturer', manufacturerSchema);
