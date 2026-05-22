import { EmptyState, QuizCard } from "@components";

import { Spinner } from "flowbite-react";
import { useQuizzes } from "@features/quiz/hooks";
import useCreateQuiz from "@features/quiz/hooks/usecreateQuiz";

const QuizListPage = () => {
  const { data: quizzes = [], isLoading } = useQuizzes();
  const { mutate: createQuiz, isPending } = useCreateQuiz();

  const testQuiz = {
    title: "Test Quiz",
    description: "Test",
    questions: [
      {
        text: "What is JS?",
        type: "single" as const,
        options: [
          { text: "Language", isCorrect: true },
          { text: "Database", isCorrect: false },
        ],
      },
    ],
  };

  const handleDelete = (id: number) => {
    console.log("Delete:", id);
  };

  if (isLoading) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center">
        <Spinner />
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 md:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white md:text-3xl">
            My quizzes
          </h1>

          <p className="mt-1 text-sm text-purple-300">
            Manage and explore your quizzes
          </p>
        </div>

        <span
          className="
            w-fit rounded-xl border border-purple-800
            bg-purple-900/40 px-3 py-2
            text-sm text-purple-200
          "
        >
          {quizzes.length} {quizzes.length === 1 ? "quiz" : "quizzes"}
        </span>
      </div>

      <button
        onClick={() => createQuiz(testQuiz)}
        disabled={isPending}
        className="
    mb-6 rounded-xl bg-purple-600 px-4 py-2
    text-white transition hover:bg-purple-500
    disabled:opacity-50
  "
      >
        {isPending ? "Creating..." : "Create Test Quiz"}
      </button>

      {quizzes.length === 0 && !isLoading && <EmptyState />}

      {quizzes.length > 0 && (
        <div
          className="
            grid grid-cols-1 gap-4
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </main>
  );
};

export default QuizListPage;
