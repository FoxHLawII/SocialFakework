import { Request, Response, NextFunction } from "express";

export const postValidator = (req: Request, res: Response, next: NextFunction) => {
    req.check('title', 'El titulo es requerido').notEmpty();
    req.check('title', 'El titulo debe tener minimo 4 y maximo 150').isLength({min: 4, max: 150});
    req.check('body', 'El contenido es requerido').notEmpty();
    req.check('body', 'El contenido debe tener minimo 4 y maximo 2000').isLength({min: 4, max: 2000});
    
    next();
};