import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import BookAppointment from "./BookAppointment";
import LoginPatient from "./LoginPatient";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "LoginPage",
    element: <LoginPage />,
  },
  {
    path: "LoginPatient",
    element: <LoginPatient />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "RegisterPage",
    element: <RegisterPage />,
  },
  {
    path: "BookAppointment",
    element: <BookAppointment />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
