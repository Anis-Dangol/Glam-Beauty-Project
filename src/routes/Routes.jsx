
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
      { path:"wishlist", element: <Wishlist /> },
      { path:"productdetails/:id", element: <ProductDetails /> },
    ],
  },
]);

const Router = () => {
  return (
    
    <RouterProvider router={router} />
  );
};

export default Router;


