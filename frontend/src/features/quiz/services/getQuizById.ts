import { api } from "@config";
import type { QuizDetail } from "../types";

const getQuizById = async (id: number): Promise<QuizDetail> => {
  const { data } = await api.get(`/quizzes/${id}`);
  return data;
};

export default getQuizById;
