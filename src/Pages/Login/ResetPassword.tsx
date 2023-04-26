import * as React from "react";
import styles from "../Login/Login.module.scss";
import technologo from "../../Images/Technologo.png";
import background from "../../Images/girlImage.svg";

// export interface IAppProps {
// }

export function ResetPassword() {
  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.bgcontainer}>
          {/* Tg_logo */}
          <div className={styles.container}>
            <div className={styles.logo}>
              {/* <img src={logo} alt="Tg-logo"></img> */}
              <img src={technologo} alt="Tg-logo"></img>
            </div>
            {/* Pass Desc */}
            <div className={styles.contentwrapper}>
              <h2>Reset Password</h2>
              <p className={styles.parareset}>Loreum ipusm enter the detail</p>
              {/* Pass Details */}
              <div className={styles.inputdesc}>
                <label className={styles.password}>Password</label>
                <br></br>
                <input
                  type="password"
                  className={styles.passworddesc}
                  placeholder="Enter password"
                ></input>
              </div>
              <div className={styles.remembercheck}>
                <input type="checkbox"></input>
                <span>Remember for 30 days</span>
              </div>
              {/* Submit Button */}
              <div className={styles.buttoncontainer}>
                <button type="submit" className={styles.forgetbutton}>
                  Forget Password
                </button>
              </div>
              {/* Sign in */}
              <div className={styles.signin}>
                <p>
                  Remember it?{" "}
                  <span>
                    <a href="/"> Sign in here</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.imggirl}>
            {/* <img src={background} alt="girl-bg"></img> */}
          </div>
        </div>
      </div>
    </>
  );
}
