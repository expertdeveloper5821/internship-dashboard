import styles from "../AuthFail/authfail.module.scss";
//@ts-ignore
import { Button } from "technogetic-iron-smart-ui";
import { useNavigate } from "react-router-dom";

type Props = {};

const AuthFail = (props: Props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/user_credential")
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
                            <h2>Error!!</h2>
                            <p className={styles.heading}>
                                Ooops!! Something went wrong please try again.
                            </p>
                            <div>
                                <div className={styles.mail_fail}></div>
                            </div>
                            <div className={styles.button_wrapper}>
                                <Button varient="contained" className={styles.forgetbutton} onClick={handleClick}>
                                    Try again
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

export default AuthFail;