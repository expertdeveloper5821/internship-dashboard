import styles from "../Mailpage/mail.module.scss";
// @ts-ignore
import { Button } from "technogetic-iron-smart-ui";
import { useNavigate } from "react-router-dom";

export interface IAppProps { }

export function SentMail() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/verified");
  };
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.background_container}>
          <div className={styles.container}>
            <div className={styles.mailsent_container}>
              <div className={styles.logo}>
                <img src="./assets/technogeticlogo.svg" alt="Tg-logo"></img>
              </div>

              <div className={styles.email_wrapper}>
                <h2 className={styles.mail_heading}>Check Your Email</h2>
                <p className={styles.heading}>
                  We have sent you a reset password link on harry@gmail.com
                </p>

                <div className={styles.mailsent_logo}>
                  <img src="./assets/letterBox.svg" alt="mailsent-logo"></img>
                </div>
              </div>

              <div className={styles.button_wrapper}>
                <Button
                  variant="contained"
                  onClick={handleClick}
                  className={styles.forgetbutton}
                >
                  Validate OTP
                </Button>
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
