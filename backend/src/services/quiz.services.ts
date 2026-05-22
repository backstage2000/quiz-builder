import { Quiz } from '../models/Quiz';
import { Question } from '../models/Question';
import { Option } from '../models/Option';

interface CreateQuizDto {
  title: string;
  description?: string;
  questions: {
    text: string;
    type: 'single' | 'multiple' | 'text';
    options?: {
      text: string;
      isCorrect: boolean;
    }[];
  }[];
}

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

const create = async (data: CreateQuizDto) => {
  const quiz = await Quiz.create({
    title: data.title,
    description: data.description,
  });

  for (const question of data.questions) {
    const createdQuestion = await Question.create({
      text: question.text,
      type: question.type,
      quizId: quiz.id,
    });

    if (question.options?.length) {
      await Option.bulkCreate(
        question.options.map((option) => ({
          text: option.text,
          isCorrect: option.isCorrect,
          questionId: createdQuestion.id,
        })),
      );
    }
  }

  return Quiz.findByPk(quiz.id, {
    include: [
      {
        model: Question,
        as: 'questions',
        include: [
          {
            model: Option,
            as: 'options',
          },
        ],
      },
    ],
  });
};

export const quizServices = {
  getAll,
  create,
};
