import styles from "../../Pages/Dashboard/TeacherDashboard/Teacher.module.scss";
import DashboardSidebar from "../../Components/SideBar/DashboardSidebar";
import TableData from "../../Components/Table/TableData";
import studentData from "../../utils/studentData.json";
//@ts-ignore
import { Select, Button, Input } from "technogetic-iron-smart-ui";

export interface IAppProps { }

export function StudentProfile() {
    const transformedStudentData = studentData.studentData;

    return (
        <>
            <DashboardSidebar />
            <div className={styles.dashboard_content}>
                <h2>Students</h2>
                <div className={styles.content_wrapper}>
                    <div className={styles.input_desc}>
                        <Input placeholder="Assignment Name" type="text"></Input>
                        <Input placeholder="Student Name" type="text"></Input>
                        <div className={styles.select_wrapper}>
                            <Select
                                className={styles.select_content}
                                option={[
                                    "HTML",
                                    "CSS",
                                    "Material UI",
                                    "Bootstrap",
                                    "Javascript",
                                    "React Js",
                                    "Node Js",
                                    "Express Js",
                                    "MongoDB",
                                    "MySQL",
                                    "Git",
                                ]}
                                padding="8px"
                                placeholder="Courses"
                                width="200px"
                            />
                        </div>
                        <div className={styles.button_wrapper}>
                            <Button className={styles.searchbutton} varient="contained">
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={styles.table_wrapper}>
                    <TableData studentData={transformedStudentData} />
                </div>
            </div>
        </>
    );
}
