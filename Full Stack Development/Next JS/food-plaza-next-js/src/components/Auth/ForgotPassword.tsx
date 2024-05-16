"use client";

import { useFormState, useFormStatus } from "react-dom";
import React from "react";
import { forgotPassword } from "@/app/actions/auth/auth";
import { findErrorMessage } from "@/utils/findErrorMessage";
import InputWithLabel from "../TextFields/InputFields";
import AuthContentWrapper from "@/Layouts/AuthContentWrapper";
import { Button } from "../ui/button";
import { errorToast } from "@/utils/toast";

const initialState = {
  errors: [],
  showMessage: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return <Button>{pending ? "Submitting..." : "Confirm"} </Button>;
}

const ForgotPassword = () => {
  const [state, formAction] = useFormState(forgotPassword, initialState);
  const emailErrors = findErrorMessage("email", state.errors);
  const serverError = findErrorMessage("serverError", state.errors);
  if (serverError) {
    serverError.length > 0 && errorToast(serverError.join(", "));
  }
  return (
    <>
      {state.showMessage ? (
        <AuthContentWrapper title="Forgot Password">
          We've sent you an email with a link to reset your password.
          <br />
          <br />
          It should arrive in the next few minutes.
          <br />
          <br />
          Don't forget to check your spam folder if you can't find the email.
        </AuthContentWrapper>
      ) : (
        <form className="" action={formAction}>
          <AuthContentWrapper title="Forgot Password">
            <InputWithLabel
              type="email"
              name="email"
              label="Email Address"
              helperText={emailErrors.join(", ") || null}
            />
            <div className="flex flex-col">
              <SubmitButton />
            </div>
          </AuthContentWrapper>
        </form>
      )}
    </>
  );
};

export default ForgotPassword;
