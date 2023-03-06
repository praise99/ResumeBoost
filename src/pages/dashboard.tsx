import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../component/dashboard";
import CoverLetter from "./coverLetter";

const DashboardPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/cover-letter/*" element={<CoverLetter />} />
      </Routes>
    </>
  );
};

export default DashboardPage;
