"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const FormSubmit = () => {
  const status = useFormStatus();

  return (
    <>
      <button type="reset">Reset</button>
      <button disabled={status.pending}>
        {status.pending ? "Creating Post..." : "Create Post"}
      </button>
    </>
  );
};

export default FormSubmit;
