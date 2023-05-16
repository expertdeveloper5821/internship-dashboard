import styles from "./auth.module.scss";

export interface IAppProps {}

export function SentMail() {
  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.background_container}>
          <div className={styles.container} style={{ border: "1px solid" }}>
            <div className={styles.logo}>
              <img src="./assets/Tehnogeticlogo.svg" alt="Tg-logo"></img>
            </div>

            <div
              className="heading_wrapper"
              style={{
                border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0px",
              }}
            >
              <h2 className="mail_heading" style={{ border: "1px solid" }}>
                Check Your Email
              </h2>
              <p
                className={styles.mailheading}
                style={{ border: "1px solid black" }}
                // style={{ display: "flex", justifyContent: "center" }}
              >
                We have sent you a reset password link on <br></br>
                ***given mail***
              </p>
            </div>
            <div className={styles.logo}>
              <img src="./assets/letterBox.png" alt="Tg-logo"></img>
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
