import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ResetPassword } from "../Pages/Login/ResetPassword";
import Login from "../Pages/Login/Login";
import { SentMail } from "../Pages/Login/SentMail";
import Verification from "../Pages/Login/Verification/Verification";
import AuthSuccess from "../Pages/Login/AuthSuccess/AuthSuccess";
import AuthFail from "../Pages/Login/AuthFail/AuthFail";

type Props = {};

const Routers = (props: Props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/mailsent" element={<SentMail />} />
        <Route path="/verified" element={<Verification />} />
        <Route path="/success" element={<AuthSuccess />} />
        <Route path="/error" element={<AuthFail />} />
      </Routes>
    </Router>
  );
};

export default Routers;
