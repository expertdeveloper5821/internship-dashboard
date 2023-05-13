import * as React from "react";
import styles from "../Login/Login.module.scss";
import technologo from "../../Images/Technologo.png";
import girlImage from "../../Images/girlImage.png";

export interface IAppProps {}

export function ResetPassword() {
  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.bgcontainer}>
          <div className={styles.container}>
            <div className={styles.logo}>
              <img src={technologo} alt="Tg-logo"></img>
            </div>

            {/* Para reset */}
            <div>
              <h2>Forgot Password</h2>
              <p className={styles.parareset}>
                Please enter your registered email id or mobile to<br></br>{" "}
                reset your password
              </p>
            </div>

            {/* Email Tag */}
            <div className={styles.inputdescription}>
              <label className={styles.email}>Email</label>
              <br></br>
              <input
                type="email"
                className={styles.emaildesc}
                placeholder="Enter Email"
              ></input>
            </div>

            {/* Remember me  */}
            <div className={styles.remembercheck}>
              <input type="checkbox"></input>
              <span>Remember for 30 days</span>
            </div>

            {/* Sign in */}
            <div className={styles.buttoncontainer}>
              <button type="submit" className={styles.forgetbutton} disabled>
                Recover Password
              </button>
            </div>

            {/* href Tag */}
            <div className={styles.signin}>
              <span>
                <a href="/">
                  Remember it?
                  <b>Sign in here</b>
                </a>
              </span>
            </div>
          </div>
          <div className={styles.girlSection}>
            <img src={girlImage} alt="girl_image"></img>
          </div>
        </div>
      </div>
    </>
  );
}
