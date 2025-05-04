import React from "react";
import { SvgProps } from "../types";
import Svg from "../Svg";
const iconStyle = {
  display: "block",
  height: "26px",
};
const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      onClick={props.onClick}
      style={iconStyle}
    >
      <path
        d="M12.5 0C9.18479 -3.95334e-08 6.00537 1.31696 3.66117 3.66116C1.31696 6.00537 2.89825e-07 9.18479 0 12.5C-2.89824e-07 15.8152 1.31696 18.9946 3.66116 21.3388C6.00537 23.683 9.18479 25 12.5 25L12.5 12.5V0Z"
        fill={props.fill ? props.fill : "url(#paint0_linear_9462_2443)"}
      />
      <path
        d="M22.7394 5.3303C21.1383 3.04362 18.8178 1.3587 16.1477 0.54408L12.5 12.5L22.7394 5.3303Z"
        fill={props.fill ? props.fill : "url(#paint0_linear_9462_2443)"}
      />
      <path
        d="M24.2462 16.7753C25.2009 14.1521 25.2501 11.2848 24.386 8.63041L12.5 12.5L24.2462 16.7753Z"
        fill={props.fill ? props.fill : "url(#paint0_linear_9462_2443)"}
      />
      <path
        d="M16.0351 24.4897C18.7127 23.7002 21.0489 22.0372 22.6715 19.7657L12.5 12.5L16.0351 24.4897Z"
        fill={props.fill ? props.fill : "url(#paint0_linear_9462_2443)"}
      />
      <circle cx="12.5" cy="12.5" r="7.5" fill="#151018" />
      <path
        d="M12.5 7C9.4673 7 7 9.4673 7 12.5C7 15.5327 9.4673 18 12.5 18C15.5327 18 18 15.5327 18 12.5C18 9.4673 15.5327 7 12.5 7ZM13.069 15.247V15.9138H11.931V15.2981L11.1238 15.2289L11.221 14.0952L12.4695 14.2022C12.5115 14.2058 12.5473 14.2057 12.5757 14.202C12.8569 14.165 13.069 13.9225 13.069 13.6379C13.069 13.3242 12.8138 13.0689 12.5 13.0689C11.5589 13.0689 10.7931 12.3032 10.7931 11.362C10.7931 10.9807 10.9162 10.6199 11.1491 10.3187C11.3509 10.0577 11.6246 9.86736 11.9311 9.7618V9.08621H13.069V9.73069L13.9081 9.85056L13.7472 10.977L12.5841 10.8109C12.3747 10.781 12.1697 10.8591 12.0494 11.0147C11.972 11.1148 11.9311 11.2349 11.9311 11.3621C11.9311 11.6758 12.1863 11.931 12.5 11.931C13.4412 11.931 14.2069 12.6967 14.2069 13.6379C14.2069 14.3707 13.7369 15.0102 13.069 15.247Z"
        fill={props.fill ? props.fill : "url(#paint0_linear_9462_2443)"}
      />
      <defs>
        <linearGradient
          id="paint0_linear_9462_2443"
          x1="-4.33207"
          y1="10.7064"
          x2="26"
          y2="10.7063"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1C6FF" />
          <stop offset="0.348958" stopColor="#BD0AF8" />
          <stop offset="0.994097" stopColor="#365CFC" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_9462_2443"
          x1="-1.28574"
          y1="23.3331"
          x2="23.7168"
          y2="23.3327"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1C6FF" />
          <stop offset="0.348958" stopColor="#BD0AF8" />
          <stop offset="0.994097" stopColor="#365CFC" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_9462_2443"
          x1="11.982"
          y1="14.9141"
          x2="13.763"
          y2="14.9141"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1C6FF" />
          <stop offset="0.348958" stopColor="#BD0AF8" />
          <stop offset="0.994097" stopColor="#365CFC" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
