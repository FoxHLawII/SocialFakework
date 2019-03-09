import { Application } from 'express';
import express from 'express';

import { initRoutes } from './routes';

const PORT = process.env.PORT || 3000;

const app: Application = express();

initRoutes(app);

app.listen(PORT, () => console.log(`Init in ${PORT}`));
