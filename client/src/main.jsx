import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Layout from "./Layout.jsx";
import TrustedCompaniesList from "./Components/TrustedCompaniesList.jsx";
import FindAJobPage from "./Pages/FindAJobPage.jsx";
import Login from "./Pages/LoginPage.jsx";
import SignupPage from "./Pages/SignupPage.jsx";
import UserProfilePage from "./Pages/UserProfilePage.jsx";
import AboutUsPage from "./Pages/AboutUsPage.jsx";
import UserInfoForm from "./Pages/UserInfoFormPage/UserInfoForm.jsx";
// Define routes
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "find-a-job", element: <FindAJobPage /> },
      { path: "/about", element: <AboutUsPage /> },
      // { path: "/login", element: <Login /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <SignupPage /> },
  { path: "/profile", element: <UserProfilePage /> },
  { path: "/UserInfoFormData", element: <UserInfoForm /> },
];

// Create router
const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Layout /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
