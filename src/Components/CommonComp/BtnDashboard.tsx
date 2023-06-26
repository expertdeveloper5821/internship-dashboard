import styles from "../../Pages/Dashboard/TeacherHomePage/Teacher.module.scss";
//@ts-ignore
import { Select, Button, Input } from "technogetic-iron-smart-ui";

export interface IAppProps { }

export function BtnDashboard() {
  return (
    <>
      <div className={styles.dashboard_content}>

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
                containerWidth="180px"
                optionWidth="180px"
              />
            </div>
            <div className={styles.button_wrapper}>
              <Button className={styles.searchbutton} varient="contained">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
