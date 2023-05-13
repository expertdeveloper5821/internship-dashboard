import styles from "./Login.module.scss";
import technologo from "../../Images/Technologo.png";
import girlImage from "../../Images/girlImage.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import SignupSchema from "../../Schemas/SignupSchemas";
import { useNavigate } from "react-router-dom";
import { Cookies } from "typescript-cookie";

type Props = {};

const Login = (props: Props) => {
  //Remember for 30 days
  const [rememberMe, setRememberMe] = useState(false);
  //Password Toggle
  const [passwordShown, setPasswordShown] = useState(false);
  //Icon Toggle
  const [isToggle, setIsToggle] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleToggleIcon = () => {
    setIsToggle(!isToggle);
  };

  function handleRememberMe(event: { target: any }) {
    setRememberMe(event.target.checked);
  }

  useEffect(() => {
    const rememberMeValue = Cookies.get("rememberMe") === "true";
    setRememberMe(rememberMeValue);
  }, []);

  const navigate = useNavigate();

  //Formik Validation
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
    onSubmit: (values, action) => {
      if (rememberMe) {
        Cookies.set("email", values.email, { expires: 30 });
        Cookies.set("password", values.password, { expires: 30 });
      }
      navigate("/student");
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

  return (
    <div className={styles.maincontainer}>
      <div className={styles.bgcontainer}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={technologo} alt="Tg-logo"></img>
          </div>

          {/* Para reset */}
          <div>
            <h2>Welcome Back</h2>
            <p className={styles.parareset}>
              Welcome back! Please enter your details
            </p>
          </div>

          {/* Email Tag */}
          <div>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputdescription}>
                <label className={styles.email}>Email</label>
                <br></br>
                <input
                  className={styles.emaildesc}
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Enter Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                <div className={styles.error}>
                  {errors.email && touched.email ? (
                    <p>{(errors.email = "Please enter a valid email")}</p>
                  ) : null}
                </div>
              </div>

              {/* Password Tag */}
              <div className={styles.inputdescription}>
                <label
                  className={styles.password}
                  style={{ marginTop: "20px" }}
                >
                  Password
                </label>
                <div className={styles.eyewrapper}>
                  <input
                    className={styles.passworddesc}
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    autoComplete="off"
                    placeholder="Enter password"
                    value={values.password}
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
                    {isToggle ? (
                      <AiOutlineEyeInvisible onClick={togglePassword} />
                    ) : (
                      <AiOutlineEye onClick={togglePassword} />
                    )}
                  </div>
                </div>
                <div className={styles.error}>
                  {errors.password && touched.password ? (
                    <p>
                      {
                        (errors.password =
                          "Wrong Password. Try again or click forgot password to reset it.")
                      }
                    </p>
                  ) : null}
                </div>
              </div>

              {/* Remember me  */}
              <div className={styles.remembercheck}>
                <input type="checkbox" onChange={handleRememberMe}></input>
                <span>Remember for 30 days</span>
              </div>

              {/* Sign in */}
              <div className={styles.buttoncontainer}>
                <button type="submit" className={styles.forgetbutton}>
                  Sign in
                </button>
              </div>

              {/* href Tag */}
              <div className={styles.signin}>
                <span>
                  <a href="/resetpassword"> Forget your Password?</a>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.girlSection}>
          <img src={girlImage} alt="girl_image"></img>
        </div>
      </div>
    </div>
  );
};

export default Login;
