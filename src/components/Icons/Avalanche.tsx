import React from "react";
import useTheme from "hooks/useTheme";

const Avalanche: React.FC<{ color?: string; className?: string }> = ({
  className = "",
}) => {
  const { isDark } = useTheme();
  return (
    <svg
      className={className}
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.2301 10.3787C14.6946 9.57624 15.4442 9.57624 15.9088 10.3787L18.8017 15.4571C19.2663 16.2595 18.8862 16.9142 17.9571 16.9142H12.129C11.2104 16.9142 10.8303 16.2595 11.2843 15.4571L14.2301 10.3787ZM8.63423 0.601814C9.09879 -0.200605 9.83786 -0.200605 10.3024 0.601814L10.9465 1.76321L12.4668 4.43442C12.8364 5.19461 12.8364 6.09205 12.4668 6.85224L7.36725 15.6894C6.9027 16.4074 6.13195 16.8614 5.27674 16.9142H1.04292C0.113805 16.9142 -0.266288 16.2701 0.198271 15.4571L8.63423 0.601814Z"
        fill={isDark ? "white" : "#9FAFFF"}
      />
    </svg>
  );
};

export default Avalanche;
