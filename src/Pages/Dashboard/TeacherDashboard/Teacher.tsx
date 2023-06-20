import * as React from "react";
import styles from "../TeacherDashboard/Teacher.module.scss";
import { Navbar } from "./Navbar";

// export interface IAppProps {

// }

export function Teacher() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
    </div>
  );
}
