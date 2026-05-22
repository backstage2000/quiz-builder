import { Link } from "react-router-dom";
import { Trash2, ListChecks, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import type { Quiz } from "@features/quiz/types";

interface Props {
  quiz: Quiz;
  onDelete: (id: number) => void;
}

const iconColors: Record<number, string> = {
  0: "bg-purple-800 text-purple-100",
  1: "bg-fuchsia-900 text-fuchsia-200",
  2: "bg-violet-900 text-violet-200",
  3: "bg-indigo-900 text-indigo-200",
};

export default function QuizCard({ quiz, onDelete }: Props) {
  const colorIdx = quiz.id % 4;

  console.log(quiz.createdAt);

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (confirm(`Delete "${quiz.title}"?`)) {
      onDelete(quiz.id);
    }
  };

  return (
    <Link
      to={`/quizzes/${quiz.id}`}
      className="group relative flex flex-col gap-4 rounded-3xl border border-purple-900/40 bg-purple-950/70 p-5 shadow-lg backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:border-purple-700 hover:shadow-purple-950/40"
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-2xl text-sm ${iconColors[colorIdx]}`}
        >
          <ListChecks size={18} />
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDelete}
          aria-label="Delete quiz"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-purple-900/40 bg-purple-900/30 text-purple-300 opacity-0 transition-all duration-200 hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400 group-hover:opacity-100"
        >
          <Trash2 size={15} />
        </motion.button>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white">{quiz.title}</h3>
        {quiz.description && (
          <p className="mt-1 text-sm text-purple-300">{quiz.description}</p>
        )}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-purple-900/40 pt-4">
        <span className="flex items-center gap-1 text-sm font-medium text-purple-300 transition-colors group-hover:text-white">
          View
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
