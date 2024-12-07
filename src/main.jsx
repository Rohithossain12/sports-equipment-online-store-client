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
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ViewDetails from "./components/Pages/ViewDetails";
import UpdateProduct from "./components/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:5000/product-limit')
      },
      {
        path: "/allSports",
        element: <AllSportsEquipment></AllSportsEquipment>,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "/addEquipment",
        element: (
          <PrivateRoute>
            <AddEquipment></AddEquipment>
          </PrivateRoute>
        ),
      },
      {
        path: "/myEquipment",
        element: (
          <PrivateRoute>
            <MyEquipmentList></MyEquipmentList>
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/update/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
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
