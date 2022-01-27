import mongoose from 'mongoose';
import T from '../../utils/mongoose-types.js';

const { Schema, model } = mongoose;

const productSchema = new Schema({
    alies               : { type: T.String, required: true },
    cashback            : { type: T.String, default: "0.00" },
    category            : { type: T.ObjectId, ref: 'Category', required: true },
    discount            : { type: T.Number, min: 0, max: 50, default: 0 },
    discount_price      : { type: T.Number, min: 0, required: true },
    discount_type       : { type: T.String, default: '-' },
    discount_value      : { type: T.String, default: '0.00' },
    has_installment     : { type: T.Number, default: 1 },
    images              : { type: [T.String], required: true },
    in_stock            : { type: T.Boolean, default: true },
    initial_fee         : { type: T.Number, default: 0 },
    is_like             : { type: T.Boolean, default: false },
    is_main             : { type: T.Number, default: false },
    main_image          : { type: T.String, required: true },
    max_price           : { type: T.String, default: '' },
    monthly_repayment   : { type: T.Number, required: true },
    name_oz             : { type: T.String, required: true },
    name_ru             : { type: T.String, required: true },
    name_uz             : { type: T.String, required: true },
    new                 : { type: T.Number, enum: [0, 1, 2], default: 0 },
    parent_product      : { type: T.ObjectId, default: null },
    plan                : 
        {
            fields      : { type: [T.String], default: [] },
            initial_fee : { type: T.Number, default: 0, min: 0, max: 50 },
            margin      : { type: T.Number, default: 0, min: 0, max: 100 },
            max_period  : { type: T.Number, default: 0, max: 18 },
            max_scoring : { type: T.Number, default: 0, max: 100 },
            min_period  : { type: T.Number, default: 0, min: 0 },
            min_scoring : { type: T.Number, default: 0, min: 0},
        },
    popular             : { type: T.String, default: 0, min: 0, max: 100 },
    product_type        : { type: T.String, enum: ['product', 'variation'] },
    quantity            : { type: T.Number, required: true, min: 0 },
    recommended         : { type: T.String, default: 0 },
    sale                : { type: T.Number, min: 0, default: 1 },
    status              : { type: T.Number, default: 1 },
    total_price         : { type: T.Number, required: true },
    video_url           : { type: T.String, default: '' },
    warranty_month      : { type: T.Number, default: 0 },
    weight              : { type: T.Number, default: 0 },
});

export const Product = model('Product', productSchema);
