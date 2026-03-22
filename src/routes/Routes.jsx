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
import Wishlist from "../pages/Wishlist";
import ProductDetails from "../pages/ProductDetails";
import ProtectedRoute from "./ProtectedRoute";

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
      { index: true, element: <Homepage /> },
      { path: "aboutus", element: <Aboutpage /> },
      {
        path: "account",
        element: (
          <ProtectedRoute>
            <AccountPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "contactus",
        element: (
          <ProtectedRoute>
            <ContactUsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "wishlist",
        element: (
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        ),
      },
      { path: "productdetails/:id", element: <ProductDetails /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
