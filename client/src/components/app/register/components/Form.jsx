import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import { useAuthStore } from "../../../../stores/authentication";
import { setAuthToken } from "../../../../config/axios";
import { axios } from "../../../../config/axios";

const RegisterForm = ({ setMessage }) => {
  const navigate = useNavigate();
  
  const { register, currentUser } = useAuthStore((state) => ({ 
    register: state.register,
    currentUser: state.currentUser
  }));

  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(5, "Password should be at least 6 characters!")
      .uppercase("Password must contain at least 1 uppercase!")
      .required("Password is required"),
    subscribe: Yup.string(),
    role: Yup.string().oneOf(
      ["DEVELOPER", "COMPANY"], 
      "User Type Selection is required"
      ),
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
        role: "DEVELOPER",
        subscribe: false,
        acceptTerms: false,
      }}
      validationSchema={schema}
      onSubmit={(values) => {
        register(values.email, values.password)
          .then(async (response) => {
            await axios.post("/accounts/", {
              uid: response.user.uid,
              email: response.user.email,
              role: values.role,
              isSubscribed: values.subscribe,
            });
          })
          .then(() => {
            if(currentUser) setAuthToken(currentUser);
          })
          .then(() => navigate("/search"))
          .catch((error) => {
            setMessage({
              title: "ERROR",
              severity: "error",
              text: "Registration failed please contact us for assistance.",
            });
          });
      }}
    >
      {({ errors, touched, values }) => (
        <Form>
       <div className="form-group">
            <Field
              id="dev"
              name="role"
              className="btn-check"
              type="radio"
              value="DEVELOPER"
            />
            <label 
            className="btn btn-outline-primary w-full px-5 py-2 tracking-wide me-2" htmlFor="dev">Im a JobSeeker</label>
            
            <Field
              id="company"
              name="role"
              className="btn-check"
              type="radio"
              value="COMPANY"
            />
            <label className="btn btn-outline-primary w-full px-5 py-2 tracking-wide" htmlFor="company">We're a Company</label>
            
            {errors.role && touched.role ? <div>{errors.role}</div> : null}
          </div>

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

          <div className="d-flex justify-content-end mt-5">
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
