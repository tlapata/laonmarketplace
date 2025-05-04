import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      viewBox="0 0 1005 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M86 43.6502V74.4402L89.36 70.8902V60.3503L92.73 56.9902L89.74 53.9902V43.6502L86.09 40.0002L86 43.6502Z"
        fill="white"
      />
      <path
        d="M916.5 70.79V40L913.13 43.55V54.09L909.77 57.46L912.76 60.45V70.79L916.41 74.44L916.5 70.79Z"
        fill="white"
      />
      <path
        d="M413.46 57.3597H95.39L91.46 53.5497L92.24 52.7397L95.85 56.2397H413L497.69 56.2397V57.3597H413.46Z"
        fill="white"
      />
      <path
        d="M906.98 57.3597H592.99H488.76V56.2397H551.105H593.45L906.53 56.2397L910.14 52.7397L910.92 53.5497L906.98 57.3597Z"
        fill="white"
      />
      <path
        d="M588.92 58.36H906.99L910.92 62.17L910.14 62.98L906.53 59.48H589.38L504.69 59.48V58.36H588.92Z"
        fill="white"
      />
      <path
        d="M95.4 58.36H409.39H513.62V59.48H451.275H408.93L95.85 59.48L92.24 62.98L91.46 62.17L95.4 58.36Z"
        fill="white"
      />
      <g filter="url(#filter0_f_598_212)">
        <circle cx="948" cy="56.9995" r="27" fill="#14CD3C" />
      </g>
      <g filter="url(#filter1_f_598_212)">
        <circle cx="57" cy="56.9995" r="27" fill="#F45C5C" />
      </g>
      <path
        d="M420.943 79.1613L422.779 80.9969H440.181L441.543 82.3596H452.974L449.763 79.1426L420.943 79.1613Z"
        fill="white"
        fill-opacity="0.35"
      />
      <path
        d="M546.918 84.7988L550.888 80.8289H588.954L586.913 82.8698H558.931L556.803 85.0041L546.918 84.7988Z"
        fill="white"
        fill-opacity="0.35"
      />
      <path
        d="M468.767 40.1281L470.901 38H538.151L540.316 40.1654L468.767 40.1281Z"
        fill="white"
        fill-opacity="0.35"
      />
      <path
        d="M420.904 40.0658L414.178 46.786V71.657L419.647 77.1265H451.493L459.165 84.7987H544.136L549.973 78.9683H590.646L594.585 75.0295V67.0648L603.109 58.5339V46.8047L595.593 39.2817H543.807L541.455 41.6338H467.429L465.307 39.5182L420.904 40.0658Z"
        fill="url(#paint0_linear_598_212)"
        stroke="white"
        stroke-width="0.4"
        stroke-miterlimit="10"
      />
      <defs>
        <filter
          id="filter0_f_598_212"
          x="891"
          y="-0.000488281"
          width="114"
          height="114"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="15"
            result="effect1_foregroundBlur_598_212"
          />
        </filter>
        <filter
          id="filter1_f_598_212"
          x="0"
          y="-0.000488281"
          width="114"
          height="114"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="15"
            result="effect1_foregroundBlur_598_212"
          />
        </filter>
        <linearGradient
          id="paint0_linear_598_212"
          x1="349.2"
          y1="62.0476"
          x2="615.109"
          y2="62.0445"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1C6FF" />
          <stop offset="0.348958" stopColor="#BD0AF8" />
          <stop offset="0.994097" stopColor="#365CFC" />
        </linearGradient>
      </defs>

      <text
        fontSize="12.417px"
        fontFamily="Jost Bold"
        letterSpacing="0.03rem"
        fontWeight="800"
        x="45"
        y="60"
        fill="#FFFFFF"
      >
        {props.apy1}%{" "}
      </text>
      <text
        fontSize="12.417px"
        fontFamily="Jost Bold"
        letterSpacing="0.03rem"
        fontWeight="800"
        x="940"
        y="60"
        fill="#FFFFFF"
      >
        {props.apy2}%{" "}
      </text>
      <text
        fontSize="14.504px"
        fontFamily="Organetto Semi Bold"
        letterSpacing="0.03rem"
        fontWeight="800"
        x="720"
        y="80"
        fill="#FFFFFF"
      >
        {props.text2}
      </text>
      <text
        fontSize="14.504px"
        fontFamily="Organetto Semi Bold"
        letterSpacing="0.03rem"
        fontWeight="800"
        x="100"
        y="80"
        fill="#FFFFFF"
      >
        {props.text1}
      </text>
      <text
        fontSize="20px"
        fontFamily="Jost Bold"
        width="100"
        fontWeight="800"
        x="485"
        y="70"
        fill="#FFFFFF"
      >
        {props.customApy}%
      </text>
    </Svg>
  );
};

export default Icon;
