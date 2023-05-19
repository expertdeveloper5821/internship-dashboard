import * as React from 'react';
import styles from "../StudentDashboard/Student.module.scss"
// export interface IAppProps {
// }

export function Student () {
  return (
    <header>
        <div className={styles.container}>
            <div className={styles.background}>
                <h2>Student</h2>
            </div>
        </div>
    </header>
  );
}