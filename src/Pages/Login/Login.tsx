import * as React from "react";
import styles from "./Login.module.scss";
import technologo from "../../Images/Technologo.png";
import eyepassword from "../../Images/view.png";
// import background from "../../Images/girlImage.svg";

export function Login() {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.bgcontainer}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={technologo} alt="Tg-logo"></img>
          </div>

          <div className={styles.contentwrapper}>
            <h2>Welcome Back</h2>
            <p className={styles.parareset}>
              Welcome back! Please enter your details
            </p>

            <div className={styles.inputdescription}>
              <label className={styles.email}>Email</label>
              <br></br>
              <input
                type="email"
                className={styles.emaildesc}
                placeholder="Enter Email"
              ></input>
            </div>
            <div className={styles.inputdesc}>
              <label className={styles.password}>Password</label>
              <br></br>
              <div className={styles.inputtype}>
                <input
                  type="password"
                  className={styles.passworddesc}
                  placeholder="Enter password"
                ></input>
                <div className={styles.eyepassword}>
                  <img src={eyepassword} alt="eye-passwod"></img>
                </div>
              </div>
            </div>
            <div className={styles.remembercheck}>
              <input type="checkbox"></input>
              <span>Remember for 30 days</span>
            </div>

            <div className={styles.buttoncontainer}>
              <button type="submit" className={styles.forgetbutton}>
                Signup
              </button>
            </div>

            <div className={styles.signin}>
              <span>
                <a href="/resetpassword"> Forget your Password?</a>
              </span>

              <div>svdsdffdc</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
