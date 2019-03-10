import { Request, Response, NextFunction } from "express";

import { validateErrors } from "../utils/ValidateErrors";

export const signUpValidator = (req: Request, res: Response, next: NextFunction) => {
  req.check('name')
    .notEmpty().withMessage('El nombre es requerido')
    .isLength({ min: 2, max: 50 }).withMessage('El nombre debe tener min 2 y max 50')
    .isAlphanumeric('es-ES').withMessage('El nombre debe ser alfanumerico');

  req.check('email')
    .notEmpty().withMessage('El email es requerido')
    .isEmail().withMessage('El email es invalido')
    .isLength({ min: 5, max: 50 }).withMessage('El nombre debe tener min 5 y max 50');

  req.check('password')
    .notEmpty().withMessage('La contrasena es requerida')
    .matches(/\d/).withMessage('La contrasena debe tener almenos un numero')
    .isLength({ min: 6 }).withMessage('La contrasena debe tener min 6');

  req.check('confirm_password')
    .notEmpty().withMessage('Es requerido confirmar contrasena')
    .equals(req.body.password).withMessage('Las contrasenas no coinciden');

  if(validateErrors(req, res)) next(); else return;
}