import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../Layout/LayoutRoot";
import Home from "../page/Home";
import LayoutPrivate from "../Layout/LayoutPrivate";
import Dashboard from "../page/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/dashboard",
        element: <LayoutPrivate />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
  {},
]);
