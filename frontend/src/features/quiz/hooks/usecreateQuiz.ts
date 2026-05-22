import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createQuiz } from "../services";

import type { CreateQuiz } from "../types";

const useCreateQuiz = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateQuiz) => createQuiz(data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quizzes"] });
    },
  });
};

export default useCreateQuiz;
