import * as React from "react";
import styles from "./auth.module.scss";

export function ResetPassword() {
  return (
    <>
      <div className={styles.main_container}>
        {/* Tg_logo */}
        <div className={styles.login_form}>
          <div className={styles.logo}>
            <img src="./assets/Technologo.png" alt="Tg-logo"></img>
          </div>

          {/* Pass Desc */}
          <div className={styles.content_wrapper}>
            <h2>Forget Password</h2>
            <p className={styles.heading}>
              Please enter your registered email id or mobile to reset your
              password
            </p>

            {/* Pass Details */}
            <div className={styles.input_control}>
              <label className={styles.password}>Email/Mobile Number</label>
              <br></br>

              <div className={styles.input_box}>
                <input
                  type="password"
                  className={styles.password_wrapper}
                  placeholder="Enter Email/Mobile Number"
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
                Recover password
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
