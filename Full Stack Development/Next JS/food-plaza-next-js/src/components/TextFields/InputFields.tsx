import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string | boolean;
  success?: boolean;
  icon?: any;
  failure?: boolean;
  mainClassName?: string;
  labelClassName?: string;
}

const InputWithLabel = ({
  type = "text",
  required,
  placeholder,
  label,
  helperText,
  success,
  failure,
  mainClassName,
  labelClassName,
  icon,
  ...props
}: Props) => {
  return (
    <div className={`${mainClassName} flex w-full flex-col gap-[8px] `}>
      {label && (
        <div className="flex">
          <p>{label}</p>
          {required && <span>*</span>}
        </div>
      )}
      <div className="flex relative items-center">
        <input
          className="flex h-12 w-full  rounded-md border-2  border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-primary focus-visible:border-primary focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          required={required}
          type={type}
          placeholder={placeholder}
          // ref={}
          {...props}
        />
      </div>

      {helperText && (
        <div className="text-sm mt-[-5px] text-red-500">{helperText}</div>
      )}
    </div>
  );
};

export default InputWithLabel;
