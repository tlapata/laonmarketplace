import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
const iconStyle = {
  display: "block",
  height: "26px",
};
const Icon: React.FC<SvgProps> = (props) => {
  return (
<Svg {...props} onClick={props.onClick} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="url(#paint0_linear_743_14)"  style={iconStyle}/>
<path d="M7.302 19.544L12.468 28.364L17.634 19.544H21.738L14.196 32H10.704L3.162 19.544H7.302ZM26.8109 32H23.3009V19.544H26.8109V32ZM29.629 19.544H40.141C44.317 19.544 45.919 21.398 45.919 24.206V24.224C45.919 27.014 44.317 28.868 40.141 28.868H33.049V32H29.629V19.544ZM42.499 24.224V24.206C42.499 23.162 41.869 22.694 40.141 22.694H33.049V25.718H40.141C41.869 25.718 42.499 25.268 42.499 24.224Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_743_14" x1="-8.33089" y1="25.0078" x2="50" y2="25.0076" gradientUnits="userSpaceOnUse">
<stop stop-color="#AE65C7"/>
<stop offset="0.275" stop-color="#BD0AF8"/>
<stop offset="0.994097" stop-color="#133FFA"/>
</linearGradient>
</defs>
</Svg>
  );
};

export default Icon;

