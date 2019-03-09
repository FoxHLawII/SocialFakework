import { Application } from 'express';

import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

import { initRoutes } from './routes';

dotenv.config({ path: path.resolve(`${__dirname}/envs/dev.env`) });
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || '';

const app: Application = express();
app.use(bodyParser.json());

initRoutes(app);

mongoose.connect(DB_URL, { useNewUrlParser: true })
    .then(() => console.log('DB online'))
    .catch((err: Error) => console.log(err));

app.listen(PORT, () => console.log(`Init in ${PORT}`));
