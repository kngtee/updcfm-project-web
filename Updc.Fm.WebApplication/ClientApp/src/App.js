import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./custom.css";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import Admin  from "./components/Admin";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/fetch-data" element={<FetchData />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Admin" element={<Admin/>}/>
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
}
