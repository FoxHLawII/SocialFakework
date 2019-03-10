import { Router, Request, Response } from "express";

import { UserModel } from "../models/user.model";
import { ResponseHelper } from "../utils/ResponseHelper";

export const authRoutes = (router: Router): Router => {

  router.post('/signup', async (req: Request, res: Response) => {
    await new UserModel(req.body).save();
    res.status(200).json(new ResponseHelper(true, 'Te has registrado, ahora logueate.'));
  });

  return router;
}