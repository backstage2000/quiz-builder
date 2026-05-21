import 'dotenv/config';
import { client } from './config/database';

import './models/Quiz';
import './models/Question';
import './models/Option';
import './models/associations';

import { Quiz } from './models/Quiz';
import { Question } from './models/Question';
import { Option } from './models/Option';

const seed = async () => {
  try {
    await client.authenticate();

    await client.sync({ force: true });

    const quiz = await Quiz.create({
      title: 'JavaScript Basics',
      description: 'Basic JS quiz',
    });

    const question1 = await Question.create({
      text: 'What is closure?',
      type: 'single',
      quizId: quiz.id,
    });

    await Option.bulkCreate([
      {
        text: 'Function with lexical scope',
        isCorrect: true,
        questionId: question1.id,
      },
      { text: 'Loop', isCorrect: false, questionId: question1.id },
    ]);

    console.log('Seed completed 🚀');
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

seed();
