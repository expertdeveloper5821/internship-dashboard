import * as React from "react";
import styles from "./loginresetpasword.module.scss";

export function ResetPassword() {
  return (
    <>
      <div className={styles.main_container}>
        {/* Tg_logo */}
        <div className={styles.loginform}>
          <div className={styles.logo}>
            <img src="./assets/Technologo.png" alt="Tg-logo"></img>
          </div>
          {/* Pass Desc */}
          <div className={styles.contentwrapper}>
            <h2>Reset Password</h2>
            <p className={styles.heading}>Loreum ipusm enter the detail</p>
            {/* Pass Details */}
            <div className={styles.input_control}>
              <label className={styles.password}>Password</label>
              <br></br>

              <div className={styles.inputtype}>
                <input
                  type="password"
                  className={styles.password_wrapper}
                  placeholder="Enter password"
                ></input>
              </div>
            </div>
            <div className={styles.checkbox_wrapper}>
              <input type="checkbox"></input>
              <span>Remember for 30 days</span>
            </div>
            {/* Submit Button */}
            <div className={styles.button_wrapper}>
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
      </div>
    </>
  );
}
