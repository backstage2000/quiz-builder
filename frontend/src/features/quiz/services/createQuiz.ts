import { api } from "@config";
import type { CreateQuiz, Quiz } from "../types";

const createQuiz = async (payload: CreateQuiz): Promise<Quiz> => {
  const { data } = await api.post("/quizzes/create", payload);

  return data;
};

export default createQuiz;
