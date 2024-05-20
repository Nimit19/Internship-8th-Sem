"use client";

import { useFormState, useFormStatus } from "react-dom";
import React from "react";
import { resetPassword } from "@/actions/auth/auth";
import { findErrorMessage } from "@/utils/findErrorMessage";
import { Button } from "../ui/button";
import AuthContentWrapper from "@/Layouts/AuthContentWrapper";
import InputWithLabel from "../TextFields/InputFields";
import { errorToast } from "@/utils/toast";

const initialState = {
  errors: [],
};
function SubmitButton() {
  const { pending } = useFormStatus();
  return <Button>{pending ? "Submitting..." : "Confirm"} </Button>;
}

const ResetPassword = () => {
  const [state, formAction] = useFormState(resetPassword, initialState);
  const newPasswordErrors = findErrorMessage("newPassword", state.errors);
  const confirmPasswordErrors = findErrorMessage(
    "confirmPassword",
    state.errors
  );
  const serverError = findErrorMessage("serverError", state.errors);
  if (serverError) {
    serverError.length > 0 && errorToast(serverError.join(", "));
  }
  return (
    <>
      <form className="" action={formAction}>
        <AuthContentWrapper title="reset Password">
          <InputWithLabel
            name="newPassword"
            type="password"
            label="New Password"
            helperText={newPasswordErrors.join(", ") || null}
          />
          <InputWithLabel
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            helperText={confirmPasswordErrors.join(", ") || null}
          />
          <div className="flex flex-col">
            <SubmitButton />
          </div>
        </AuthContentWrapper>
      </form>
    </>
  );
};

export default ResetPassword;
