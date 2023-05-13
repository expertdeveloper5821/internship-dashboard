import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    .email("Invalid Email")
    .required("Please enter valid email"),
  password: Yup.string().min(6).required("Please enter required password"),
});

export default SignupSchema;
