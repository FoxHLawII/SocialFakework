import { Request, Response } from "express";

import { ResponseHelper } from "./ResponseHelper";

export const validateErrors = (req: Request, res: Response): boolean => {
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error: any) => error.msg)[0];
    res.status(400).json(new ResponseHelper(false, firstError));
    return !!firstError;
  }
  return true;
}