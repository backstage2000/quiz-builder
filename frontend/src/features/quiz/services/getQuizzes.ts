import { api } from "@config";
import type { Quiz } from "../types";

const getQuizzes = async (): Promise<Quiz[]> => {
  const { data } = await api.get("/quizzes");

  return data;
};

export default getQuizzes;
