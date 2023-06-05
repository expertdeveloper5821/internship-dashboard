import styles from "./DashboardSidebar.module.scss";
import { useState } from "react";
//@ts-ignore
import { Drawer, MenuItem, Button, Menu } from "technogetic-iron-smart-ui";

type Props = {};

const DashboardSidebar = (props: Props) => {

    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isDropDownOpen, setDropDownOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleDropDown = () => {
        setDropDownOpen(!isDropDownOpen);
    }

    return (
        <>
            <Button onClick={toggleSidebar} className={styles.toggleSideBar}>
                <img src="./assets/HamburgerBtn.svg" alt="Sidebar_Btn"></img>
            </Button>
            {isSidebarOpen && (
                <>
                    <div className={styles.sidebar_container}>
                        <div className={styles.sidebar_wrapper}>
                            <div className={styles.side_logo}>
                                <img src="./assets/technogeticlogo.svg" alt="Tglogo" />
                            </div>
                            <div className={styles.content_wrapper}>
                                <Drawer align="left" className={styles.menu_container}>
                                    <Menu className={styles.menu_wrapper}
                                        menuData={[
                                            {
                                                href: '/Dashboard',
                                                icon: <img src="./assets/DashboardImg.svg" alt="dashboard_img"></img>,
                                                key: 'Dashboard',
                                                label: 'Dashboard',
                                            },
                                            {
                                                children: [
                                                    {
                                                        href: '/Syllabus',
                                                        key: 'Syllabus',
                                                        label: 'Syllabus'
                                                    },
                                                    {
                                                        href: '/Assignment',
                                                        key: 'Assignment',
                                                        label: 'Assignment'
                                                    },
                                                    {
                                                        href: '/Students',
                                                        key: 'Students',
                                                        label: 'Students'
                                                    }
                                                ],
                                                icon: <img src="./assets/TeacherImg.svg" alt="Teacher_img"></img>,
                                                key: 'Teachers',
                                                label: 'Teachers',
                                            },
                                            {
                                                href: '/Comments',
                                                icon: <img src="./assets/CommentsImg.svg" alt="Comments_img"></img>,
                                                key: 'Comments',
                                                label: 'Comments',
                                            },
                                            {
                                                href: '/Notifications',
                                                icon: <img src="./assets/CommentsImg.svg" alt="Notifications_img"></img>,
                                                key: 'Notifications',
                                                label: 'Notifications',
                                            },
                                        ]}
                                        onClick={handleDropDown}
                                    />
                                </Drawer>
                            </div>
                        </div>
                        <div>
                            <MenuItem className={styles.logout}>
                                <img src="./assets/LogoutImg.svg" alt="logout_img" ></img>
                                Logout
                            </MenuItem>
                        </div>
                    </div>
                </>
            )}
        </>
    )
};

export default DashboardSidebar;