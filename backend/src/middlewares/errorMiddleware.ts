/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiError } from '../exeptions/api.error';
import { Request, Response, NextFunction } from 'express';

export const errorMiddleware = (
  err: Error | ApiError,
  req: Request,
  res: Response,
  _next: NextFunction,
): Response => {
  if (err instanceof ApiError) {
    return res.status(err.status).json({
      message: err.message,
      errors: err.errors,
    });
  }

  return res.status(500).json({
    message: 'Server Error',
  });
};
