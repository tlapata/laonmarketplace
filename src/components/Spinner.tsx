import React from "react";
import styled from "styled-components";

const Spinner: React.FC<{ className?: string; style?: object }> = ({
  className = "",
  style = {},
}) => (
  <StyledSpinner
    width="97"
    style={style}
    className={className}
    height="97"
    viewBox="0 0 97 97"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M93.3811 48.3805C93.3811 42.471 92.2172 36.6194 89.9557 31.1597C87.6942 25.7 84.3795 20.7393 80.2009 16.5606C76.0222 12.382 71.0615 9.06727 65.6018 6.8058C60.1421 4.54433 54.2905 3.38037 48.381 3.38037L48.381 7.88039C53.6995 7.88039 58.966 8.92795 63.8797 10.9633C68.7934 12.9986 73.2581 15.9818 77.0189 19.7426C80.7797 23.5034 83.7629 27.9681 85.7982 32.8818C87.8335 37.7955 88.8811 43.062 88.8811 48.3805H93.3811Z"
      fill="url(#paint0_linear_9476_72)"
    />
    <path
      d="M48.3807 93.3806C54.2902 93.3806 60.1419 92.2167 65.6015 89.9552C71.0612 87.6937 76.022 84.379 80.2006 80.2004C84.3793 76.0218 87.694 71.061 89.9554 65.6013C92.2169 60.1416 93.3809 54.29 93.3809 48.3805L88.8808 48.3805C88.8808 53.6991 87.8333 58.9655 85.798 63.8792C83.7626 68.7929 80.7794 73.2576 77.0186 77.0184C73.2579 80.7792 68.7932 83.7624 63.8795 85.7977C58.9658 87.833 53.6993 88.8806 48.3807 88.8806V93.3806Z"
      fill="url(#paint1_linear_9476_72)"
    />
    <path
      d="M3.3806 48.3807C3.3806 54.2902 4.54456 60.1419 6.80603 65.6015C9.0675 71.0612 12.3822 76.022 16.5608 80.2006C20.7395 84.3793 25.7003 87.694 31.1599 89.9554C36.6196 92.2169 42.4712 93.3809 48.3807 93.3809L48.3807 88.8808C43.0622 88.8808 37.7957 87.8333 32.882 85.798C27.9683 83.7626 23.5036 80.7794 19.7428 77.0186C15.982 73.2579 12.9988 68.7932 10.9635 63.8795C8.92818 58.9658 7.88062 53.6993 7.88062 48.3807H3.3806Z"
      fill="url(#paint2_linear_9476_72)"
    />
    <path
      d="M34.1221 8.07859C33.7076 6.90711 32.4192 6.28817 31.2699 6.76067C22.8357 10.2281 15.6357 16.1851 10.6477 23.8613C5.6597 31.5375 3.14123 40.5366 3.39904 49.6521C3.43417 50.8942 4.52312 51.8201 5.76196 51.7229C7.00081 51.6258 7.91975 50.5423 7.89152 49.3C7.70685 41.173 9.97289 33.1587 14.4211 26.3132C18.8693 19.4678 25.272 14.1415 32.7732 11.0088C33.9199 10.5299 34.5366 9.25008 34.1221 8.07859Z"
      fill="url(#paint3_linear_9476_72)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_9476_72"
        x1="59.131"
        y1="8.13039"
        x2="91.1311"
        y2="48.3805"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3A5AFB" stopOpacity="0.01" />
        <stop offset="1" stopColor="#3A5AFB" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_9476_72"
        x1="48.3807"
        y1="90.1306"
        x2="48.3807"
        y2="48.3805"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9D2DE8" />
        <stop offset="1" stopColor="#365CFC" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_9476_72"
        x1="48.3807"
        y1="93.3809"
        x2="48.3807"
        y2="48.3807"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9D2DE8" />
        <stop offset="1" stopColor="#9D2DE8" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_9476_72"
        x1="28.9949"
        y1="9.02569"
        x2="29.6309"
        y2="48.3806"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF00D6" />
        <stop offset="1" stopColor="#992EE9" />
      </linearGradient>
    </defs>
  </StyledSpinner>
);

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;

  & .path {
    stroke: linear-gradient(180deg, #ff00d6 100%, #992ee9 100%);
    stroke-linecap: round;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default Spinner;
