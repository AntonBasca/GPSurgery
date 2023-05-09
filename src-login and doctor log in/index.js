import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import LoginPage from './Pages/LoginPage';
import reportWebVitals from './reportWebVitals';
import RecordPage from './Pages/recordpage';


import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App2 />,
    },
    {
        path: "/doctor",
        element: <App />,
    },
    {
        path: "LoginPage",
        element: <LoginPage />,
    },


    {
        path: "record-page",
        element: <RecordPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
