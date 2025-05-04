import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <g opacity="0.7">
            <path d="M9.00001 17.25C7.87287 17.2499 6.77176 16.9112 5.83944 16.2778C4.90712 15.6444 4.18659 14.7455 3.77127 13.6976C3.35595 12.6498 3.26501 11.5014 3.51022 10.4012C3.75544 9.30111 4.3255 8.30001 5.14651 7.52775C6.15301 6.5805 8.62501 4.875 8.25001 1.125C12.75 4.125 15 7.125 10.5 11.625C11.25 11.625 12.375 11.625 14.25 9.7725C14.4525 10.3523 14.625 10.9755 14.625 11.625C14.625 13.1168 14.0324 14.5476 12.9775 15.6025C11.9226 16.6574 10.4919 17.25 9.00001 17.25Z" fill="url(#paint0_linear_1021_6502)"/>
        </g>
        <defs>
            <linearGradient id="paint0_linear_1021_6502" x1="12.0001" y1="1.00003" x2="4.99665" y2="18.9987" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF5F04"/>
            <stop offset="0.33" stop-color="#FF003D"/>
            <stop offset="0.91" stop-color="#FFE600"/>
            </linearGradient>
        </defs>
    </svg>
  );
};

export default Icon;