import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@style/index.css";

import QueryClientProvider from "@store";
import { ReactQueryDevtools, Router } from "@config";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider>
      <ReactQueryDevtools />
      <Router />
    </QueryClientProvider>
  </StrictMode>,
);
