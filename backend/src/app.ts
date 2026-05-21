import express from 'express';
import cors from 'cors';

import './models/associations';

import quizRouter from './routes/quiz.router';
import { errorMiddleware } from './middlewares/errorMiddleware';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/quizzes', quizRouter);
app.use(errorMiddleware);

export default app;
