import React from "react";
import styles from "./Notification.module.scss";
import { Navbar } from "../../Components/Navbar/Navbar";
import DashboardSidebar from "../../Components/SideBar/DashboardSidebar";
//@ts-ignore
import { Avatar } from "technogetic-iron-smart-ui";


export interface IAppProps { }

export function Notification() {


    return (
        <>
            <div className={styles.main_container}>
                <DashboardSidebar />
                <div className={styles.abcd}>
                    <Navbar />

                    <div className={styles.container}>
                        <h1 className={styles.Notification}>Notifications</h1>
                        <span className={styles.main_profile}>
                            Dashboard/Notifications
                        </span>
                    </div>
                    <div className={styles.sort}>
                        <img src="../assets/sort.svg" alt="sort"></img>
                        <span className={styles.text}>Sort by</span>
                    </div>

                    <div className={styles.notificationbar}>
                        <Avatar
                            onClick={() => { }}
                            src="./assets/avatar.png"
                            size={14}
                        />
                        <div className={styles.dateandtime}>
                            <h1>Jaspreet kaur commented on Dashboard homepage for Technogetic</h1>
                            <span className={styles.date}>17 april at 7:30 am</span>
                        </div>
                    </div>

                    <div className={styles.notificationbar}>
                        <Avatar
                            onClick={() => { }}
                            src="./assets/avatar.png"
                            size={14}
                        />
                        <div className={styles.dateandtime}>
                            <h1>Jaspreet kaur commented on Dashboard homepage for Technogetic</h1>
                            <span className={styles.date}>17 april at 7:30 am</span>
                        </div>
                    </div>

                    <div className={styles.notificationbar}>
                        <Avatar
                            onClick={() => { }}
                            src="./assets/avatar.png"
                            size={14}
                        />
                        <div className={styles.dateandtime}>
                            <h1>Jaspreet kaur commented on Dashboard homepage for Technogetic</h1>
                            <span className={styles.date}>17 april at 7:30 am</span>
                        </div>
                    </div>

                    <div className={styles.notificationbar}>
                        <Avatar
                            onClick={() => { }}
                            src="./assets/avatar.png"
                            size={14}
                        />
                        <div className={styles.dateandtime}>
                            <h1>Jaspreet kaur commented on Dashboard homepage for Technogetic</h1>
                            <span className={styles.date}>17 april at 7:30 am</span>
                        </div>
                    </div>

                    <div className={styles.notificationbar}>
                        <Avatar
                            onClick={() => { }}
                            src="./assets/avatar.png"
                            size={14}
                        />
                        <div className={styles.dateandtime}>
                            <h1>Jaspreet kaur commented on Dashboard homepage for Technogetic</h1>
                            <span className={styles.date}>17 april at 7:30 am</span>
                        </div>

                    </div>

                    <div className={styles.notificationbar}>
                        <Avatar
                            onClick={() => { }}
                            src="./assets/avatar.png"
                            size={14}
                        />
                        <div className={styles.dateandtime}>
                            <h1>Jaspreet kaur commented on Dashboard homepage for Technogetic</h1>
                            <span className={styles.date}>17 april at 7:30 am</span>
                        </div>
                    </div>

                    <div className={styles.notificationbar}>
                        <Avatar
                            onClick={() => { }}
                            src="./assets/avatar.png"
                            size={14}
                        />
                        <div className={styles.dateandtime}>
                            <h1>Jaspreet kaur commented on Dashboard homepage for Technogetic</h1>
                            <span className={styles.date}>17 april at 7:30 am</span>
                        </div>
                    </div>




                </div>
            </div>

        </>
    );
}
