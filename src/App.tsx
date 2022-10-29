import React from "react";
import { Route, Routes } from "react-router-dom";
import { Post, Navbar } from "src/components";
import { AuthPage } from "./pages/auth";

export const App: React.FC = () => {
  /**
   * 조건문으로 메인에서 Navbar
   */

  return (
    <>
      <Navbar />
      <div style={{ paddingBottom: "13rem" }}></div>
      <Routes>
        <Route path="auth">
          <Route path="login" element={<AuthPage />} />
        </Route>
        <Route path="post" element={<Post />} />
      </Routes>
    </>
  );
};
