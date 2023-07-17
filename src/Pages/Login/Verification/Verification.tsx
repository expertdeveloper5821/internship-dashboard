import { useState } from "react";
import styles from "../Verification/verification.module.scss";
import OtpInput from "react-otp-input";
import { useNavigate, Link } from "react-router-dom";
//@ts-ignore
import { Button } from "technogetic-iron-smart-ui";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { verifyOTP } from "./ResetpasswordApi/verificationAction";
import { setOTP } from "./ResetpasswordApi/verificationSlice";

const Verification = (): JSX.Element => {
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(false);

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const userEmail = useSelector((state: any) => state.resetPassword.email);
  console.log(userEmail);
  const handleSubmit = async () => {
    if (otp.length !== 4) {
      setOtpError(false);
      return;
    }

    console.log("verified clicked")
    dispatch(setOTP(otp));
    try {
      const response = await dispatch(verifyOTP({ otp, email: userEmail }));
      if (response.payload) {
        navigate("/user_credential");
      } else {
        setOtpError(true);
      }
    } catch (error) {
      setOtpError(true);
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
                Please enter the code we just sent to email {userEmail}
              </p>
            </div>
            <div
              className={`${styles.otp_input} ${otpError ? styles.errors : ""}`}
            >
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                inputType="number"
                renderInput={(props) => <input {...props} />}
              />
            </div>
            {otpError && (
              <div className={styles.errors}>Please enter a valid OTP</div>
            )}
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