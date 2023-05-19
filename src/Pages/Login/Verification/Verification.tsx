import { useState } from "react";
import styles from "../Verification/verification.module.scss";
import OtpInput from 'react-otp-input';
import {useNavigate} from "react-router-dom";


type Props = {};

const Verification = (props: Props) => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (otp.length !== 4) {
            setError(true);
            return;
        }
        else {
            setError(false);
            navigate("/success");
        }
    }

    return (
        <>
            <div className={styles.maincontainer}>
                <div className={styles.background_container}>
                    <div className={styles.container}>
                        <div className={styles.logo}>
                            <img src="./assets/Tehnogeticlogo.svg" alt="Tg-logo"></img>
                        </div>
                        <div className={styles.heading_wrapper}>
                            <h2>Verification Email</h2>
                            <p className={styles.heading}>
                                Please enter the code we just sent to email ***given mail***
                            </p>
                        </div>
                        <div className={`${styles.otp_input} ${error ? styles.errors : ''}`}>

                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={4}
                                inputType="number"
                                renderInput={(props) => <input {...props} />}
                            />

                        </div>
                        {error && <div className={styles.errors}>Please enter a valid OTP</div>}
                        <div className={styles.signin}>
                            <a href="/resetpassword"> If you did not receive code? <span>Resend</span></a>
                        </div>
                        <div>
                            <div className={styles.button_wrapper}>
                                <button type="submit" onClick={handleSubmit} className={styles.forgetbutton}>
                                    Continue
                                </button>
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

export default Verification;