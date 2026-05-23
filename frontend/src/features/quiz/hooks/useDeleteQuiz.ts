import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteQuiz } from "../services";
import { toast } from "sonner";

const useDeleteQuiz = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteQuiz(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quizzes"] });
      toast.success("Quiz was successfully deleted.");
    },
  });
};

export default useDeleteQuiz;
