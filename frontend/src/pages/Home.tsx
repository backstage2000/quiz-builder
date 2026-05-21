import { useHello } from "../features/quiz/hooks/useGetHello";

export default function Home() {
  const { data, isLoading, error } = useHello();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return <div className="p-6 text-xl font-bold">{data?.message}</div>;
}
