import { useQuery } from "@tanstack/react-query";
import { getQuizzes } from "../services";

const useQuizzes = () => {
  return useQuery({
    queryKey: ["quizzes"],
    queryFn: getQuizzes,
  });
};

export default useQuizzes;
