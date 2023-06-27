import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string().min(0).required(("Please enter valid user name")),
  password: Yup.string().required("Please enter required password"),
});

const ResetPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required("New password is required")
    .min(6, "Password must be at least 6 characters long"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("newPassword")], "Passwords must match"),
});

export { SignupSchema, ResetPasswordSchema };