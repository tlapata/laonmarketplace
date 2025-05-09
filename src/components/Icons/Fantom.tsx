import React from "react";
import useTheme from "hooks/useTheme";

const Fantom: React.FC<{ color?: string; className?: string }> = ({
  className = "",
}) => {
  const { isDark } = useTheme();
  return (
    <svg
      className={className}
      width="12"
      height="20"
      viewBox="0 0 12 20"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.2 6.9L10.8 4.8V9L7.2 6.9ZM10.8 15.9L6 18.7L1.2 15.9V11L6 13.8L10.8 11V15.9ZM1.2 4.8L4.8 6.9L1.2 9V4.8ZM6.6 7.9L10.2 10L6.6 12.1V7.9ZM5.4 12.1L1.8 10L5.4 7.9V12.1ZM10.2 3.8L6 6.2L1.8 3.8L6 1.3L10.2 3.8ZM0 3.4V16.5L6 19.9L12 16.5V3.4L6 0L0 3.4Z"
        fill={isDark ? "white" : "#9FAFFF"}
      />
    </svg>
  );
};

export default Fantom;
