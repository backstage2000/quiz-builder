// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="border-t border-purple-900/40 bg-purple-950">
//       <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-6">
//         {/* Left */}
//         <div className="flex flex-col gap-2">
//           <Link to="/" className="flex items-center gap-3">
//             <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-700 shadow-lg shadow-purple-900/30">
//               <span className="text-sm font-bold text-purple-100">QF</span>
//             </span>

//             <div>
//               <h2 className="text-sm font-semibold tracking-wide text-white">
//                 QuizForge
//               </h2>

//               <p className="text-xs text-purple-300">
//                 Create and manage quizzes
//               </p>
//             </div>
//           </Link>

//           <p className="text-xs text-purple-400">
//             © 2026 QuizForge. All rights reserved.
//           </p>
//         </div>

//         {/* Navigation */}
//         <nav className="flex flex-wrap items-center gap-3 text-sm">
//           <Link
//             to="/quizzes"
//             className="rounded-lg px-3 py-2 text-purple-200 transition hover:bg-purple-900/60 hover:text-white"
//           >
//             Quizzes
//           </Link>

//           <Link
//             to="/create"
//             className="rounded-lg px-3 py-2 text-purple-200 transition hover:bg-purple-900/60 hover:text-white"
//           >
//             Create
//           </Link>

//           <Link
//             to="/about"
//             className="rounded-lg px-3 py-2 text-purple-200 transition hover:bg-purple-900/60 hover:text-white"
//           >
//             About
//           </Link>
//         </nav>

//         {/* Socials */}
//         <div className="flex items-center gap-3">
//           <a
//             href="#"
//             className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-900/50 text-purple-200 transition hover:bg-purple-800 hover:text-white"
//           >
//             {/* <Github size={18} /> */}
//           </a>

//           <a
//             href="#"
//             className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-900/50 text-purple-200 transition hover:bg-purple-800 hover:text-white"
//           >
//             {/* <Linkedin size={18} /> */}
//           </a>

//           <a
//             href="#"
//             className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-900/50 text-purple-200 transition hover:bg-purple-800 hover:text-white"
//           >
//             {/* <Mail size={18} /> */}
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer className=" bg-purple-950 py-4 text-center text-[13px] text-gray-400">
      QuizForge © {new Date().getFullYear()}
    </footer>
  );
}
