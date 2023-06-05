import * as React from "react";
import styles from "../TeacherDashboard/Navabar.module.scss";
import { HiOutlineBars3 } from "react-icons/hi2";
import { SlSettings } from "react-icons/sl";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";

// @ts-ignore
import { Avatar } from "technogetic-iron-smart-ui";

export interface IAppProps {}

export function Navbar() {
  return (
    <header>
      <nav className={styles.container} style={{ border: "1px solid black" }}>
        <div className={styles.navbarbrand}>
          <HiOutlineBars3 className={styles.outlinebar} />
        </div>

        <ul className={styles.navbarnav}>
          <li className={styles.navitem}>
            <SlSettings className={styles.setting} />
          </li>
          <li className={styles.navitem}>
            <IoNotificationsOutline className={styles.notification} />
          </li>
          <li className={styles.navitem}>
            <Avatar
              onClick={function noRefCheck() {}}
              size={10}
              src="./assets/avatar.png"
            />
          </li>
          <li className={styles.navitem}>
            <IoMdArrowDropdown className={styles.dropdown} />
          </li>
          <li className={styles.navitem}>
            <div className={styles.username_details}>
              <h1>Harry Verma</h1>
              <span>Web Developer</span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
