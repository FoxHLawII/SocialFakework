import { Router, Request, Response } from "express";

import { postValidator } from "../validators/post.validator";
import { ResponseHelper } from "../utils/ResponseHelper";
import { insertPost, getAllPosts } from "../services/post.service";

export const postRoutes = (router: Router): Router => {

  router.get('/', async (req: Request, res: Response) => { 
    const posts = await getAllPosts();
    return res.status(200).json(new ResponseHelper(true, posts));
  });

  router.post('/', postValidator, async (req: Request, res: Response) => {
    const post = await insertPost(req.body)
    return res.status(200).json(new ResponseHelper(true, post));
  });

  return router;
}
