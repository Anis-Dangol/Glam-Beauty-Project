import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "../src/styles/index.css";

import Router from "./routes/Routes.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Toaster />
      <Router />
    </AuthProvider>
  </StrictMode>,
);
