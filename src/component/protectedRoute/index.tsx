import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getCurrentUserInstance } from "../../state/localstorage";

const useAuth = () => {
  const user: any = getCurrentUserInstance();
  if (user && user.email) {
    return true;
  } else {
    return false;
  }
};
const ProtectedRoutes = (props: any) => {
  const auth = useAuth();
  console.log(auth, "auth");
  return auth ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoutes;
