import { useParams } from "react-router-dom";
import { Spinner } from "flowbite-react";
import { motion } from "motion/react";
import { useGetQuizById } from "@features/quiz/hooks";

const QuizDetailPage = () => {
  const { id } = useParams();
  const quizId = Number(id);

  const { data: quiz, isLoading } = useGetQuizById(quizId);

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!quiz) {
    return <div className="text-center text-white">Quiz not found</div>;
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 text-white">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-3xl font-semibold"
      >
        {quiz.title}
      </motion.h1>

      {quiz.description && (
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="mt-2 text-purple-300"
        >
          {quiz.description}
        </motion.p>
      )}

      <div className="mt-8 space-y-6">
        {quiz.questions?.map((q, index) => (
          <motion.div
            key={q.id}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.35,
              delay: 0.15 + index * 0.07,
              ease: "easeOut",
            }}
            className="rounded-2xl border border-purple-900/40 bg-purple-950/40 p-5"
          >
            <div className="flex items-start gap-3 mb-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-700 text-xs font-semibold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="text-base font-medium leading-snug">{q.text}</h3>
              </div>
            </div>

            <div className="space-y-2">
              {q.options?.map((opt, optIndex) => (
                <motion.div
                  key={opt.id}
                  initial={{ x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: 0.2 + index * 0.07 + optIndex * 0.05,
                    ease: "easeOut",
                  }}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm transition-colors ${
                    opt.isCorrect
                      ? "border border-green-500/40 bg-green-500/10 text-green-300"
                      : "border border-transparent bg-purple-900/30 text-purple-200"
                  }`}
                >
                  <span>{opt.text}</span>

                  {opt.isCorrect && (
                    <span className="ml-3 shrink-0 rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-400">
                      ✓ correct
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default QuizDetailPage;
