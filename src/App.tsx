import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme/theme";
import { GlobalStyle } from "./style";
import Layout from "./component/layout";
import DashboardPage from "./pages/dashboard";
import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./component/authentication/signup";
import Login from "./component/authentication/login";
import ProtectedRoutes from "./component/protectedRoute";
import InnerContent from "./component/protectedRoute/innerContent";
function App() {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<InnerContent />}>
              <Route path="/" element={<Navigate replace to="dashboard" />} />
              <Route path="/*" element={<DashboardPage />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}
export default App;
