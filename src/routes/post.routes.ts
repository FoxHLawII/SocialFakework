import { Router, Request, Response } from "express";

import { Post } from "../models/post.model";
import { postValidator } from "../validators/post.validator";
import { ResponseHelper } from "../utils/ResponseHelper";
import { insertPost, getAllPosts } from "../services/post.service";

export const postRoutes = (router: Router): Router => {

  router.get('/', async (req: Request, res: Response) => { 
    const result = await getAllPosts();
    res.status(200).json(new ResponseHelper(true, result));
  });

  router.post('/', postValidator, async (req: Request, res: Response) => {
    const post: Post = req.body;
    const result = await insertPost(post)
    res.status(200).json(new ResponseHelper(true, result));
  });

  return router;
}
