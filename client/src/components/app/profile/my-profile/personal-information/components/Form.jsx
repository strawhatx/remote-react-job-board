import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import useAuthStore from "../../../../../stores/authentication";
import Editable from "../../../../../Editable";

const UserProfilePersonalInformationForm = ({isEditing}) => {

    const schema = Yup.object().shape({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string(),
        email: Yup.string().email("Invalid email").required("Email is required"),
        phone: Yup.string(),
        bio: Yup.string(),
        position: Yup.string(),
    });

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                bio: "",
                position: "",
            }}
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
                            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                                Password
                            </label>
                            <Editable content={task} isEditing={isEditing}>
                                <Field name="firstName" className="block w-full px-4 py-2 text-gray-700" type="text"/>
                            </Editable>

                            {errors.firstName && touched.firstName? (<div>{errors.firstName}</div>) : null}
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

export default UserProfilePersonalInformationForm;
