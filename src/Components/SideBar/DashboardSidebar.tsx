import styles from "./DashboardSidebar.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import { Drawer, MenuItem, Button, Menu } from "technogetic-iron-smart-ui";

type Props = {};

const DashboardSidebar = (props: Props) => {
  const isSidebarOpen = true;
  const [showMenuIcons, setShowMenuIcons] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNewLogo, setShowNewLogo] = useState(false);
  const [wideSidebar, setWideSidebar] = useState(true);

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
    setIsLoggedIn(false);
  };

  const toggleMenuIcons = () => {
    setShowMenuIcons(!showMenuIcons);
    setShowNewLogo(!showNewLogo);
    setWideSidebar(!wideSidebar);
  };

  return (
    <>
      <Button onClick={toggleMenuIcons} className={styles.toggleSideBar}>
        <img src="./assets/HamburgerBtn.svg" alt="Sidebar_Btn"></img>
      </Button>
      {isSidebarOpen && (
        <>
          <div className={styles.sidebar_container}>
            <div className={styles.sidebar_wrapper}>
              <div className={styles.side_logo}>
                {showNewLogo ? (
                  <img src="./assets/tgwrapped_logo.svg" alt="TgNewLogo" />
                ) : (
                  <img src="./assets/technogeticlogo.svg" alt="Tglogo" />
                )}
              </div>
              <div className={styles.content_wrapper}>
                <Drawer align="left" className={styles.menu_container}>
                  <Menu
                    className={styles.menu_wrapper}
                    menuData={[
                      {
                        href: "/Dashboard",
                        icon: showMenuIcons ? (
                          <img
                            src="./assets/DashboardImg.svg"
                            alt="dashboard_img"
                          ></img>
                        ) : null,
                        key: "Dashboard",
                        label: showMenuIcons ? "Dashboard" : <img
                          src="./assets/DashboardImg.svg"
                          alt="dashboard_img"
                        ></img>,
                      },
                      {
                        children: showMenuIcons
                          ? [
                            {
                              href: "/Syllabus",
                              key: "Syllabus",
                              label: "Syllabus",
                            },
                            {
                              href: "/Assignment",
                              key: "Assignment",
                              label: "Assignment",
                            },
                            {
                              href: "/student",
                              key: "Students",
                              label: "Students",
                            },
                          ]
                          : null,
                        icon: showMenuIcons ? (
                          <img
                            src="./assets/TeacherImg.svg"
                            alt="Teacher_img"
                          ></img>
                        ) : null,
                        key: "Teachers",
                        label: showMenuIcons ? "Teachers" : <img
                          src="./assets/TeacherImg.svg"
                          alt="Teacher_img"
                        ></img>
                      },
                      {
                        href: "/Comments",
                        icon: showMenuIcons ? (
                          <img
                            src="./assets/CommentsImg.svg"
                            alt="Comments_img"
                          ></img>
                        ) : null,
                        key: "Comments",
                        label: showMenuIcons ? "Comments" : <img
                          src="./assets/CommentsImg.svg"
                          alt="Comments_img"
                        ></img>,
                      },
                      {
                        href: "/Notifications",
                        icon: showMenuIcons ? (
                          <img
                            src="./assets/CommentsImg.svg"
                            alt="Notifications_img"
                          ></img>
                        ) : null,
                        key: "Notifications",
                        label: showMenuIcons ? "Notifications" : <img
                          src="./assets/CommentsImg.svg"
                          alt="Notifications_img"
                        ></img>
                      },
                    ]}
                  />
                </Drawer>
              </div>
            </div>
            <div className={styles.logout}>
              <MenuItem onClick={handleLogout}>
                {showMenuIcons && <img src="./assets/LogoutImg.svg" alt="logout_img" />}
                {!showMenuIcons || "Logout"}
              </MenuItem>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DashboardSidebar;
