import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import Details from "../pages/Details/Details";
import PrivateRoute from "../components/context/PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("../event.json"),
        hydrateFallbackElement: (
          <span className="loading loading-spinner loading-xl"></span>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/details/:id",
    element: (
      <PrivateRoute>
        <Details></Details>
      </PrivateRoute>
    ),
    loader: () => fetch("../event.json"),
    hydrateFallbackElement: (
      <span className="loading loading-spinner loading-xl"></span>
    ),
  },
]);
