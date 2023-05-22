import styles from "../Login/auth.module.scss";

export interface IAppProps { }

export function ResetPassword() {
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.background_container}>
          <div className={styles.container}>
            <div className={styles.logo}>
              <img src="./assets/technogeticlogo.svg" alt="Tg-logo"></img>
            </div>

            <div>
              <h2>Forgot Password</h2>
              <p className={styles.heading}>
                Please enter your registered email id or mobile to reset your
                password
              </p>
            </div>

            <div className={styles.input_box}>
              <label className={styles.email}>Email</label>
              <input
                type="email"
                className={styles.email_wrapper}
                placeholder="Enter Email"
              ></input>
            </div>

            <div className={styles.checkbox_wrapper}>
              <input type="checkbox"></input>
              <span>Remember for 30 days</span>
            </div>

            <div className={styles.button_wrapper}>
              <button type="submit" className={styles.forgetbutton} disabled>
                Recover Password
              </button>
            </div>

            <div className={styles.signin}>
              <span>
                <a href="/login">
                  Remember it?
                  <b>Sign in here</b>
                </a>
              </span>
            </div>
          </div>
          <div className={styles.girlImg_wrapper}>
            <img src="./assets/GirlImg.png" alt="girl-img"></img>
          </div>
        </div>
      </div>
    </>
  );
}
