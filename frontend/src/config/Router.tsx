import { Home } from "@pages";
import type { JSX } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
