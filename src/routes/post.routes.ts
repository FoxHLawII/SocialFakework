import { Router, Request, Response } from "express";
import { Document, Error } from "mongoose";

import { Post, PostModel } from "../models/post.model";

export const postRoutes = (router: Router): Router => {
    router.get('/', (req: Request, res: Response) => { res.send('FUCK YEAHH'); });

    router.post('/', (req: Request, res: Response) => {
        const post: Post = req.body;
        new PostModel(post).save()
            .then((result: Document) => res.status(200).json({ post: result }))
            .catch((err: Error) => res.status(500).json({ error: err }));
    })

    return router;
}
