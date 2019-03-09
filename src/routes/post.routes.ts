import { Router, Request, Response } from "express";

export const postRoutes = (router: Router): Router => {
    router.get('/', (req: Request, res: Response) => { res.send('FUCK YEAHH'); });

    return router;
}
