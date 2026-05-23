import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createQuiz } from "../services";

import type { CreateQuiz } from "../types";
import { toast } from "sonner";

const useCreateQuiz = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateQuiz) => createQuiz(data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quizzes"] });
      toast.success("Quiz was successfully created.");
    },
  });
};

export default useCreateQuiz;
