import girlImage from "../../Images/girlimg.png";
import technologo from "../../Images/Technologo.png";
import gradient from "../../Images/Ellipse 179.png";
import styles from "./Login.module.scss";

export interface IAppProps {}

export function SentMail() {
  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.bgcontainer}>
          <div className={styles.container}>
            <div className={styles.logo}>
              <img src={technologo} alt="Tg-logo"></img>
            </div>

            {/* Para reset */}
            <div>
              <h2>Check Your Email</h2>
              <p className={styles.parareset}>
                We have sent you a reset password link on <br></br> ***given
                mail***
              </p>
            </div>

            <div className={styles.buttoncontainer}>
              <button type="submit" className={styles.forgetbutton}>
                Go to email
              </button>
            </div>
          </div>
          <div className={styles.girlSection}>
            <img src={girlImage} alt="girl_image"></img>
            <div className={styles.linearBottom}>
              <img src={gradient} alt="gradient"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
