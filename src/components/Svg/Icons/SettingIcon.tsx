import React from "react";
import { SvgProps } from "../types";
import Svg from "../Svg";
const iconStyle = {
  display: "block",
  height: "26px",
};
const Icon: React.FC<SvgProps> = (props) => {
  return (
//     <Svg {...props} onClick={props.onClick} style={iconStyle} width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M2 12H13" stroke="white" stroke-width="3" stroke-linecap="round"/>
//     <path d="M2 12H13" stroke={props.fill ? props.fill : "url(#paint0_linear_10387_989)"} stroke-width="3" stroke-linecap="round"/>
//     <path d="M24 12H22" stroke="white" stroke-width="3" stroke-linecap="round"/>
//     <path className="path-1" d="M24 12H22" stroke={props.apy1 ? props.apy1 : "url(#paint1_linear_10387_989)"} stroke-width="3" stroke-linecap="round"/>
//     <circle className="circle-1" cx="17.5" cy="11.5" r="3.5" stroke={props.strokecolor ? props.strokecolor : "url(#paint2_radial_10387_989)"} stroke-width="2"/>
//     <path d="M24 19H14" stroke="white" stroke-width="3" stroke-linecap="round"/>
//     <path className="path-2" d="M24 19H14" stroke={props.apy2 ? props.apy2 : "url(#paint3_linear_10387_989)"} stroke-width="3" stroke-linecap="round"/>
//     <path d="M2 19H5" stroke="white" stroke-width="3" stroke-linecap="round"/>
//     <path className="path-3" d="M2 19H5" stroke={props.text1 ? props.text1 : "url(#paint4_linear_10387_989)"} stroke-width="3" stroke-linecap="round"/>
//     <circle className="circle-2" cx="4.5" cy="4.5" r="3.5" transform="matrix(-1 0 0 1 14 15)" stroke={props.fillcolor ? props.fillcolor :"url(#paint5_radial_10387_989)"} stroke-width="2"/>
//     <path d="M24 4H14" stroke="white" stroke-width="3" stroke-linecap="round"/>
//     <path className="path-4" d="M24 4H14" stroke={props.text2 ? props.text2 : "url(#paint6_linear_10387_989)"} stroke-width="3" stroke-linecap="round"/>
//     <path d="M2 4H5" stroke="white" stroke-width="3" stroke-linecap="round"/>
//     <path className="path-5" d="M2 4H5" stroke={props.text3 ? props.text3 : "url(#paint7_linear_10387_989)"} stroke-width="3" stroke-linecap="round"/>
//     <circle className="circle-2" cx="4.5" cy="4.5" r="3.5" transform="matrix(-1 0 0 1 14 0)" stroke={props.fillcolor ? props.fillcolor : "url(#paint5_radial_10387_989)"} stroke-width="2"/>
//     <defs>
// <linearGradient id="paint0_linear_10387_989" x1="0.167204" y1="11.4998" x2="13" y2="11.5002" gradientUnits="userSpaceOnUse">
// <stop stop-color="#CA2FFD"/>
// <stop offset="0.348958" stop-color="#BD0AF8"/>
// <stop offset="0.994097" stop-color="#365CFC"/>
// </linearGradient>
// <linearGradient id="paint1_linear_10387_989" x1="24.3332" y1="12.5002" x2="22" y2="12.5001" gradientUnits="userSpaceOnUse">
// <stop offset="0.348958" stop-color="#BD0AF8"/>
// <stop offset="0.994097" stop-color="#365CFC"/>
// </linearGradient>

// <radialGradient id="paint2_radial_10387_989" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.155 13.5318) rotate(-136.151) scale(8.24867 8.46127)">
// <stop stop-color="#0031FF"/>
// <stop offset="0.0001" stop-color="#0C3AFF"/>
// <stop offset="0.273" stop-color="#3A2FFA"/>
// <stop offset="1" stop-color="#FF00E5"/>
// </radialGradient>
// <linearGradient id="paint3_linear_10387_989" x1="25.6662" y1="19.5002" x2="14" y2="19.4999" gradientUnits="userSpaceOnUse">
// <stop stop-color="#CA2FFD"/>
// <stop offset="0.348958" stop-color="#BD0AF8"/>
// <stop offset="0.994097" stop-color="#365CFC"/>
// </linearGradient>
// <linearGradient id="paint4_linear_10387_989" x1="1.50015" y1="19.5002" x2="5" y2="19.5001" gradientUnits="userSpaceOnUse">
// <stop offset="0.348958" stop-color="#BD0AF8"/>
// <stop offset="0.994097" stop-color="#365CFC"/>
// </linearGradient>
// <radialGradient id="paint5_radial_10387_989" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.155 6.53184) rotate(-136.151) scale(8.24867 8.46127)">
// <stop stop-color="#0031FF"/>
// <stop offset="0.0001" stop-color="#0C3AFF"/>
// <stop offset="0.273" stop-color="#3A2FFA"/>
// <stop offset="1" stop-color="#FF00E5"/>
// </radialGradient>
// <linearGradient id="paint6_linear_10387_989" x1="25.6662" y1="4.50016" x2="14" y2="4.49988" gradientUnits="userSpaceOnUse">
// <stop stop-color="#CA2FFD"/>
// <stop offset="0.348958" stop-color="#BD0AF8"/>
// <stop offset="0.994097" stop-color="#365CFC"/>
// </linearGradient>
// <linearGradient id="paint7_linear_10387_989" x1="1.50015" y1="4.50016" x2="5" y2="4.50013" gradientUnits="userSpaceOnUse">
// <stop offset="0.348958" stop-color="#BD0AF8"/>
// <stop offset="0.994097" stop-color="#365CFC"/>
// </linearGradient>
// </defs>
//     </Svg>
<Svg {...props} onClick={props.onClick} style={iconStyle} width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12H13" stroke="white" stroke-width="3" stroke-linecap="round"/>
<path d="M2 12H13" stroke={props.fill ? props.fill : "url(#paint0_linear_10387_989)"} stroke-width="3" stroke-linecap="round"/>
<path d="M24 12H22" stroke="white" stroke-width="3" stroke-linecap="round"/>
<path d="M24 12H22" stroke="url(#paint1_linear_10387_989)" stroke-width="3" stroke-linecap="round"/>
<circle cx="17.5" cy="11.5" r="3.5" stroke="url(#paint2_radial_10387_989)" stroke-width="2"/>
<path d="M24 19H14" stroke="white" stroke-width="3" stroke-linecap="round"/>
<path d="M24 19H14" stroke="url(#paint3_linear_10387_989)" stroke-width="3" stroke-linecap="round"/>
<path d="M2 19H5" stroke="white" stroke-width="3" stroke-linecap="round"/>
<path d="M2 19H5" stroke="url(#paint4_linear_10387_989)" stroke-width="3" stroke-linecap="round"/>
<circle cx="4.5" cy="4.5" r="3.5" transform="matrix(-1 0 0 1 14 15)" stroke="url(#paint5_radial_10387_989)" stroke-width="2"/>
<path d="M24 4H14" stroke="white" stroke-width="3" stroke-linecap="round"/>
<path d="M24 4H14" stroke="url(#paint6_linear_10387_989)" stroke-width="3" stroke-linecap="round"/>
<path d="M2 4H5" stroke="white" stroke-width="3" stroke-linecap="round"/>
<path d="M2 4H5" stroke="url(#paint7_linear_10387_989)" stroke-width="3" stroke-linecap="round"/>
<circle cx="4.5" cy="4.5" r="3.5" transform="matrix(-1 0 0 1 14 0)" stroke="url(#paint8_radial_10387_989)" stroke-width="2"/>
<defs>
<linearGradient id="paint0_linear_10387_989" x1="0.167204" y1="11.4998" x2="13" y2="11.5002" gradientUnits="userSpaceOnUse">
<stop stop-color="#CA2FFD"/>
<stop offset="0.348958" stop-color="#BD0AF8"/>
<stop offset="0.994097" stop-color="#365CFC"/>
</linearGradient>
<linearGradient id="paint1_linear_10387_989" x1="24.3332" y1="12.5002" x2="22" y2="12.5001" gradientUnits="userSpaceOnUse">
<stop offset="0.348958" stop-color="#BD0AF8"/>
<stop offset="0.994097" stop-color="#365CFC"/>
</linearGradient>
<radialGradient id="paint2_radial_10387_989" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.155 13.5318) rotate(-136.151) scale(8.24867 8.46127)">
<stop stop-color="#0031FF"/>
<stop offset="0.0001" stop-color="#0C3AFF"/>
<stop offset="0.273" stop-color="#3A2FFA"/>
<stop offset="1" stop-color="#FF00E5"/>
</radialGradient>
<linearGradient id="paint3_linear_10387_989" x1="25.6662" y1="19.5002" x2="14" y2="19.4999" gradientUnits="userSpaceOnUse">
<stop stop-color="#CA2FFD"/>
<stop offset="0.348958" stop-color="#BD0AF8"/>
<stop offset="0.994097" stop-color="#365CFC"/>
</linearGradient>
<linearGradient id="paint4_linear_10387_989" x1="1.50015" y1="19.5002" x2="5" y2="19.5001" gradientUnits="userSpaceOnUse">
<stop offset="0.348958" stop-color="#BD0AF8"/>
<stop offset="0.994097" stop-color="#365CFC"/>
</linearGradient>
<radialGradient id="paint5_radial_10387_989" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.155 6.53184) rotate(-136.151) scale(8.24867 8.46127)">
<stop stop-color="#0031FF"/>
<stop offset="0.0001" stop-color="#0C3AFF"/>
<stop offset="0.273" stop-color="#3A2FFA"/>
<stop offset="1" stop-color="#FF00E5"/>
</radialGradient>
<linearGradient id="paint6_linear_10387_989" x1="25.6662" y1="4.50016" x2="14" y2="4.49988" gradientUnits="userSpaceOnUse">
<stop stop-color="#CA2FFD"/>
<stop offset="0.348958" stop-color="#BD0AF8"/>
<stop offset="0.994097" stop-color="#365CFC"/>
</linearGradient>
<linearGradient id="paint7_linear_10387_989" x1="1.50015" y1="4.50016" x2="5" y2="4.50013" gradientUnits="userSpaceOnUse">
<stop offset="0.348958" stop-color="#BD0AF8"/>
<stop offset="0.994097" stop-color="#365CFC"/>
</linearGradient>
<radialGradient id="paint8_radial_10387_989" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.155 6.53184) rotate(-136.151) scale(8.24867 8.46127)">
<stop stop-color="#0031FF"/>
<stop offset="0.0001" stop-color="#0C3AFF"/>
<stop offset="0.273" stop-color="#3A2FFA"/>
<stop offset="1" stop-color="#FF00E5"/>
</radialGradient>
</defs>
</Svg>

  );
};

export default Icon;


