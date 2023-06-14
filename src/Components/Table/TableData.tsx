import React, { useState } from 'react';
import styles from "./TableData.module.scss";
import tableData from "../../utils/data.json";
//@ts-ignore
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, IconButton } from "technogetic-iron-smart-ui";

type Props = {}

interface Assignment {
  assignmentName: string;
  assignmentID: number;
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
      console.log("sortKey", sortKey)
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

        <TableBody>
          {sortedData.map((assignment: any, index: number) => {
            return (
              <TableRow className={styles.table_rowdata} key={index}>
                <TableCell>{assignment.assignmentName}</TableCell>
                <TableCell>{assignment.assignmentID}</TableCell>
                <TableCell>{assignment.studentID}</TableCell>
                <TableCell>{assignment.assignedData}</TableCell>
                <TableCell>{assignment.deadline}</TableCell>
                <TableCell>
                  <IconButton onClick={function noRefCheck() { }}>
                    <svg
                      className="button-icon-svg"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m19 20.25c0-.402-.356-.75-.75-.75-2.561 0-11.939 0-14.5 0-.394 0-.75.348-.75.75s.356.75.75.75h14.5c.394 0 .75-.348.75-.75zm-7.403-3.398 9.124-9.125c.171-.171.279-.423.279-.684 0-.229-.083-.466-.28-.662l-3.115-3.104c-.185-.185-.429-.277-.672-.277s-.486.092-.672.277l-9.143 9.103c-.569 1.763-1.555 4.823-1.626 5.081-.02.075-.029.15-.029.224 0 .461.349.848.765.848.511 0 .991-.189 5.369-1.681zm-3.27-3.342 2.137 2.137-3.168 1.046zm.955-1.166 7.651-7.616 2.335 2.327-7.637 7.638z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </IconButton>
                  <IconButton onClick={function noRefCheck() { }}>
                    <svg
                      className="button-icon-svg"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </IconButton>
                  <IconButton onClick={function noRefCheck() { }}>
                    <svg
                      className="button-icon-svg"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m19 20.25c0-.402-.356-.75-.75-.75-2.561 0-11.939 0-14.5 0-.394 0-.75.348-.75.75s.356.75.75.75h14.5c.394 0 .75-.348.75-.75zm-7.403-3.398 9.124-9.125c.171-.171.279-.423.279-.684 0-.229-.083-.466-.28-.662l-3.115-3.104c-.185-.185-.429-.277-.672-.277s-.486.092-.672.277l-9.143 9.103c-.569 1.763-1.555 4.823-1.626 5.081-.02.075-.029.15-.029.224 0 .461.349.848.765.848.511 0 .991-.189 5.369-1.681zm-3.27-3.342 2.137 2.137-3.168 1.046zm.955-1.166 7.651-7.616 2.335 2.327-7.637 7.638z"
                        fillRule="nonzero"
                      />
                    </svg>
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