
// import React, { useState } from "react";
// import { connect, useDispatch, useSelector } from "react-redux";
// import OtpInput from "react-otp-input";
// import { verifyOTP } from "../../Login/Loginreset/VerificationApi/verificationAction";
// import { Link } from "react-router-dom";
// import styles from "./verification.module.scss";
// //@ts-ignore
// import { Button } from "technogetic-iron-smart-ui";

// const Verification = () => {
//     const [otp, setOtp] = useState("");
//     const dispatch: any = useDispatch();
//     const { error, loading } = useSelector((state: any) => state.verification)

//     const handleSubmit = () => {
//         if (otp.length !== 4) {
//             return;
//         }
//         dispatch(verifyOTP(otp));
//     };

//     return (
//         <>
//             <div className={styles.main_container}>

//             </div>
//         </>
//     );
// };



// export default Verification;

import React, { useState } from "react";
import styles from "../Verification/verification.module.scss";
import OtpInput from "react-otp-input";
import { useNavigate, Link } from "react-router-dom";
//@ts-ignore
import { Button } from "technogetic-iron-smart-ui";
import { useDispatch, useSelector } from "react-redux";
import { verifyOTP } from "../Loginreset/VerificationApi/verificationAction";
import { AppDispatch } from "../../../app/store";

const Verification = (): JSX.Element => {
    const [otp, setOtp] = useState("");
    const [otpError, setOtpError] = useState(false);
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const { error, loading } = useSelector((state: any) => state.verification)

    const handleSubmit = async () => {
        if (otp.length !== 4) {
            setOtpError(true);
            return;
        } else {
            setOtpError(false);
            const email = "shivangigupta@technogetic.com"; // Replace with the actual email address
            dispatch(verifyOTP({ otp, email }));
            navigate("/user_credential"); // Replace "/next-page" with the actual next page URL
        }
    };

    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.background_container}>
                    <div className={styles.container}>
                        <div className={styles.logo}>
                            <img src="./assets/technogeticlogo.svg" alt="Tg-logo"></img>
                        </div>
                        <div className={styles.heading_wrapper}>
                            <h2>Verification Email</h2>
                            <p className={styles.heading}>
                                Please enter the code we just sent to email ***given mail***
                            </p>
                        </div>
                        <div className={`${styles.otp_input} ${error ? styles.errors : ""}`}>
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
                            <Link to="/resetpassword">
                                If you did not receive code? <span>&nbsp;Resend</span>
                            </Link>
                        </div>
                        <div>
                            <div className={styles.button_wrapper}>
                                <Button
                                    variant="contained"
                                    onClick={handleSubmit}
                                    className={styles.forgetbutton}
                                >
                                    Continue
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

export default Verification;


