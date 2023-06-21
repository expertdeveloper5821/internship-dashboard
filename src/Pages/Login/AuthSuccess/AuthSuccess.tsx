import { useNavigate } from "react-router-dom";
import styles from "../AuthSuccess/authsuccess.module.scss";
//@ts-ignore
import { Button } from "technogetic-iron-smart-ui";

type Props = {};

const AuthSuccess = (props: Props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/user_credential");
    }

    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.background_container}>
                    <div className={styles.container}>
                        <div className={styles.logo}>
                            <img src="./assets/technogeticlogo.svg" alt="Tg-logo"></img>
                        </div>
                        <div className={styles.heading_wrapper}>
                            <h2>Verifed!!</h2>
                            <p className={styles.heading}>
                                Hurrah! You have successfully verified the account.
                            </p>
                        </div>
                        <div>
                            <div className={styles.mail_success}>
                                <img src="./assets/MailVerifiedBg.gif" alt="gifImg"></img>
                            </div>
                            <div className={styles.button_wrapper}>
                                <Button varient="contained" className={styles.forgetbutton} onClick={handleClick}>
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.girlImg_wrapper}>
                        <img src="./assets/GirlImg.png" alt="girl-img"></img>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthSuccess;