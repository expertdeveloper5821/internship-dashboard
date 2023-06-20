import * as React from "react";
import { useState } from "react";
import styles from "../StudentDashboard/Sidebar.module.scss";
// @ts-ignore
import { Drawer } from "technogetic-iron-smart-ui";

export interface IAppProps {}

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isProfileOpen, setProfileOpen] = useState(false);

  // const handleProfileToggle = () => {
  //   setProfileOpen(!isProfileOpen);
  // };

  return (
    <header>
      <div className={styles.maincontainer}>
        {/* <div className={styles.sidebar}>
          <img src="./assets/technogeticlogo.svg" alt="Tg-logo"></img>
          {/* <ul> */}
        {/* <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#" onClick={handleProfileToggle}>
                My Profile
              </a>
              {isProfileOpen && (
                <ul className="dropdown">
                  <li>
                    <a href="#">Edit Student Details</a>
                  </li>
                  <li>
                    <a href="#">Assignments</a>
                  </li>
                  <li>
                    <a href="#">Syllabus</a>
                  </li>
                  <li>
                    <a href="#">Fees paid </a>
                  </li>
                  <li>
                    <a href="#">Instrutors</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#">Comments</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
          </ul> */}

        {/* </div> */}
        <Drawer isOpen={isOpen} />
        <button onClick={() => setIsOpen(!isOpen)}>Dashboard</button>
      </div>
      <div></div>
    </header>
  );
}
