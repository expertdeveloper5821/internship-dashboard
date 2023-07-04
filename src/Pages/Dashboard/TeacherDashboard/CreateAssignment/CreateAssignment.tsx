// import { useEffect, useState } from "react";
// import styles from "../../TeacherHomePage/Teacher.module.scss";
// import DashboardSidebar from "../../../../Components/SideBar/DashboardSidebar";
// import TableData from "../../../../Components/Table/TableData";
// import studentData from "../../../../utils/CreateAssignment.json";
// import { Navbar } from "../../../../Components/Navbar/Navbar";
// import { BtnDashboard } from "../../../../Components/CommonComp/BtnDashboard";
// // @ts-ignore
// import { Pagination } from "technogetic-iron-smart-ui";

// export interface IAppProps { }

// export function CreateAssignment() {

//     const [currentPage, setCurrentPage] = useState(1);
//     const [paginated, setPaginatedData] = useState<any[]>([]);
//     const rowPerPage = 10;

//     const columns = ["StudentName"];

//     const transformedStudentData = studentData.studentData.map((item) => ({
//         StudentName: item.StudentName,
//         Student: item.Student,
//         studentID: item.studentID,
//         Mobile: item.Mobile,
//         Course: item.Course,
//     }));

//     useEffect(() => {
//         const startIndex = (currentPage - 1) * rowPerPage;
//         const endIndex = startIndex + rowPerPage;
//         const paginatedData = transformedStudentData.slice(startIndex, endIndex);
//         setPaginatedData(paginatedData);
//     }, []);

//     const onPageChange = (page: number) => {
//         setCurrentPage(page);
//         const startIndex = (page - 1) * rowPerPage;
//         const endIndex = startIndex + rowPerPage;
//         const paginatedData = transformedStudentData.slice(startIndex, endIndex);
//         setPaginatedData(paginatedData);
//     };

//     return (
//         <>
//             <div className={styles.main_container}>
//                 <DashboardSidebar />
//                 <div className={styles.abcd}>
//                     <div className={styles.sidebar_wrapper}>
//                         <Navbar />
//                     </div>
//                     <div className={styles.dashboard_content}>
//                         <h2>Profile</h2>
//                         <div>
//                             <BtnDashboard />
//                         </div>
//                         <div className={styles.table_wrapper}>
//                             <TableData studentData={paginated} columns={columns} />
//                             <div className={styles.pagination}>
//                                 <Pagination
//                                     currentPage={currentPage}
//                                     totalPages={Math.ceil(transformedStudentData.length / rowPerPage)}
//                                     onPageChange={onPageChange}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

import { useEffect, useState } from "react";
import styles from "./CreateAssignment.module.scss";
import DashboardSidebar from "../../../../Components/SideBar/DashboardSidebar";
import TableData from "../../../../Components/Table/TableData";
import studentData from "../../../../utils/CreateAssignment.json";
import { Navbar } from "../../../../Components/Navbar/Navbar";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { BtnDashboard } from "../../../../Components/CommonComp/BtnDashboard";
// @ts-ignore
import { Pagination } from "technogetic-iron-smart-ui";
export interface IAppProps { }
export function CreateAssignment() {
    const [currentPage, setCurrentPage] = useState(1);
    const [paginated, setPaginatedData] = useState<any[]>([]);
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const rowPerPage = 10;
    const columns = ["StudentName"];
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
                    <div className={styles.sidebar_wrapper}>

                    </div>
                    <div className={styles.dashboard_content}>
                        <h2>Profile</h2>
                        <div>
                            <BtnDashboard />
                        </div>
                        <div className={styles.table_wrapper}>
                            <TableData studentData={paginated} columns={columns} />

                            <div className={styles.description_box}>
                                <Editor
                                    editorState={editorState}
                                    onEditorStateChange={setEditorState}
                                    toolbar={{
                                        options: [
                                            "inline",
                                            "blockType",
                                            "list",
                                            "textAlign",
                                            "link",
                                            "embedded",
                                        ],
                                        inline: {
                                            options: ["bold", "italic", "underline", "strikethrough"],
                                        },
                                        blockType: {
                                            options: [
                                                "Normal",
                                                "H1",
                                                "H2",
                                                "H3",
                                                "H4",
                                                "H5",
                                                "H6",
                                                "Blockquote",
                                                "Code",
                                            ],
                                        },
                                        list: {
                                            options: ["unordered", "ordered"],
                                        },
                                        textAlign: {
                                            options: ["left", "center", "right", "justify"],
                                        },
                                    }}
                                    placeholder="Enter text here..."
                                />
                            </div>
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
