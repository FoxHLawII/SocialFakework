import { Router, Request, Response } from "express";
import { Document, Error } from "mongoose";

import { postValidator } from "../validators/post.validator";
import { Post, PostModel } from "../models/post.model";
import { ResponseHelper } from "../utils/ResponseHelper";

export const postRoutes = (router: Router): Router => {
  router.get('/', (req: Request, res: Response) => { res.send('FUCK YEAHH'); });

  router.post('/', postValidator, (req: Request, res: Response) => {
      const errors = req.validationErrors();
      if (errors) {
        res.status(400).json(new ResponseHelper(false, errors));
        return;
      }

      const post: Post = req.body;
      new PostModel(post).save()
        .then((result: Document) => res.status(200).json(new ResponseHelper(true, result)))
        .catch((err: Error) => res.status(500).json(new ResponseHelper(false, err)));
  });

  return router;
}
