import { Quiz } from '../models/Quiz';
import { Question } from '../models/Question';

export const getAll = async () => {
  const quizzes = await Quiz.findAll({
    include: [
      {
        model: Question,
        as: 'questions',
        attributes: ['id'],
      },
    ],
  });

  return quizzes.map((quiz) => ({
    id: quiz.id,
    title: quiz.title,
    questionsCount: quiz.questions?.length || 0,
  }));
};

export const quizServices = {
  getAll,
};
