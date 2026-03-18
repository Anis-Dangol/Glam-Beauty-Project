
import { createBrowserRouter } from "react-router-dom";


import { RouterProvider } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Aboutpage from "../pages/Aboutpage";
import PageLayout from "../layout/PageLayout";
import AccountPage from "../pages/AccountPage";
import ContactUsPage from "../pages/ContactUsPage";
import CartPage from "../pages/CartPage";
import Homepage from "../pages/Homepage";
import Checkout from "../pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/",
    element: <PageLayout />,
    children: [
      { index:true, element: <Homepage /> },
      { path:"aboutus", element: <Aboutpage /> },
      { path:"account", element: <AccountPage /> },
      { path:"contactus", element: <ContactUsPage /> },
      { path:"cart", element: <CartPage /> },
      { path:"checkout", element: <Checkout /> },
    ],
  },
]);

const Router = () => {
  return (
    
    <RouterProvider router={router} />
  );
};

export default Router;


