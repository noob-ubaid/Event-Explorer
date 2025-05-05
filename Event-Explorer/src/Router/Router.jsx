import { createBrowserRouter} from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root ,
    children : [
        {
            index : true,
            Component : Home,
            loader : () => fetch("../event.json")
        },
        {
          path : '/profile',
          Component : Profile
        }
    ]
  },
  {
    path : '/login',
    Component : Login
  }
  
]);
