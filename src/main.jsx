import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import Home from "./components/Home";
import ErrorPage from "./components/Pages/ErrorPage";
import AllSportsEquipment from "./components/AllSportsEquipment";
import AddEquipment from "./components/AddEquipment";
import MyEquipmentList from "./components/MyEquipmentList";
import Login from "./components/Login";
import Register from "./components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allSports",
        element: <AllSportsEquipment></AllSportsEquipment>,
      },
      {
        path: "/addEquipment",
        element: <AddEquipment></AddEquipment>,
      },
      {
        path: "/myEquipment",
        element: <MyEquipmentList></MyEquipmentList>,
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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
