import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
        <g clip-path="url(#clip0_880_2210)">
        <path d="M15.6411 3H18.0936L12.7088 9.78967L19 19H14.063L10.1976 13.403L5.77241 19H3.31989L9.02466 11.738L3 3H8.05965L11.5518 8.11292L15.6411 3ZM14.7827 17.4059H16.1423L7.34522 4.53506H5.88437L14.7827 17.4059Z"/>
        </g>
        <defs>
        <clipPath id="clip0_880_2210">
            <rect width="22" height="22" fill="white"/>
        </clipPath>
        </defs>
    </svg>
  );
};

export default Icon;