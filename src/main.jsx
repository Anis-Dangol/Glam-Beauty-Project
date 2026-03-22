import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "../src/styles/index.css";

import Router from "./routes/Routes.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </StrictMode>,
);
