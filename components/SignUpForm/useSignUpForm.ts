import { useFormik } from "formik";
import { signUpContext } from "pages/sign-up/signUpContext";
import React, { useContext, useRef, useState } from "react";

import * as Yup from "yup";

const useSignUpForm = () => {
  const { setIsSignUpSuccessfull } = useContext(signUpContext);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const handleCheckobChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
    formik.setFieldValue("checkbox", !isCheckboxChecked);
  };

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid Email ")
      .required("Required"),
    cardHolder: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    cardNumber: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    cardCVV: Yup.number().test(
      "len",
      "Must be 3 chars",
      (val) => val?.toString().length === 3
    ),

    zip: Yup.number().test(
      "len",
      "Must be 3 chars",
      (val) => val?.toString().length === 3
    ),

    country: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),

    discountCode: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),

    checkbox: Yup.bool().oneOf(
      [true],
      "You need to accept the terms and conditions"
    ),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      cardHolder: "",
      cardNumber: "",
      cardDate: "",
      cardCVV: "",
      country: "",
      zip: "",
      discountCode: "",
      checkbox: false,
    },
    validationSchema: SignupSchema,
    onSubmit: () => {
      setIsSignUpSuccessfull(true);
    },
  });

  return {
    formik,
    handleCheckobChange,
    isCheckboxChecked,
    isSubmitted,
    form,
  };
};

export default useSignUpForm;
