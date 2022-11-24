import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "src/components";
import { MainPage } from "./pages";

export const App: React.FC = () => {
  /**
   * 조건문으로 메인에서 Navbar
   */

  return (
    <>
      <Navbar />
      <div style={{ paddingBottom: "13rem" }}></div>
      <Routes>
        <Route index element={<MainPage />} />
      </Routes>
    </>
  );
};
