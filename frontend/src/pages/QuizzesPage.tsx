import { EmptyState, QuizCard } from "@components";
import { Spinner } from "flowbite-react";
import { motion } from "motion/react";
import { useQuizzes } from "@features/quiz/hooks";
import useDeleteQuiz from "@features/quiz/hooks/useDeleteQuiz";

const QuizListPage = () => {
  const { data: quizzes = [], isLoading } = useQuizzes();
  const { mutate: deleteQuiz } = useDeleteQuiz();

  if (isLoading) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center">
        <Spinner />
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 md:px-6 lg:px-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
      >
        <div>
          <h1 className="text-2xl font-semibold text-white md:text-3xl">
            My quizzes
          </h1>
          <p className="mt-1 text-sm text-purple-300">
            Manage and explore your quizzes
          </p>
        </div>

        <span className="w-fit rounded-xl border border-purple-800 bg-purple-900/40 px-3 py-2 text-sm text-purple-200">
          {quizzes.length} {quizzes.length === 1 ? "quiz" : "quizzes"}
        </span>
      </motion.div>

      {quizzes.length === 0 && <EmptyState />}

      {quizzes.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {quizzes.map((quiz, index) => (
            <motion.div
              key={quiz.id}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.35,
                delay: index * 0.07,
                ease: "easeOut",
              }}
            >
              <QuizCard quiz={quiz} onDelete={(id) => deleteQuiz(id)} />
            </motion.div>
          ))}
        </div>
      )}
    </main>
  );
};

export default QuizListPage;
