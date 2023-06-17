import React, { useState } from 'react';
import styles from "./TableData.module.scss";
import tableData from "../../utils/data.json";
//@ts-ignore
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, IconButton } from "technogetic-iron-smart-ui";

type Props = {}

interface Assignment {
  assignmentName: string;
  assignmentID: string;
  studentID: string;
  assignedData: string;
  deadline: string;
}

const TableData = (props: Props) => {
  const [sortedData, setSortedData] = useState(tableData.assignment);
  const [isDescending, setIsDescending] = useState(false);
  const [sortKey, setSortKey] = useState('');

  const handleSort = (key: keyof Assignment) => {
    let sorted = [];

    if (sortKey === key) {
      sorted = [...sortedData].reverse();
      setIsDescending(!isDescending);
    } else {
      sorted = [...sortedData].sort((a, b) => {
        if (a[key] < b[key]) return isDescending ? 1 : -1;
        if (a[key] > b[key]) return isDescending ? -1 : 1;
        return 0;
      });
      setIsDescending(false);
    }
    setSortedData(sorted);
    setSortKey(key);
  };

  const handleDelete = (assignment: Assignment) => {
    const updatedData = sortedData.filter((data) => data.assignmentID !== assignment.assignmentID);
    setSortedData(updatedData);
  };

  const handleEdit = (assignment: Assignment) => {
    const handleEdit = sortedData;
  }

  return (
    <div >
      <Table className={styles.table_content}>
        <TableHeader>
          <TableRow>
            <TableHead className={styles.table_head}>
              <div className={styles.filter}>
                Assignment Name
                <div>
                  <img src="./assets/upArrow.svg" alt="filterup" onClick={() => handleSort('assignmentName')}></img>
                  <img src="./assets/downArrow.svg" alt="filterdown" onClick={() => handleSort('assignmentName')}></img>
                </div>
              </div>
            </TableHead>
            <TableHead className={styles.table_head}>
              <div className={styles.filter}>
                Assignment ID
                <div>
                  <img src="./assets/upArrow.svg" alt="filterup" onClick={() => handleSort('assignmentID')}></img>
                  <img src="./assets/downArrow.svg" alt="filterdown" onClick={() => handleSort('assignmentID')} ></img>
                </div>
              </div>
            </TableHead>
            <TableHead className={styles.table_head}>
              <div className={styles.filter}>
                Student
              </div>
            </TableHead>
            <TableHead className={styles.table_head}>
              <div className={styles.filter}>
                Assigned Date
                <div>
                  <img src="./assets/upArrow.svg" alt="filterup" onClick={() => handleSort('assignedData')}></img>
                  <img src="./assets/downArrow.svg" alt="filterdown" onClick={() => handleSort('assignedData')}></img>
                </div>
              </div>
            </TableHead>
            <TableHead className={styles.table_head}>
              <div className={styles.filter}>
                Deadline
                <div>
                  <img src="./assets/upArrow.svg" alt="filterup" onClick={() => handleSort('deadline')}></img>
                  <img src="./assets/downArrow.svg" alt="filterdown" onClick={() => handleSort('deadline')}></img>
                </div>
              </div>
            </TableHead>
            <TableHead className={styles.table_head}>
              <div className={styles.filter}>
                Actions
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className={styles.table_body}>
          {sortedData.map((assignment: any, index: number) => {
            return (
              <TableRow className={styles.table_rowdata} key={index}>
                <TableCell className={styles.table_cell}>{assignment.assignmentName}</TableCell>
                <TableCell className={styles.table_cell}>{assignment.assignmentID}</TableCell>
                <TableCell className={styles.table_cell}>{assignment.studentID}</TableCell>
                <TableCell className={styles.table_cell}>{assignment.assignedData}</TableCell>
                <TableCell className={styles.table_cell}>{assignment.deadline}</TableCell>
                <TableCell className={styles.table_cell}>
                  <IconButton>
                    <img src="./assets/TableProfile.svg" alt='studentProfile' className={styles.table_icon}></img>
                  </IconButton>
                  <IconButton onClick={() => handleEdit(assignment)}>
                    <img src="./assets/TableEdit.svg" alt='studentProfileEdit' className={styles.table_icon}></img>
                  </IconButton>
                  <IconButton onClick={() => handleDelete(assignment)}>
                    <img src="./assets/TableDelete.svg" alt='studentProfileDelete' className={styles.table_icon}></img>
                  </IconButton>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default TableData;