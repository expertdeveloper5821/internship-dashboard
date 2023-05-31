import * as React from "react";
import styles from "../TeacherDashboard/Teacher.module.scss";

// export interface IAppProps {

// }

const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male" },
];

export function Teacher() {
  return (
    <div className={styles.container}>
      <table>
        <tr className="table">
          <th>Assignment name</th>
          <th>Assignment Id</th>
          <th>Student</th>
          <th>Assigned Date</th>
          <th>Deadline</th>
          <th>Action</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
