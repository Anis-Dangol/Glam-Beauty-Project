import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "../src/styles/index.css";
import Routes from "./routes/Routes.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes />
    </StrictMode>
  </BrowserRouter>,
);
