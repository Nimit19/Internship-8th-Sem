"use client";
import TrueIcon from "@/svgs/TrueIcon";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  success?: boolean;
  failure?: boolean;
  helperText?: string | boolean;
  showValidation?: boolean;
}

const PasswordField = ({
  label,
  type = "password",
  required,
  placeholder,
  success,
  failure,
  value,
  helperText,
  showValidation = true,
  ...props
}: Props) => {
  const [passwordType, setPasswordType] = useState<string | null>("password");

  const handleClick = () => {
    if (type === "password" && passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const [validations, setValidations] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const handleChange = (e: any) => {
    const newPassword = e.target?.value;
    updateValidations(newPassword);
  };

  const updateValidations = (e: any) => {
    const hasUpperCase = /[A-Z]/.test(e);
    const hasLowerCase = /[a-z]/.test(e);
    const hasNumber = /[0-9]/.test(e);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(e);
    const isLengthValid = e?.length >= 8;

    setValidations({
      length: isLengthValid,
      uppercase: hasUpperCase,
      lowercase: hasLowerCase,
      number: hasNumber,
      specialChar: hasSpecialChar,
    });
  };

  const renderValidationItem = (text: string, isValid: boolean) => (
    <div
      className={`flex w-56 gap-2 items-center ${
        isValid ? "text-success" : " opacity-40"
      }`}
    >
      <TrueIcon
        fillColor={
          isValid ? "hsla(149, 81%, 37%, 1)" : "hsla(240, 9%, 4%, 0.34)"
        }
      />
      {text}
    </div>
  );

  return (
    <div className="flex w-full flex-col gap-[9px] ">
      <div className="flex">
        <p> {label}</p>
        {required && <span>*</span>}
      </div>
      <div className="flex relative items-center">
        <input
          className="flex h-12 w-full  rounded-md border-2  border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-primary focus-visible:border-primary focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          required={required}
          type={passwordType || "password"}
          placeholder={placeholder}
          onChange={handleChange}
          // ref={ref}
          {...props}
        />
        <div className="absolute right-0 h-full w-10 flex items-center justify-center rounded-md">
          {passwordType === "password" ? (
            <EyeOffIcon className="cursor-pointer" onClick={handleClick} />
          ) : (
            <EyeIcon className="cursor-pointer" onClick={handleClick} />
          )}
        </div>
      </div>
      {helperText && (
        <div className="text-sm mt-[-5px] text-red-500">{helperText}</div>
      )}
      {showValidation && (
        <div className="flex flex-wrap gap-x-5 md:w-full lg:w-[100%]">
          {renderValidationItem(
            "One lowercase character",
            validations.lowercase
          )}
          {renderValidationItem("One number", validations.number)}
          {renderValidationItem(
            "One uppercase character",
            validations.uppercase
          )}
          {renderValidationItem(
            "One special character",
            validations.specialChar
          )}
          {renderValidationItem("8 characters minimum", validations.length)}
        </div>
      )}
    </div>
  );
};
export default PasswordField;
