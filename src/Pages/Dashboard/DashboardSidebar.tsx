import styles from "./DashboardSidebar.module.scss";
import { useState } from "react";
type Props = {};

const DashboardSidebar = (props: Props) => {

    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <>
            {isSidebarOpen && (
                <div className={styles.sidebar_container}>
                    <div className={styles.sidebar_wrapper}>
                        <div className={styles.side_logo}>
                            <img src="./assets/technogeticlogo.svg" alt="Tglogo" />
                        </div>
                        <div>
                            <li>
                                <ul>Dashboard</ul>
                                <ul>Dashboard</ul>
                                <ul>Dashboard</ul>
                            </li>
                        </div>
                    </div>
                </div>
            )}

            <div className="navbar_container">
                <div className="navbar_wrapper">
                    <div className="navbar_content">
                        <div className={styles.hamburger_btn} onClick={toggleSidebar}>
                            <img src="./assets/HamburgerBtn.svg" alt="Hamburgerbtn" />
                        </div>
                        {isSidebarOpen && (
                            <>
                                <div className={styles.close_btn} onClick={closeSidebar}>
                                    <img src="./assets/CloseBtn.svg" alt="Tglogo" />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>


        </>
    )
};

export default DashboardSidebar;