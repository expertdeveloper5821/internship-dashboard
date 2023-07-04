import { useEffect, useState } from "react";
import styles from "../TeacherHomePage/Teacher.module.scss";
import DashboardSidebar from "../../../../Components/SideBar/DashboardSidebar";
import TableData from "../../../../Components/Table/TableData";
import studentData from "../../../../utils/studentData.json";
import { BtnDashboard } from "../../../../Components/CommonComp/BtnDashboard";
import { Navbar } from "../../../../Components/Navbar/Navbar";
//@ts-ignore
import { Pagination } from "technogetic-iron-smart-ui";

export function StudentProfile() {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginated, setPaginatedData] = useState<any[]>([])
  const rowPerPage = 10;
  const transformedStudentData = studentData.studentData;

  useEffect(() => {
    const startIndex = (currentPage - 1) * rowPerPage;
    const endIndex = startIndex + rowPerPage;
    const paginatedData = transformedStudentData.slice(startIndex, endIndex);
    setPaginatedData(paginatedData)
  }, [])

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * rowPerPage;
    const endIndex = startIndex + rowPerPage;
    const paginatedData = transformedStudentData.slice(startIndex, endIndex);
    setPaginatedData(paginatedData)
  };

  const columns = ["StudentName", "Student", "studentID", "Mobile", "Course"];

  return (
    <>
      <div className={styles.main_container}>
        <DashboardSidebar />
        <div className={styles.abcd}>
          <div className={styles.sidebar_wrapper}>
            <Navbar />
          </div>
          <div className={styles.dashboard_content}>
            <div className={styles.content_wrapper}>
              <h2>Students</h2>
              <BtnDashboard />
            </div>
            <div className={styles.table_wrapper}>
              <TableData studentData={transformedStudentData} columns={columns} />
              <div className={styles.pagination}>
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(transformedStudentData.length / rowPerPage)}
                  onPageChange={onPageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
