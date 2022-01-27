import mongoose from 'mongoose';

export default {
    String     : mongoose.Schema.Types.String,
    Number     : mongoose.Schema.Types.Number,
    ObjectId   : mongoose.Schema.Types.ObjectId,
    Boolean    : mongoose.Schema.Types.Boolean,
    Date       : mongoose.Schema.Types.Date,
    Array      : mongoose.Schema.Types.Array,
    Buffer     : mongoose.Schema.Types.Buffer,
    Mixed      : mongoose.Schema.Types.Mixed,
    Decimal128 : mongoose.Schema.Types.Decimal128,
    Map        : mongoose.Schema.Types.Map,
    Schema     : mongoose.Schema,
}