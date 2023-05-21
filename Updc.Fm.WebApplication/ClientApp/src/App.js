import React from "react";
import { Route, Routes } from "react-router-dom";
import "./custom.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import SalesNewUnit from "./components/SalesNewUnit";
import PopBox from "./Utilities/PopBox";
import SalesAllocation from "./components/SalesAllocation";
import SalesView from "./components/SalesView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sales" element={<PopBox/>} />
      <Route path="/sales/unit" element={<SalesNewUnit />} />
      <Route path="/sales/allocation" element={<SalesAllocation />} />
      <Route path="/sales/view" element={<SalesView />} />

    </Routes>
  );
}
export default App;
