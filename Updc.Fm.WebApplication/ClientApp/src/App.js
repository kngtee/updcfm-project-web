import React from "react";
import { Route, Routes } from "react-router-dom";
import "./custom.css";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
    </Routes>

    // <Layout>
    //   <Routes>
    //     {AppRoutes.map((route, index) => {
    //       const { element, ...rest } = route;
    //       return <Route key={index} {...rest} element={element} />;
    //     })}
    //   </Routes>
    //   <Route path="/login" element={<Login />} />
    // </Layout>
  );
}
export default App;
