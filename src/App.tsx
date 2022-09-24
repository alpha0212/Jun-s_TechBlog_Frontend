import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "src/components";

export const App: React.FC = () => {
  /**
   * 조건문으로 메인에서 Navbar
   */
  return (
    <>
      <Navbar />
      <Routes></Routes>
    </>
  );
};
