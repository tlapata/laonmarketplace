import React from "react";
import useTheme from "hooks/useTheme";

const Ethereum: React.FC<{ color?: string; className?: string }> = ({
  className = "",
}) => {
  const { isDark } = useTheme();

  return (
    <svg
      className={className}
      width="17"
      height="26"
      viewBox="0 0 17 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.000640869 13.1895L8.47054 0.7229L16.9404 13.1895L8.47054 17.7228L0.000640869 13.1895Z"
        fill={isDark ? "white" : "#9FAFFF"}
      />
      <path
        d="M8.46942 0.722656L16.9393 13.1893L8.46942 17.7226V0.722656Z"
        fill="#CFD7FF"
      />
      <path
        d="M3.05176e-05 14.8892L8.46993 19.4225L16.9398 14.8892L8.46993 25.6558L3.05176e-05 14.8892Z"
        fill={isDark ? "white" : "#9FAFFF"}
      />
      <path
        d="M8.46993 19.4227L16.9398 14.8894L8.46993 25.656V19.4227ZM3.05176e-05 13.1894L8.46993 9.78943L16.9398 13.1894L8.46993 17.7227L3.05176e-05 13.1894Z"
        fill="#CFD7FF"
      />
      <path
        d="M8.46942 9.78943L16.9393 13.1894L8.46942 17.7227V9.78943Z"
        fill={isDark ? "white" : "#9FAFFF"}
      />
    </svg>
  );
};

export default Ethereum;
