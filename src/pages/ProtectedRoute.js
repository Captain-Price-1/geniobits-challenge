import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  console.log(username);
  console.log(password);
  //   const navigate = useNavigate();
  if (!username || !password) {
    console.log("back to login");
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoutes;
