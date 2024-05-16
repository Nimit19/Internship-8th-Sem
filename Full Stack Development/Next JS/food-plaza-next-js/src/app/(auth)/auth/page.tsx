import Authentication from "@/Sections/Auth";
import React from "react";

const AuthenticationPage = ({
  searchParams,
}: {
  searchParams: {
    mode: string;
  };
}) => {
  const authFormMode = searchParams.mode || "login";
  return <Authentication mode={authFormMode} />;
};

export default AuthenticationPage;
