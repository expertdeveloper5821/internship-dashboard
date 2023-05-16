import styles from "./auth.module.scss";

export interface IAppProps {}

export function SentMail() {
  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.background_container}>
          <div className={styles.container}>
            <div className={styles.logo}>
              <img src="./assets/Tehnogeticlogo.svg" alt="Tg-logo"></img>
            </div>

            {/* Para reset */}
            <div>
              <h2
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Check Your Email
              </h2>
              <p
                className={styles.heading}
                style={{ display: "flex", justifyContent: "center" }}
              >
                We have sent you a reset password link on <br></br>
                ***given mail***
              </p>
            </div>
            <div className={styles.logo}>
              <img src="./assets/letter box.png" alt="Tg-logo"></img>
            </div>

            <div className={styles.button_wrapper}>
              <button type="submit" className={styles.forgetbutton}>
                Go to email
              </button>
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
