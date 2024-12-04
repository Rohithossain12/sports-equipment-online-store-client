import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import LoadingPage from "../Pages/LoadingPage";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { users, loading } = useContext(AuthContext);
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  if (users && users?.email) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
