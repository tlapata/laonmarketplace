import React from "react";
import useTheme from "hooks/useTheme";

const XDai: React.FC<{ color?: string; className?: string }> = ({
  className = "",
}) => {
  const { isDark } = useTheme();
  return (
    <svg
      className={className}
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3.34254H6.68509V0H0V3.34254Z"
        fill={isDark ? "white" : "#9FAFFF"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0149 3.34254H16.7V0H10.0149V3.34254Z"
        fill={isDark ? "white" : "#9FAFFF"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7 10.0149H13.3575V13.3574H10.0149V16.7H16.7V10.0149Z"
        fill={isDark ? "white" : "#9FAFFF"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.68509 16.7V13.3574H3.34254V10.0149H0V16.7H6.68509Z"
        fill={isDark ? "white" : "#9FAFFF"}
      />
    </svg>
  );
};

export default XDai;
