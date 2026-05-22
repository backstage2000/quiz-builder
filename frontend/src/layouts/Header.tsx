import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-purple-900/40 bg-purple-950/95 backdrop-blur">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/quizzes" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-700 shadow-lg shadow-purple-900/30">
            {/* <Brain size={18} className="text-purple-100" /> */}
          </span>

          <div className="hidden sm:block">
            <h1 className="text-[17px] font-semibold tracking-wide text-white">
              QuizForge
            </h1>

            <p className="text-xs text-purple-300">Quiz dashboard</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-2">
          <Link
            to="/quizzes"
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition-all
              ${
                pathname === "/quizzes"
                  ? "bg-purple-800 text-white shadow-md"
                  : "text-purple-200 hover:bg-purple-900/60 hover:text-white"
              }`}
          >
            {/* <LayoutGrid size={16} /> */}
            <span className="hidden sm:block">Quizzes</span>
          </Link>

          <Link
            to="/create"
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition-all
              ${
                pathname === "/create"
                  ? "bg-purple-800 text-white shadow-md"
                  : "text-purple-200 hover:bg-purple-900/60 hover:text-white"
              }`}
          >
            {/* <Plus size={16} /> */}
            <span className="hidden sm:block">Create</span>
          </Link>
        </nav>

        {/* Action Button */}
        <Link
          to="/create"
          className="flex items-center gap-2 rounded-xl bg-purple-700 px-4 py-2 text-sm font-medium text-purple-100 transition-all hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-900/30"
        >
          {/* <Plus size={16} /> */}

          <span className="hidden md:block">New quiz</span>
        </Link>
      </div>
    </header>
  );
}
