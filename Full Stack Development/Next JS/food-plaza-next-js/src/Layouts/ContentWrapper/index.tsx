import React from "react";

type PropsType = {
  children: React.ReactNode;
  className?: string;
};

const ContentWrapper = ({ children, className }: PropsType) => {
  return (
    <div className={`${className}  scroll-smooth  h-full w-[90vw] m-auto `}>
      {children}
    </div>
  );
};

export default ContentWrapper;
