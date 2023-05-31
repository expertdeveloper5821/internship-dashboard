import styles from "./DashboardSidebar.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { NavLink } from "react-router-dom";
type Props = {};

const DashboardSidebar = (props: Props) => {

    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isTeacherDropDownOpen, setTeacherDropDownOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    const toggleTeacherMenu = () => {
        setTeacherDropDownOpen(!isTeacherDropDownOpen);
    }

    return (
        <>
            {isSidebarOpen && (
                <div className={styles.sidebar_container}>
                    <div className={styles.sidebar_wrapper}>
                        <div className={styles.side_logo}>
                            <img src="./assets/technogeticlogo.svg" alt="Tglogo" />
                        </div>
                        <div className={styles.content_wrapper}>
                            <nav>
                                <ul>
                                    <li>
                                        <img src="./assets/DashboardImg.svg" alt="DashImg"></img>
                                        <NavLink to="/dashboard">Dashboard</NavLink>
                                    </li>
                                    <li>
                                        <img src="./assets/TeacherImg.svg" alt="DashImg"></img>
                                        <NavLink to="/teachers" >Teachers</NavLink>
                                        <img src="./assets/DropdownArrow.svg" alt="arrow" onClick={toggleTeacherMenu} style={{ marginLeft: "10px" }}></img>
                                        {isTeacherDropDownOpen && (
                                            <ul className={styles.dropdown_menu}>
                                                <li>
                                                    <NavLink to="/teachers/syllabus">Syllabus</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/teachers/assignments">Assignments</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/teachers/students">Students</NavLink>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                    <li>
                                        <img src="./assets/NotificationImg.svg" alt="DashImg"></img>
                                        <NavLink to="/comments">Comments</NavLink>
                                    </li>
                                    <li>
                                        <img src="./assets/NotificationImg.svg" alt="DashImg"></img>
                                        <NavLink to="/notifications">Notifications</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
            )}

            <div className="navbar_container">
                <div className="navbar_wrapper">
                    <div className="navbar_content">
                        {isSidebarOpen && (
                            <RxHamburgerMenu />
                        )}
                    </div>
                </div>
            </div>


        </>
    )
};

export default DashboardSidebar;