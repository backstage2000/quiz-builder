import { useQuery } from "@tanstack/react-query";
import { getQuizById } from "../services";

const useGetQuizById = (id: number) => {
  return useQuery({
    queryKey: ["quiz", id],
    queryFn: () => getQuizById(id),
    enabled: !!id,
  });
};

export default useGetQuizById;
