import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyState = () => {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        rounded-3xl border border-dashed border-purple-800
        bg-purple-950/40 px-6 py-20 text-center
      "
    >
      <div
        className="
          mb-5 flex h-16 w-16 items-center justify-center
          rounded-2xl bg-purple-900/50
        "
      >
        <PlusCircle size={32} className="text-purple-300" />
      </div>

      <h3 className="mb-2 text-xl font-semibold text-white">No quizzes yet</h3>

      <p className="mb-6 max-w-md text-sm text-purple-300">
        You don’t have any quizzes yet. Create your first quiz and start adding
        questions.
      </p>

      <Link
        to="/quizzes/create"
        className="
          rounded-2xl bg-purple-600 px-5 py-3
          text-sm font-medium text-white
          transition-colors duration-200
          hover:bg-purple-500
        "
      >
        Create first quiz
      </Link>
    </div>
  );
};

export default EmptyState;
