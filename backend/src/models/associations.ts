import { Quiz } from './Quiz';
import { Question } from './Question';
import { Option } from './Option';

Quiz.hasMany(Question, {
  foreignKey: 'quizId',
  as: 'questions',
});

Question.belongsTo(Quiz, {
  foreignKey: 'quizId',
  as: 'quiz',
});

Question.hasMany(Option, {
  foreignKey: 'questionId',
  as: 'options',
});

Option.belongsTo(Question, {
  foreignKey: 'questionId',
  as: 'question',
});
