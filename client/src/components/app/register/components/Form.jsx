import React from "react";
import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import { useAuthStore } from "../../../../stores/authentication";
import { axios } from "../../../../config/axios";

const RegisterForm = ({ setMessage }) => {
  const { register } = useAuthStore((state) => ({ register: state.register }));

  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      //.min(6, "Password should be at least 6 characters!")
      //.uppercase("Password must contain at least 1 uppercase!")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password Confirmation is required"),
    subscribe: Yup.boolean(),
    acceptTerms: Yup.bool().oneOf(
      [true],
      "Accept Terms & Conditions is required"
    ),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        subscribe: false,
        acceptTerms: false,
      }}
      validationSchema={schema}
      onSubmit={(values) => {
        register(values.email, values.password, values.subscribe)
          .then(async (response) => {
            await axios.post("/accounts/", {
              uid: response.user.uid,
              email: response.user.email,
              isSubscribed: values.subscribe,
            });
          })
          .catch((error) => {
            setMessage({
              title: "ERROR",
              severity: "error",
              text: "Registration failed please contacct us for assistance.",
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

          <div className="form-group mt-4">
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

          <div className="form-group mt-4">
            <label
              htmlFor="confirmpassword"
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            >
              Confirm Password
            </label>
            <Field
              name="confirmpassword"
              className="block w-full form-control px-4 py-2 text-gray-700"
              type="password"
            />

            {errors.confirmpassword && touched.confirmpassword ? (
              <div>{errors.confirmpassword}</div>
            ) : null}
          </div>

          <div className="mt-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                <Field type="checkbox" name="subscribe" /> Subscribe.
              </label>

              {errors.subscribe && touched.subscribe ? (
                <div>{errors.subscribe}</div>
              ) : null}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                <Field type="checkbox" name="acceptTerms" /> I Accept the terms
                and conditions.
              </label>

              {errors.acceptTerms && touched.acceptTerms ? (
                <div>{errors.acceptTerms}</div>
              ) : null}
            </div>
          </div>

          <div className="d-flex justify-content-end mt-8">
            <Button
              variant="primary"
              className="w-full px-4 py-2 tracking-wide text-white"
              type="submit"
            >
              Sign up
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

RegisterForm.propType = {
  setMessage: PropTypes.any,
};

export default RegisterForm;
