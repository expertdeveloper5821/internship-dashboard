import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "../.././src/Pages/Login/login";
import { ResetPassword } from "../../src/Pages/Login/resetpassword";

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
