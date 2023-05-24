import * as React from 'react';
import styles from "../StudentDashboard/Student.module.scss"
import DashboardSidebar from '.././DashboardSidebar';
// export interface IAppProps {
// }

export function Student() {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.background}>
          <DashboardSidebar />
          <h2>Student</h2>
        </div>
      </div>
    </header>
  );
}