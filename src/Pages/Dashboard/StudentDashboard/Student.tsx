import * as React from "react";
import styles from "../StudentDashboard/Student.module.scss";
import { Sidebar } from "./Sidebar";

// export interface IAppProps {

// }

export function Student() {
  return (
    <div className={styles.container}>
      <Sidebar></Sidebar>
    </div>
  );
}
