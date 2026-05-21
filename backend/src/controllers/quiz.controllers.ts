import { Request, Response } from 'express';
import { quizServices } from '../services/quiz.services';
import { ApiError } from '../exeptions/api.error';

const get = async (_: Request, res: Response): Promise<void> => {
  const quizzes = await quizServices.getAll();

  if (!quizzes.length) {
    throw ApiError.notFound('Quizzes not found');
  }

  res.json(quizzes);
};

export const controllers = {
  get,
};
