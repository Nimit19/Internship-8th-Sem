import React from "react";

type HeaderTextProps = {
  text: string;
};
const HeaderText: React.FC<HeaderTextProps> = ({ text }) => {
  return (
    <div className="text-lg md:text-4xl text-start font-semibold py-3 md:py-8">
      {text}
    </div>
  );
};

export default HeaderText;
