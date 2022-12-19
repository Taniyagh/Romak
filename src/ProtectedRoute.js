import React from "react";
import { isLogin } from "./utils/Auth";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ component }) {
  const isLogged = isLogin();
  return (
    <>
      {isLogged ? 
        component
       : 
        <Navigate to="/login" />
      }
    </>
  );
}

export default ProtectedRoute;
