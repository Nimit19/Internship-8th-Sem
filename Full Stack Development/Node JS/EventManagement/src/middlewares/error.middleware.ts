import { Request, Response } from "express";

export interface CustomError extends Error {
  status?: number;
}

export const errorHandler = (
  error: CustomError,
  req: Request,
  res: Response
) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong.";

  res.status(status).json({
    message: message,
  });
};
