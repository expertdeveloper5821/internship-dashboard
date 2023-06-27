import styles from "./auth.module.scss";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { SignupSchema } from "../../../Schemas/SignupSchemas";
import { useNavigate } from "react-router-dom";
import { Cookies } from "typescript-cookie";
//@ts-ignore
import { Button, Input } from "technogetic-iron-smart-ui";
import axios from "axios";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  function handleRememberMe(event: { target: any }) {
    setRememberMe(event.target.checked);
  }

  useEffect(() => {
    const rememberMeValue = Cookies.get("rememberMe") === "true";
    setRememberMe(rememberMeValue);
  }, []);

  const navigate = useNavigate();

  const initialValues = {
    username: "",
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
    onSubmit: async (values) => {
      setIsLoading(true);
      if (rememberMe) {
        Cookies.set("username", values.username, { expires: 30 });
        Cookies.set("password", values.password, { expires: 30 });
      }
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_AUTH_URL}${process.env.REACT_APP_API_KEY}`,
          {
            username: values.username,
            password: values.password,
          }
        );
        const role = response.data.role;
        if (role === "teacher") {
          navigate("/teacher_dashboard");
        }
        else if (role === "student") {
          navigate("/student_dashboard");
        }
      }
      catch (error) {
        console.error("Error", error)
      }
      finally {
        setIsLoading(false);
      }
    },
  });

  let storedusername = Cookies.get("username");
  let storedPassword = Cookies.get("password");

  useEffect(() => {
    if (storedusername) {
      setFieldValue("username", storedusername);
    }
    if (storedPassword) {
      setFieldValue("password", storedPassword);
    }
  }, [storedusername, storedPassword, setFieldValue]);

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
                <label className={styles.email}>User Name</label>
                <Input
                  className={styles.email_wrapper}
                  type="text"
                  name="username"
                  autoComplete="off"
                  placeholder="Enter Username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></Input>
                <div className={styles.error}>
                  {errors.username && touched.username ? (
                    <p>{(errors.username = "Please enter a valid user name")}</p>
                  ) : null}
                </div>
              </div>

              <div className={styles.input_box}>
                <label className={styles.password}>Password</label>
                <Input
                  className={styles.password_wrapper}
                  type="password"
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
                  disabled={isLoading}
                  className={styles.forgetbutton}
                  varient="contained"
                  onClick={() => {
                    handleSubmit()
                  }}
                >
                  {isLoading ? "Loading..." : "Sign in"}
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

