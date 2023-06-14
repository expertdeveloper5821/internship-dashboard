import * as React from 'react';
import styles from "./Teacher.module.scss";
import DashboardSidebar from '../../../Components/SideBar/DashboardSidebar';
//@ts-ignore
import { Select, Button, Input } from "technogetic-iron-smart-ui";
import TableData from '../../../Components/Table/TableData';

export interface IAppProps {
}

export function Teacher() {
  return (
    <>
      <DashboardSidebar />
      <div className={styles.dashboard_content}>
        <h2>Teacher</h2>
        <div className={styles.content_wrapper}>
          <div className={styles.input_desc}>
            <Input placeholder='Assignment Name' type="text"></Input>
            <Input placeholder='Student Name' type="text"></Input>
            <div className={styles.select_wrapper}>
              <Select
                className={styles.select_content}
                option={[
                  'HTML',
                  'CSS',
                  'Material UI',
                  'Bootstrap',
                  'Javascript',
                  'React Js',
                  'Node Js',
                  'Express Js',
                  'MongoDB',
                  'MySQL',
                  'Git',
                ]}
                padding="8px"
                placeholder="Courses"
              // width="500px"
              />
            </div>
            <div className={styles.button_wrapper}>
              <Button
                className={styles.searchbutton}
                varient="contained"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.table_wrapper}>
          <TableData />
        </div>
      </div>
    </>
  );
}