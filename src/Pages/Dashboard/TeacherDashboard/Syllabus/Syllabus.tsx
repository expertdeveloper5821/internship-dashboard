import * as React from "react";
import styles from "./Syllabus.module.scss";
//@ts-ignore
import { Button } from "technogetic-iron-smart-ui";
import { Navbar } from "../../../../Components/Navbar/Navbar";
import studentData from "../../../../utils/Assignment.json";
import TableData from "../../../../Components/Table/TableData";
import DashboardSidebar from "../../../../Components/SideBar/DashboardSidebar";

export interface IAppProps { }

export function Syllabus() {
  const courses = [
    { name: "UI Figma basic", quantity: "+ 30 docs" },
    { name: "UI Figma basic", quantity: "+ 30 docs" },
    { name: "UI Figma basic", quantity: "+ 30 docs" },
    { name: "UI Figma basic", quantity: "+ 30 docs" },
    { name: "UI Figma basic", quantity: "+ 30 docs" },
  ];

  const transformedStudentData = studentData.studentData;

  console.log(transformedStudentData);

  const columns = ["StudentName", "Student"];

  return (
    <>
      <div className={styles.main_container}>
        <DashboardSidebar />
        <div className={styles.abcd}>
          <Navbar />
          <div className={styles.container}>
            <h1 className={styles.Profile_Setting}>Syllabus</h1>
            <span className={styles.main_profile}>Dashboard/Syllabus</span>
          </div>
          <div className={styles.upload}>
            <div className={styles.upload_section}>
              <div>Docs</div>
              <div>Videos</div>
              <div>PDF</div>
            </div>

            <div className={styles.button}>
              <Button
                onClick={function noRefCheck() { }}
                type="file"
                variant="contained"
                className={styles.newsyllabus}
              >
                Add new Syllabus
              </Button>
            </div>
          </div>
          <div className={styles.document_upload}>
            {courses.map((course, index) => (
              <div className={styles.uploaddocs} key={index}>
                <img src="./assets/docs.svg" alt="document" />
                <div className={styles.course_name}>{course.name}</div>
                <div className={styles.quantity}>{course.quantity}</div>
              </div>
            ))}
          </div>
          <TableData studentData={transformedStudentData} columns={columns} />
        </div>
      </div>
    </>
  );
}
