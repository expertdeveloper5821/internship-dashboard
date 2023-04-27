import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ResetPassword } from "../Pages/Login/ResetPassword";
import Login from "../Pages/Login/Login";

type Props = {};

const Routers = (props: Props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
};

export default Routers;
