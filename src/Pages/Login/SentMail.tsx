import styles from "./mail.module.scss";

export interface IAppProps {}

export function SentMail() {
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.background_container}>
          <div className={styles.container}>
            <div className={styles.mailsent_container}>
              <div className={styles.logo}>
                <img src="./assets/Tehnogeticlogo.svg" alt="Tg-logo"></img>
              </div>

              <div className={styles.email_wrapper}>
                <h2 className={styles.mail_heading}>Check Your Email</h2>
                <p className={styles.heading}>
                  We have sent you a reset password link on harry@gmail.com
                </p>

                <div className={styles.mailsent_logo}>
                  <img src="./assets/letterBox.png" alt="mailsent-logo"></img>
                </div>
              </div>

              <div className={styles.button_wrapper}>
                <button type="submit" className={styles.forgetbutton}>
                  Go to email
                </button>
              </div>
            </div>
          </div>

          <div className={styles.girlImg_wrapper}>
            <img src="./assets/GirlImg.png" alt="girlImg"></img>
          </div>
        </div>
      </div>
    </>
  );
}
