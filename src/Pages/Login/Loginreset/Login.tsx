import styles from "./auth.module.scss";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { SignupSchema } from "../../../Schemas/SignupSchemas";
import { useNavigate } from "react-router-dom";
import { Cookies } from "typescript-cookie";
//@ts-ignore
import { Button, Input } from "technogetic-iron-smart-ui";

type Props = {};

const Login = (props: Props) => {
  const [rememberMe, setRememberMe] = useState(false);
  const passwordShown = false;

  function handleRememberMe(event: { target: any }) {
    setRememberMe(event.target.checked);
  }

  useEffect(() => {
    const rememberMeValue = Cookies.get("rememberMe") === "true";
    setRememberMe(rememberMeValue);
  }, []);

  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      if (rememberMe) {
        Cookies.set("email", values.email, { expires: 30 });
        Cookies.set("password", values.password, { expires: 30 });
      }
      navigate("/teacher_dashboard");
    },
  });

  let storedemail = Cookies.get("email");
  let storedPassword = Cookies.get("password");

  useEffect(() => {
    if (storedemail) {
      setFieldValue("email", storedemail);
    }
    if (storedPassword) {
      setFieldValue("password", storedPassword);
    }
  }, [storedemail, storedPassword, setFieldValue]);

  const handleSignIn = () => {
    handleSubmit();
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.background_container}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="./assets/technogeticlogo.svg" alt="Tg-logo"></img>
          </div>

          <div>
            <h2>Welcome Back</h2>
            <p className={styles.heading}>
              Welcome back! Please enter your details
            </p>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <div className={styles.input_box}>
                <label className={styles.email}>Email</label>
                <Input
                  className={styles.email_wrapper}
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Enter Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></Input>
                <div className={styles.error}>
                  {errors.email && touched.email ? (
                    <p>{(errors.email = "Please enter a valid email")}</p>
                  ) : null}
                </div>
              </div>
              <div className={styles.input_box}>
                <label className={styles.password}>Password</label>
                <Input
                  className={styles.password_wrapper}
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  autoComplete="off"
                  placeholder="Enter password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></Input>
                <div className={styles.error}>
                  {errors.password && touched.password ? (
                    <p>{(errors.password = "Please enter a valid password")}</p>
                  ) : null}
                </div>
              </div>

              <div className={styles.checkbox_wrapper}>
                <input type="checkbox" onChange={handleRememberMe}></input>
                <span>Remember for 30 days</span>
              </div>

              <div className={styles.button_wrapper}>
                <Button
                  className={styles.forgetbutton}
                  varient="contained"
                  onClick={handleSignIn}
                >
                  Sign in
                </Button>
              </div>

              <div className={styles.signin}>
                <span>
                  <a href="/resetpassword"> Forget your Password?</a>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.girlImg_wrapper}>
          <img src="./assets/GirlImg.png" alt="girl-img"></img>
        </div>
      </div >
    </div >
  );
};

export default Login;