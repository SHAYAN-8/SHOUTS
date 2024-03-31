import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-cyan-300",
  textColor = "text-black",
  disabled,
  className = "",
  ...props
}) {
  return (
    <button
      disabled={disabled}
      className={`px-4 py-2 rounded-md font-semibold duration-200 hover:brightness-95 ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
