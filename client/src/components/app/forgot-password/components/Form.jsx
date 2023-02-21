import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { useAuthStore } from "../../../../stores/authentication";
import { Button } from "react-bootstrap";

const ForgotPasswordForm = ({ setMessage }) => {
  const { resetPassword } = useAuthStore((state) => ({
    resetPassword: state.resetPassword,
  }));

  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  //the form using formik to handle the submission
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={schema}
      onSubmit={async (values) => {
        await resetPassword(values.email)
          .then(() => {
            setMessage({
              title: "SUCCESS",
              severity: "success",
              text: "Check your inbox for further instructions",
            });
          })
          .catch((error) => {
            console.log(error);
            setMessage({
              title: "ERROR",
              severity: "error",
              text: "Failed to reset password",
            });
          });
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="form-group mb-4">
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

          <div className="d-flex justify-content-end mt-2">
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

ForgotPasswordForm.propType = {
  setMessage: PropTypes.any,
};

export default ForgotPasswordForm;
