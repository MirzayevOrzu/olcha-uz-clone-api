import fs from 'fs';
import { File } from '../services/category-services.js'

type dImage = File | null | undefined;

export default function deleteImage(file: dImage, path?: string) {
    if (file) {
        const { destination, filename } = file;
        fs.unlink(`${destination}/${filename}`, (err) => {
            if (err) {
                throw err;
            }
        });
    } else if (path) {
        // http://localhost:3000/uploads/category/1643003271186.png
        const [, prePath] = path.split('3000');
        fs.unlink(`public${prePath}`, (err) => {
            if (err) {
                throw err;
            }
        });
    }
}