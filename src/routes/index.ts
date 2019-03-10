import { Router, Application } from 'express';

import express from 'express';

import { postRoutes } from './post.routes';
import { authRoutes } from './auth.routes';

const router: Router = express.Router();

export const initRoutes = (app: Application): void => {
  app.use('/auth', authRoutes(router));
  app.use('/posts', postRoutes(router));
}
