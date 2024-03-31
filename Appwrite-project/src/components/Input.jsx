import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, readOnly, type = "text", def = "", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1 cursor-pointer" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        defaultValue={def}
        className={`px-3 py-2 rounded-lg  text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
        readOnly={readOnly}
      />
    </div>
  );
});

export default Input;
