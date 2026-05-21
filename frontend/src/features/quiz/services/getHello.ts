import { api } from "@config";

export const getHello = async (): Promise<{ message: string }> => {
  const { data } = await api.get("/");
  return data;
};
