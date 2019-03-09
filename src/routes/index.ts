import { Router, Application } from 'express';
import express from 'express';

import { postRoutes } from './post.routes';

const router: Router = express.Router();

export const initRoutes = (app: Application): void => {
    app.use('/posts', postRoutes(router));
}
