"use client";
import React from "react";

import { useFormState } from "react-dom";
import { login, signup } from "@/app/actions/auth/auth";

import AuthForm from "./AuthForm";

const initialState: any = {
  errors: [],
  showMessage: false,
  email: "",
};

const Authentication = ({ mode }: { mode: string }) => {
  const [state, formAction] =
    mode === "login"
      ? useFormState(login, initialState)
      : useFormState(signup, initialState);

  return (
    <>
      {state.showMessage && (
        <div className="my-16 max-w-[600px]  mx-5 sm:m-auto bg-gray-50 p-5 sm:p-16 flex flex-col gap-8  rounded-lg shadow-lg">
          We have sent you an email to {state.email as string}, once you click
          on that link your new account will become active. <br />
          <br />
          Please note it can take up to 10 minutes for your verification email
          to arrive, and be sure to check your junk / spam folder in case it
          ends up in the wrong place! <br />
          <br />
        </div>
      )}

      {!state.showMessage && (
        <div className="my-16">
          <div className="sm:w-full text-center mb-10 mx-5  ">
            <h2 className="text-2xl  font-semibold  ">
              {mode === "login" && "Log in to Food Plaza"}
              {mode === "signup" && "Create your account"}
            </h2>
            <h4 className=" text-gray-500">
              {mode === "login" && "Welcome back! Please Sign in to continue."}
              {mode === "signup" &&
                "Welcome! Please fill in the details to get started."}
            </h4>
          </div>
          <AuthForm formAction={formAction} state={state} mode={mode} />
        </div>
      )}
    </>
  );
};

export default Authentication;
