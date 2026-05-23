import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@style/index.css";

import QueryClientProvider from "@store";
import { ReactQueryDevtools, Router, Toaster } from "@config";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider>
      <ReactQueryDevtools />
      <Toaster />
      <Router />
    </QueryClientProvider>
  </StrictMode>,
);
