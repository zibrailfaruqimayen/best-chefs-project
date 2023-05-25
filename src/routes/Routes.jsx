import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import ChefCard from "../components/ChefCard";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://best-chef-server-zibrailfaruqimayen.vercel.app/data"),
      },
      {
        path: "/chefCard/:id",
        element: (
          <PrivateRoute>
            <ChefCard></ChefCard>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://best-chef-server-zibrailfaruqimayen.vercel.app/data/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
