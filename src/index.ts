import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import initDbConnection from './db';
import routes from './routes';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

initDbConnection(process.env.DB_USER_PASSWORD, process.env.DB_CONFIG);

app.get('/', async (req: Request, res: Response) => {
    res.send('API is working');
});

app.use('/api/v1', routes);

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
