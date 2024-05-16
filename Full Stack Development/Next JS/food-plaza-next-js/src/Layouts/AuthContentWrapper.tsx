import React from "react";

type PropsType = {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
};
const AuthContentWrapper = ({
  children,
  className,
  subtitle,
  title,
}: PropsType) => {
  return (
    <div className="my-16">
      <div className="sm:w-full text-center mb-10 mx-5 ">
        <h2 className="text-2xl  font-semibold">{title}</h2>
        <h4 className=" text-gray-500">{subtitle}</h4>
      </div>
      <div
        className={` ${className} max-w-[600px]  mx-5 sm:m-auto bg-gray-50 p-5 sm:p-16 flex flex-col gap-8  rounded-lg shadow-lg`}
      >
        {children}
      </div>
    </div>
  );
};

export default AuthContentWrapper;
