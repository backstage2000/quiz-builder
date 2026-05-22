import { App } from "@pages";
import type { JSX } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizzesPage } from "@pages";

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="quizzes">
            <Route index element={<QuizzesPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
