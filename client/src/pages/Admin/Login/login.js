import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "reactstrap";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import CustomInput from "../../../components/Custom/textinput";
import { AdminLogin } from "../../../services/services";
import "./login.css";
import { STORAGEKEY } from "../../../Constant";

const Login = () => {
  const history = useHistory();
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Please enter email address")
      .email("Enter valid email address"),
    password: Yup.string().required("Please enter password"),
  });

  const handleSubmit = (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    AdminLogin(data)
      .then((res) => {
        const data =
          res && res.data && res.data.data && res.data.data.access_token;
        localStorage.setItem(STORAGEKEY.ACCESSTOKEN, data);
        history.push("/add-blog");
      })
      .catch((err) => {
        NotificationManager.error(
          "Your login credentials are invalid. Please try again."
        );
        console.log(err);
      });
  };
  return (
    <>
      <div className="login">
        <span className="loginTitle">Login</span>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, values, handleChange }) => (
            <Form>
              <label>Email</label>
              <CustomInput
                className="loginInput"
                type="text"
                name="email"
                placeholder="Enter your email..."
                values={values}
                touched={touched}
                handleChange={handleChange}
                errors={errors}
              />

              <label>Password</label>
              <CustomInput
                className="loginInput"
                type="password"
                name="password"
                placeholder="Enter your password..."
                values={values}
                touched={touched}
                handleChange={handleChange}
                errors={errors}
              />
              <div className="flex justify-center">
                <Button className="loginButton">Login</Button>
              </div>
            </Form>
          )}
        </Formik>
        {/* <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form> */}
        <NotificationContainer />
      </div>
    </>
  );
};

export default Login;
