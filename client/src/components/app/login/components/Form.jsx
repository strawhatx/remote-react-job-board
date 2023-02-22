import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { useAuthStore } from "../../../../stores/authentication";
import { setAuthToken } from "../../../../config/axios";
import { Button } from "react-bootstrap";

const LoginForm = ({ setMessage }) => {
  const navigate = useNavigate();

  const { login, currentUser } = useAuthStore((state) => ({
    login: state.login,
    currentUser: state.currentUser,
  }));

  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password should be at least 6 characters!")
      .uppercase("Password must contain at least 1 uppercase!")
      .required("Password is required"),
    rememberMe: Yup.boolean(),
  });

  //the form using formik to handle the submission
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        rememberMe: false,
      }}
      validationSchema={schema}
      onSubmit={async (values) => {
        await login(values.email, values.password) //, values.rememberMe || false)
          .then(() => {
            setAuthToken(currentUser);
          })
          .then(() => navigate("/search"))
          .catch((error) => {
            setMessage({
              title: "ERROR",
              severity: "error",
              text: "email and/or password is incorrect",
            });
          });
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="form-group mt-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            >
              Email
            </label>
            <Field
              name="email"
              className="block w-full form-control px-4 py-2 text-gray-700"
              type="text"
            />

            {errors.email && touched.email ? <div>{errors.email}</div> : null}
          </div>

          <div className="form-group mt-3">
            <div className="d-flex flex-column align-items-end mb-1">
              <Link
                className="forgot text-decoration-none align-content-end text-dark"
                to={`/forgot-password`}
              >
                Forgot Password?
              </Link>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              >
                Password
              </label>
              <Field
                name="password"
                className="block w-full form-control px-4 py-2 text-gray-700"
                type="password"
              />

              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </div>
          </div>

          <div className="mt-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                <Field type="checkbox" name="rememberme" /> Remember me.
              </label>

              {errors.rememberMe && touched.rememberMe ? (
                <div>{errors.rememberMe}</div>
              ) : null}
            </div>
          </div>

          <div className="d-flex justify-content-end mt-2">
            <Button
              variant="primary"
              className="w-full px-4 py-2 tracking-wide text-white"
              type="submit"
            >
              Sign in
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

LoginForm.propType = {
  setMessage: PropTypes.any,
};

export default LoginForm;
