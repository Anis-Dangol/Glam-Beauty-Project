import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "../src/styles/index.css";
// import Router from "./routes/Router.jsx";
import Navbar from "./components/widgets/Navbar.jsx";
import Header from "./components/modules/Header.jsx";
import Checkout from "./pages/Checkout.jsx";
// import Aboutpage from "./pages/Aboutpage.jsx";


createRoot(document.getElementById("root")).render(
    <BrowserRouter>
    <StrictMode>
      <Header label={"50% OFF"} className={"p-2"}/>,
        <Navbar />,
        <Checkout/>,
        {/* <Router />   */}
        {/* <Aboutpage/> */}
    </StrictMode>,
    </BrowserRouter>
);