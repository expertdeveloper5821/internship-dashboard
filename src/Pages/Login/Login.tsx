import React from "react";
import styles from "./Login.module.scss";
import technologo from "../../Images/Technologo.png";
import girlImage from "../../Images/kindpng.png";
import gradient from "../../Images/Ellipse 179.png";
import { AiOutlineEye } from "react-icons/ai";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.bgcontainer}>
        <div className={styles.container}>
          <div className={styles.wrapper}></div>
          <div className={styles.logo}>
            <img src={technologo} alt="Tg-logo"></img>
          </div>

          {/* Para reset */}
          <div>
            <h2>Welcome Back</h2>
            <p className={styles.parareset}>
              Welcome back! Please enter your details
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

          {/* Password Tag */}
          <div className={styles.inputdescription}>
            <label className={styles.password}>Password</label>
            <br></br>
            <input
              type="password"
              className={styles.passworddesc}
              placeholder="Enter password"
            ></input>
            {/* <div className={styles.eyepassword}>
              <AiOutlineEye color="#CC85858" size={20} />
            </div> */}
          </div>

          {/* Remember me  */}
          <div className={styles.remembercheck}>
            <input type="checkbox"></input>
            <span>Remember for 30 days</span>
          </div>

          {/* Sign in */}
          <div className={styles.buttoncontainer}>
            <button type="submit" className={styles.forgetbutton}>
              Sign in
            </button>
          </div>

          {/* href Tag */}
          <div className={styles.signin}>
            <span>
              <a href="/resetpassword"> Forget your Password?</a>
            </span>
          </div>
        </div>
        <div className={styles.girlSection}>
          <img
            src={girlImage}
            alt="girl_image"
            className={styles.girlimgs}
          ></img>
          <div className={styles.linearBottom}>
            <img src={gradient} alt="gradient"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
