import styles from "./credential.module.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useFormik } from "formik";
import {useNavigate} from "react-router-dom";
import { ResetPasswordSchema } from "../../../Schemas/SignupSchemas";

type Props = {};

const UpdateCredential = (props: Props) => {
  const [newPasswordShown, setNewPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  const togglePassword = () => {
    setNewPasswordShown(!newPasswordShown);
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const handleToggleIcon = () => {
    setIsToggle(!isToggle);
  };

  const navigate = useNavigate();

  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };

  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues,
    validationSchema: ResetPasswordSchema,
    onSubmit: (values) => {
      if(values.newPassword === values.confirmPassword){
        navigate("/user_credential_success")
      }
    }
  });

  return (
    <div className={styles.main_container}>
      <div className={styles.background_container}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="./assets/Tehnogeticlogo.svg" alt="Tg-logo"></img>
          </div>

          <div>
            <h2>Reset Password</h2>
            <p className={styles.heading}>
              Please enter your password and confirm the password
            </p>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <div className={styles.input_box}>
                <label className={styles.password}>New password</label>

                <div className={styles.eye_wrapper}>
                  <input
                    className={styles.password_wrapper}
                    type={newPasswordShown ? "text" : "password"}
                    name="newPassword"
                    autoComplete="off"
                    placeholder="Enter password"
                    value={values.newPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                  <div
                    onClick={handleToggleIcon}
                    style={{
                      marginTop: "14px",
                      marginRight: "8px",
                      width: "30px",
                      height: "30px",
                      color: "#CC85858",
                    }}
                  >
                    {newPasswordShown ? (
                      <AiOutlineEyeInvisible onClick={togglePassword} />
                    ) : (
                      <AiOutlineEye onClick={togglePassword} />
                    )}
                  </div>
                </div>
                <div className={styles.error}>
                  {errors.newPassword && touched.newPassword ? (
                    <p>{(errors.newPassword = "Password must be atleast 6 characters")}</p>
                  ) : null}
                </div>
              </div>

              <div className={styles.input_box}>
                <label className={styles.password}>Confirm New Password</label>
                <div className={styles.eye_wrapper}>
                  <input
                    className={styles.password_wrapper}
                    type={confirmPasswordShown ? "text" : "password"}
                    name="confirmPassword"
                    autoComplete="off"
                    placeholder="Enter new password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                  <div
                    onClick={handleToggleIcon}
                    style={{
                      marginTop: "14px",
                      marginRight: "8px",
                      width: "30px",
                      height: "30px",
                      color: "#CC85858",
                    }}
                  >
                    {confirmPasswordShown ? (
                      <AiOutlineEyeInvisible onClick={toggleConfirmPassword} />
                    ) : (
                      <AiOutlineEye onClick={toggleConfirmPassword} />
                    )}
                  </div>
                </div>
                <div className={styles.error}>
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <p>{(errors.confirmPassword = "Both password must match")}</p>
                  ) : null}
                </div>
              </div>

              <div className={styles.button_wrapper}>
                <button type="submit" className={styles.forgetbutton}>
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.girlImg_wrapper}>
          <img src="./assets/GirlImg.png" alt="girl-img"></img>
        </div>
      </div>
    </div>
  );
};

export default UpdateCredential;