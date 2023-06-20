import * as React from "react";
import styles from "./Syllabus.module.scss";
// @ts-ignore
import { Button } from "technogetic-iron-smart-ui";
import { Navbar } from "./Navbar";

export interface IAppProps {}

export function Syllabus() {
  return (
    <>
      <div className={styles.main_container}>
        <Navbar />
        <div className={styles.container}>
          <h1 className={styles.Profile_Setting}>Syllabus</h1>
          <span className={styles.main_profile}>Dashboard/Syllabus</span>
        </div>
        <div className={styles.upload}>
          <div className={styles.upload_section}>
            <span>Docs</span>
            <span>Videos</span>
            <span>PDF</span>
          </div>

          <div className={styles.button}>
            <Button
              onClick={function noRefCheck() {}}
              type="file"
              variant="contained"
              className={styles.newsyllabus}
            >
              Add new Syllabus
            </Button>
          </div>
        </div>
        <div className={styles.uploaddocs}>
          <img src="./assets/docs.svg" alt="document"></img>
          <div className={styles.course_name}>UI Figma basic</div>
        </div>
      </div>
    </>
  );
}
