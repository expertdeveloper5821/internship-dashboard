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
import { Teacher } from "../Pages/Dashboard/TeacherHomePage/Teacher";
import { Student } from "../Pages/Dashboard/StudentDashboard/Student";
import { ProfileSetting } from "../Pages/Dashboard/TeacherDashboard/ProfilePage/ProfileSetting";
import { Syllabus } from "../Pages/Dashboard/TeacherDashboard/Syllabus/Syllabus";
import { StudentProfile } from "../Pages/Dashboard/TeacherDashboard/StudentProfile/StudentProfile";
import { StudentAssignmentStatus } from "../Pages/Dashboard/TeacherDashboard/StudentAssignmentStatus/StudentAssignmentStatus";
import { CreateAssignment } from "../Pages/Dashboard/TeacherDashboard/CreateAssignment/CreateAssignment";
import { Notification } from "../Components/Notification/Notification";

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
        <Route path="/StudentAssignmentStatus" element={<StudentAssignmentStatus />} />
        <Route path="/CreateAssignment" element={<CreateAssignment />} />
        <Route path="Notification" element={<Notification />} />
      </Routes>
    </Router>
  );
};

export default Routers;
