import multer from 'multer';
import path from 'path';

export default function imageStorage(destination: string, fileSize: number) {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, destination);
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + path.extname(file.originalname));
        }
    });
    const upload = multer({
        storage: storage,
        limits: {
            fileSize: fileSize * 1000000 // 1000000 Bytes = 1 MB
        },
        fileFilter(req, file, cb) {
            if (!file.originalname.match(/\.(png|jpg)$/)) {
                // upload only png and jpg format
                return cb(new Error('Please upload a Image'))
            }
            cb(null, true);
        }
    });
    return upload;
}