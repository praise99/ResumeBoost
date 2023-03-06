import React from "react";
import { Route, Routes } from "react-router-dom";
import CoverWriting from "../component/cover-letter";
import CreateCoverLetter from "../component/cover-letter/create";
import Details from "../component/cover-letter/details";
const CoverLetter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CoverWriting />} />
        <Route path="/create" element={<CreateCoverLetter />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
};

export default CoverLetter;
