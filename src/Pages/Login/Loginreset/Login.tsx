import styles from "./auth.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./LoginApi/LoginAction";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { SignupSchema } from "../../../Schemas/SignupSchemas";
import { useNavigate, Link } from "react-router-dom";
import { AppDispatch, selectUserRole, selectUserLogged } from "../../../app/store";
//@ts-ignore
import { Button, Input } from "technogetic-iron-smart-ui";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const userRole = useSelector(selectUserRole);
  const isLoggedIn = useSelector(selectUserLogged)

  function handleRememberMe(event: { target: any }) {
    setRememberMe(event.target.checked);
  }

  useEffect(() => {
    const rememberMeValue = document.cookie.includes("rememberMe === true");
    setRememberMe(rememberMeValue);
  }, []);

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
    setFieldError,
  } = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      if (rememberMe) {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 30);
        document.cookie = `username=${values.username
          }; expires=${expirationDate.toUTCString()}`;
        document.cookie = `password=${values.password
          }; expires=${expirationDate.toUTCString()}`;
      }

      try {
        let response = await dispatch(fetchData(values));
        if (
          response.payload.message &&
          response.payload.message.message &&
          response.payload.message.message.includes("username")
        ) {
          setFieldError("username", "Invalid username");
        } else {
          if (userRole === "teacher") {
            navigate("/teacher_dashboard");
          } else if (userRole === "student") {
            navigate("/student_dashboard");
          }
        }
      } catch (error: any) {
        if (error.response && error.response.data) {
          const { message } = error.response.data;
          if (message.includes("username")) {
            setFieldError("username", "Invalid username");
          } else if (message.includes("password")) {
            setFieldError("password", "Invalid password");
          } else {
            setFieldError("username", "Invalid username or password");
            setFieldError("password", "Invalid username or password");
          }
        } else {
          setFieldError("username", "Invalid username or password");
          setFieldError("password", "Invalid username or password");
        }
      } finally {
        setIsLoading(false);
      }
    },
  });

  let storedusername = "";
  let storedPassword = "";

  document.cookie.split(";").forEach((cookie) => {
    const [name, value] = cookie.trim().split("=");
    if (name === "username") {
      storedusername = value;
    } else if (name === "password") {
      storedPassword = value;
    }
  });

  useEffect(() => {
    if (storedusername) {
      setFieldValue("username", storedusername);
    }
    if (storedPassword) {
      setFieldValue("password", storedPassword);
    }
  }, [storedusername, storedPassword, setFieldValue]);

  useEffect(() => {
    if (isLoggedIn) {
      if (userRole) {
        if (userRole === "teacher") {
          navigate("/teacher_dashboard");
        } else if (userRole === "student") {
          navigate("/student_dashboard");
        }
      }
    }
  }, [userRole, navigate, isLoggedIn]);

  return (
    <div className={styles.main_container}>
      <div className={styles.background_container}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="./assets/technogeticlogo.svg" alt="Tg-logo" />
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
                <label className={styles.email} htmlFor="username">
                  User Name
                </label>
                <Input
                  id="username"
                  className={styles.email_wrapper}
                  type="text"
                  name="username"
                  autoComplete="off"
                  placeholder="Enter Username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className={styles.error}>
                  {errors.username && touched.username ? (
                    <p>{(errors.username = "Please enter a valid username")}</p>
                  ) : null}
                </div>
              </div>

              <div className={styles.input_box}>
                <label className={styles.password} htmlFor="password">
                  Password
                </label>
                <Input
                  id="password"
                  className={styles.password_wrapper}
                  type="password"
                  name="password"
                  autoComplete="off"
                  placeholder="Enter password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className={styles.error}>
                  {errors.password && touched.password ? (
                    <p>{(errors.password = "Please enter a valid password")}</p>
                  ) : null}
                </div>
              </div>

              <div className={styles.checkbox_wrapper}>
                <input type="checkbox" onChange={handleRememberMe} />
                <span>Remember for 30 days</span>
              </div>

              <div className={styles.button_wrapper}>
                <Button
                  disabled={isLoading}
                  className={styles.forgetbutton}
                  varient="contained"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  {isLoading ? "Loading..." : "Sign in"}
                </Button>
              </div>

              <div className={styles.signin}>
                <span>
                  <Link to="/resetpassword"> Forget your Password?</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.girlImg_wrapper}>
          <img src="./assets/GirlImg.png" alt="girl-img" />
        </div>
      </div>
    </div>
  );
};

export default Login;
