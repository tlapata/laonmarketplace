import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width="514"
      height="114"
      viewBox="0 0 514 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M413.46 57.3602H95.39L91.46 53.5502L92.24 52.7402L95.85 56.2402H413L497.69 56.2402V57.3602H413.46Z"
        fill="white"
      />
      <path
        d="M95.4 58.3605H409.39H513.62V59.4805H451.275H408.93L95.85 59.4805L92.24 62.9805L91.46 62.1705L95.4 58.3605Z"
        fill="white"
      />
      <g filter="url(#filter0_f_598_211)">
        <circle cx="57" cy="57" r="27" fill="#F45C5C" />
      </g>
      <defs>
        <filter
          id="filter0_f_598_211"
          x="0"
          y="0"
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
            result="effect1_foregroundBlur_598_211"
          />
        </filter>
      </defs>

      <text
        fontSize="12px"
        fontFamily="Jost Bold"
        fontWeight="800"
        x="154"
        y="60"
        fill="#FFFFFF"
      >
        Top 10
      </text>
      <text
        fontSize="12.417px"
        fontFamily="Jost Bold"
        letterSpacing="0.03rem"
        fontWeight="800"
        x="255"
        y="80"
        fill="#FFFFFF"
      >
        {props.apy1}% APY
      </text>
      <text
        fontSize="12.417px"
        fontFamily="Jost Bold"
        letterSpacing="0.03rem"
        fontWeight="800"
        x="790"
        y="80"
        fill="#FFFFFF"
      >
        {props.apy2}% APY
      </text>
      <text
        fontSize="20px"
        fontFamily="Jost Bold"
        letterSpacing="0.03rem"
        fontWeight="800"
        x="700"
        y="70"
        fill="#FFFFFF"
      >
        {props.id}
      </text>
      <text
        fontSize="12px"
        fontFamily="Jost Bold"
        letterSpacing="0.03rem"
        fontWeight="800"
        x="162"
        y="75"
        fill="#FFFFFF"
      >
        {props.text2}.
      </text>
    </Svg>
  );
};

export default Icon;
