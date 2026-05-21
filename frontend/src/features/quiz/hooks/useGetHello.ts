import { useQuery } from "@tanstack/react-query";
import { getHello } from "../services/getHello";

export const useHello = () => {
  return useQuery({
    queryKey: ["hello"],
    queryFn: getHello,
  });
};
