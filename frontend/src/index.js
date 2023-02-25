import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./error-page";
import "./index.css";
import Diss from "./routes/diss";
import Test from "./routes/check/test";

import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "disease/:diseaseId",
        element: <Diss />,        
      },
      {
        path:"test/",
        element:<Test />,
      }
    ],
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);