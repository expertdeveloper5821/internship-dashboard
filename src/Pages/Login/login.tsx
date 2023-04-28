import * as React from "react";
import styles from "./auth.module.scss";

export function Login() {
  return (
    <div className={styles.main_container}>
      <div className={styles.login_form}>
        <div className={styles.logo}>
          <img src="./assets/Technologo.png" alt="Tg-logo"></img>
        </div>

        <div className={styles.content_wrapper}>
          <h2>Welcome Back</h2>
          <p className={styles.heading}>
            Welcome back! Please enter your details
          </p>

          <div className={styles.input_box}>
            <label className={styles.email}>Email</label>
            <br></br>{" "}
            <input
              type="email"
              className={styles.email_wrapper}
              placeholder="Enter Email"
            ></input>
          </div>
          <div className={styles.input_control}>
            <label className={styles.password}>Password</label>
            <br></br>

            <div className={styles.input_box}>
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

          <div className={styles.button_wrapper}>
            <button type="submit" className={styles.forgetbutton}>
              Signup
            </button>
          </div>

          <div className={styles.signin}>
            <span>
              <a href="/resetpassword"> Forget your Password?</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
