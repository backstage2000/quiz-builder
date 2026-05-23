import { App, HomePage, QuizDetailPage, QuizzesPageCreate } from "@pages";
import type { JSX } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizzesPage } from "@pages";

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="quizzes">
            <Route index element={<QuizzesPage />} />
            <Route path="create" element={<QuizzesPageCreate />} />
            <Route path=":id" element={<QuizDetailPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
