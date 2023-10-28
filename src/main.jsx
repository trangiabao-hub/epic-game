import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StorePage from "./pages/store/index.jsx";
import LibraryPage from "./pages/library/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <StorePage />,
      },
      {
        path: "/library",
        element: <LibraryPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
