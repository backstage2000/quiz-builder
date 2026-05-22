import express from 'express';
import { catchError } from '../utils/cathcError';
import { controllers } from '../controllers/quiz.controllers';

const quizRouter = express.Router();

quizRouter.get('/', catchError(controllers.get));
quizRouter.post('/create', catchError(controllers.create));
quizRouter.delete('/:id', catchError(controllers.remove));

export default quizRouter;
