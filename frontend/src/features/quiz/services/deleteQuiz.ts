import { api } from "@config";

const deleteQuiz = async (id: number): Promise<void> => {
  await api.delete(`/quizzes/${id}`);
};

export default deleteQuiz;
