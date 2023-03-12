import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Container } from "components/Container";
import { MainLayout } from "pages/MainLayot";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}></Route>
    </Routes>
  );
}

export default App;
