import React from "react";
import useTheme from "hooks/useTheme";

const BSC: React.FC<{ color?: string; className?: string }> = ({
  className = "",
}) => {
  const { isDark } = useTheme();
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.50566 7.56362L9.0017 4.069L12.4992 7.56647L14.5322 5.53197L9.0017 0L3.47116 5.53054L5.50566 7.56362Z"
        fill={isDark ? "white" : "#9FAFFF"}
      />
      <path
        d="M0 9.00049L2.03376 6.96673L4.06751 9.00049L2.03376 11.0342L0 9.00049Z"
        fill="#CFD7FF"
      />
      <path
        d="M5.50567 10.437L9.00171 13.933L12.4992 10.4355L14.5337 12.4672L14.5323 12.4686L9.00171 18.0006L3.47117 12.4715L3.46832 12.4686L5.50567 10.437Z"
        fill={isDark ? "white" : "#9FAFFF"}
      />
      <path
        d="M13.9325 9.00098L15.9663 6.96722L18 9.00098L15.9663 11.0347L13.9325 9.00098Z"
        fill="#CFD7FF"
      />
      <path
        d="M11.0646 8.99954L9.00169 6.93518L7.47617 8.4607L7.29988 8.63557L6.93876 8.99669L6.93591 8.99954L6.93876 9.0038L9.00169 11.0653L11.0646 9.00096L11.066 8.99954H11.0646Z"
        fill="#CFD7FF"
      />
    </svg>
  );
};

export default BSC;
