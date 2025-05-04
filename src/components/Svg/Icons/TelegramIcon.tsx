import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <g clip-path="url(#clip0_880_2204)">
        <path fill-rule="evenodd" clipRule="evenodd" d="M6.74999 12.1963L6.72872 12.2069L2.6424 11.0274C1.7587 10.7775 1.75215 10.2143 2.83878 9.81148L18.7667 4.11814C19.6913 3.76685 20.215 4.20899 19.9155 5.31132L17.2039 17.1553C17.0141 17.9972 16.4658 18.1986 15.7032 17.8094L13.6167 16.38L15.5 11.5L11.5302 14.9506L9.58603 16.6889C9.57874 16.6954 9.5715 16.7018 9.5643 16.7082C9.37281 16.8785 9.21159 17.0219 8.91507 17.0584C8.60904 17.0978 8.35702 17.013 8.17374 16.542L6.74999 12.1963Z"/>
        </g>
        <defs>
        <clipPath id="clip0_880_2204">
            <rect width="22" height="22" fill="white"/>
        </clipPath>
        </defs>
    </svg>
  );
};

export default Icon;