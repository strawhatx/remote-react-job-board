import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import useAuthStore from "../../../../../stores/authentication";

const UserProfileChangePasswordView = () => {
  const { update } = useAuthStore((state) => ({
    update: state.updatePassword,
  }));

  const schema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password shold be at least 6 characters!")
      .uppercase("Password must contain at least 1 uppercase!")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ password: "" }}
      validationSchema={schema}
      onSubmit={async (values) => {
        await update(values.password) //, values.rememberMe || false)
          .catch((error) => {
            console.log(error);
          });
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="d-flex mt-4 align-items-center w-100">
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              >
                Password
              </label>
              <Field
                name="password"
                className="block w-full px-4 py-2 text-gray-700"
                type="password"
              />

              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </div>

            <div className="mt-8">
              <Button
                variant="primary"
                className="w-full px-4 py-2 tracking-wide text-white"
                type="submit"
              >
                Edit
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserProfileChangePasswordView;
