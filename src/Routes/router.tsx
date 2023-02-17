import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/home";
import { Home2 } from "../Pages/Home/home2";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/home2`} element={<Home2 />} />
          <Route path="*" element={<>No Match</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
