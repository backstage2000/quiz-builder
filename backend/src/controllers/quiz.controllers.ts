import { Request, Response } from 'express';
import { quizServices } from '../services/quiz.services';
import { ApiError } from '../exeptions/api.error';

const get = async (_: Request, res: Response): Promise<void> => {
  const quizzes = await quizServices.getAll();

  res.json(quizzes);
};

const create = async (req: Request, res: Response): Promise<void> => {
  const { title, description, questions } = req.body;

  if (!title) {
    throw ApiError.badRequest('Title is required');
  }

  if (!questions?.length) {
    throw ApiError.badRequest('Questions are required');
  }

  const quiz = await quizServices.create({
    title,
    description,
    questions,
  });

  res.status(201).json(quiz);
};

const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deleted = await quizServices.remove(Number(id));

  if (!deleted) {
    throw ApiError.notFound('Quiz not found');
  }

  res.json({ message: 'Quiz deleted successfully' });
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const quiz = await quizServices.getById(Number(id));

  if (!quiz) {
    throw ApiError.notFound('Quiz not found');
  }

  res.json(quiz);
};

export const controllers = {
  get,
  create,
  remove,
  getById,
};
