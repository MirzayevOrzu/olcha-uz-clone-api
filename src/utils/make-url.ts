import { File } from '../services/category-services.js';

function makeUrl(data: File | File[], folder: string): string | string[] {
    if (Array.isArray(data)) {
        return data.map(file => makeUrl(file, folder) as string);
    } else {
        return `http://localhost:3000/uploads/${folder}/${data.filename}`;
    }
}

export default makeUrl;