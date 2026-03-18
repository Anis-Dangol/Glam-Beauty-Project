
import { createBrowserRouter } from "react-router-dom";


import { RouterProvider } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

const Router = () => {
  return (
    
    <RouterProvider router={router} />
  );
};

export default Router;


