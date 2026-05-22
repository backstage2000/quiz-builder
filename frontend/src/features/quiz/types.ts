import { z } from "zod";
import type createQuizSchema from "./validation/createQuizSchema";

export interface Quiz {
  id: number;
  title: string;
  description?: string;
  createdAt: string;
}

export type QuestionType = "single" | "multiple";

export interface CreateOption {
  text: string;
  isCorrect: boolean;
}

export interface CreateQuestion {
  text: string;
  type: QuestionType;
  options: CreateOption[];
}

export interface CreateQuiz {
  title: string;
  description?: string;
  questions: CreateQuestion[];
}

export interface QuizDetail extends Quiz {
  questions: {
    id: number;
    text: string;
    type: "single" | "multiple";
    options: {
      id: number;
      text: string;
      isCorrect: boolean;
    }[];
  }[];
}

export type CreateQuizFormData = z.infer<typeof createQuizSchema>;
