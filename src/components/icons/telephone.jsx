import React from "react";

const TelephoneIcon = ({ className = "" }) => {
  return (
    <svg
      width="40"
      height="39"
      viewBox="0 0 40 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.9"
        d="M14.1634 7.52658L15.4558 7.11377C16.6654 6.72737 17.959 7.35258 18.4774 8.57419L19.5095 11.0078C19.9595 12.0674 19.7099 13.3142 18.8927 14.0895L16.621 16.2471C16.761 17.5383 17.1946 18.8091 17.9218 20.0595C18.6134 21.269 19.54 22.3278 20.6471 23.1736L23.3783 22.2616C24.4127 21.9171 25.5395 22.3144 26.1743 23.2468L27.6528 25.4188C28.392 26.5036 28.2588 27.9988 27.3432 28.918L26.3615 29.9032C25.3847 30.8837 23.9903 31.2401 22.6991 30.8369C19.6527 29.8864 16.8514 27.0652 14.2954 22.3732C11.7362 17.6731 10.833 13.6859 11.5858 10.4114C11.9026 9.0338 12.8842 7.93578 14.1658 7.52658"
        className={`fill-secondary-dark transition-all duration-100 hover:fill-tertiary-dark ${className}`}
      />
    </svg>
  );
};

export default TelephoneIcon;
