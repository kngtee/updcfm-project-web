import React from "react";
import { Route, Routes } from "react-router-dom";
import "./custom.css";
import Login from "./components/Login";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
