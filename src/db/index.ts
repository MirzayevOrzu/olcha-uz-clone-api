import mongoose from 'mongoose';

export * from './models/category-model.js';

type dbPar = string | undefined;

export default function initDbConnection(password: dbPar, config: dbPar) {
    mongoose.connect(
        `mongodb+srv://orzu:${password}@cluster0.znmqm.mongodb.net/${config}`,
        (err) => {
            if (err) {
                throw new Error('database connection error');
            }
            console.log('database connection open');
        });
}
