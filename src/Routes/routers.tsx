import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ResetPassword } from "../Pages/Login/Loginreset/ResetPassword";
import Login from "../Pages/Login/Loginreset/Login";
import { SentMail } from "../Pages/Login/Mailpage/SentMail";
import Verification from "../Pages/Login/Verification/Verification";
import AuthSuccess from "../Pages/Login/AuthSuccess/AuthSuccess";
import AuthFail from "../Pages/Login/AuthFail/AuthFail";
import UpdateCredential from "../Pages/Login/UserCredential/UpdateCredential";
import UpdateCredSuccess from "../Pages/Login/UserCredential/UpdateCredSuccess";
import Homepage from "../Pages/Login/Homepage/Homepage";
import { Teacher } from "../Pages/Dashboard/TeacherDashboard/Teacher";
import { Student } from "../Pages/Dashboard/StudentDashboard/Student";
import { ProfileSetting } from "../Pages/Dashboard/TeacherDashboard/ProfileSetting";
import { Syllabus } from "../Pages/Dashboard/TeacherDashboard/Syllabus";
import { StudentProfile } from "../Pages/StudentProfile/StudentProfile";
import { Navbar } from "../Components/Navbar/Navbar";

type Props = {};

const Routers = (props: Props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/mailsent" element={<SentMail />} />
        <Route path="/verified" element={<Verification />} />
        <Route path="/success" element={<AuthSuccess />} />
        <Route path="/error" element={<AuthFail />} />
        <Route path="/user_credential" element={<UpdateCredential />} />
        <Route path="/user_credential_success" element={<UpdateCredSuccess />} />
        <Route path="/teacher_dashboard" element={<Teacher />} />
        <Route path="/student_dashboard" element={<Student />} />
        <Route path="/profile_setting" element={<ProfileSetting />} />
        <Route path="/Syllabus" element={<Syllabus />} />
        <Route path="/student" element={<StudentProfile />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </Router>
  );
};

export default Routers;
