import { Router, Request, Response } from "express";

import { UserModel, User } from "../models/user.model";
import { ResponseHelper } from "../utils/ResponseHelper";
import { signUpValidator } from "../validators/auth.validator";
import { signUp } from "../services/auth.service";

export const authRoutes = (router: Router): Router => {

  router.post('/signup', signUpValidator, async (req: Request, res: Response) => {
    const userExist = await UserModel.count({ email: req.body.email });
    if (userExist) return res.json(new ResponseHelper(false, 'El email ya existe'));
    const user: User = await signUp(req.body);
    return user ? res.status(200).json(new ResponseHelper(true, 'Te has registrado, ahora logueate.')) :
                  res.status(500).json(new ResponseHelper(false, 'Algo anda mal'));
  });

  return router;
}