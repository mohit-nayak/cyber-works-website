import React from "react";
import { Link } from "gatsby";

const AppButton = ({
  as = "button",
  href = "#",
  type = "button",
  variant = "primary",
  onClick = () => {},
  className = "",
  childClassName = "",
  children = "Button",
}) => {
  let bgGradient = "";
  switch (variant) {
    case "primary":
      bgGradient = "bg-primary-gradient";
      break;

    case "secondary":
      bgGradient = "bg-secondary-gradient";
      break;

    default:
      bgGradient = "bg-primary-gradient";
  }

  if (as === "link") {
    return (
      <Link
        to={href}
        className={`block w-max rounded-full p-[1px] font-semibold ${bgGradient} ${className}`}
      >
        <span
          className={`relative flex w-full flex-col rounded-full bg-primary-dark px-6 py-2 text-lg font-light text-secondary-dark transition-colors duration-100 hover:text-tertiary-dark md:px-12 md:py-3 ${childClassName}`}
        >
          {children}
        </span>
      </Link>
    );
  } else if (as === "button") {
    return (
      <button
        className={`rounded-full p-[1px] font-semibold ${bgGradient} ${className}`}
        onClick={onClick}
        type={type}
      >
        <span
          className={`relative flex w-full flex-col rounded-full bg-primary-dark px-6 py-2 text-lg font-light text-secondary-dark transition-colors duration-100 hover:text-tertiary-dark md:px-12 md:py-3 ${childClassName}`}
        >
          {children}
        </span>
      </button>
    );
  } else return null;
};

export default AppButton;
