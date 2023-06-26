import { useEffect, useState } from "react";
import styles from "./Teacher.module.scss";
import DashboardSidebar from "../../../Components/SideBar/DashboardSidebar";
import TableData from "../../../Components/Table/TableData";
import studentData from "../../../utils/data.json";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { BtnDashboard } from "../../../Components/CommonComp/BtnDashboard";
// @ts-ignore
import { Pagination } from "technogetic-iron-smart-ui";

export interface IAppProps {}

export function Teacher() {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginated, setPaginatedData] = useState<any[]>([]);
  const rowPerPage = 10;

  const transformedStudentData = studentData.studentData.map((item) => ({
    StudentName: item.StudentName,
    Student: item.Student,
    studentID: item.studentID,
    Mobile: item.Mobile,
    Course: item.Course,
  }));

  useEffect(() => {
    const startIndex = (currentPage - 1) * rowPerPage;
    const endIndex = startIndex + rowPerPage;
    const paginatedData = transformedStudentData.slice(startIndex, endIndex);
    setPaginatedData(paginatedData);
  }, []);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * rowPerPage;
    const endIndex = startIndex + rowPerPage;
    const paginatedData = transformedStudentData.slice(startIndex, endIndex);
    setPaginatedData(paginatedData);
  };

  return (
    <>
      <div className={styles.main_container}>
        <DashboardSidebar />
        <div className={styles.abcd}>
          <Navbar />
          <div className={styles.wrapper_main}>
            <div className={styles.sidebar_wrapper}></div>
            <div className={styles.dashboard_content}>
              <div>
                <BtnDashboard />
              </div>
              <div className={styles.table_wrapper}>
                <TableData studentData={paginated} />
                <div className={styles.pagination}>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(
                      transformedStudentData.length / rowPerPage
                    )}
                    onPageChange={onPageChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
