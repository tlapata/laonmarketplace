import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_871_12510)">
        <path d="M18.3332 18.3333C18.3332 18.5765 18.2366 18.8096 18.0647 18.9815C17.8928 19.1534 17.6596 19.25 17.4165 19.25H4.58317C4.34006 19.25 4.1069 19.1534 3.93499 18.9815C3.76308 18.8096 3.6665 18.5765 3.6665 18.3333V10.0833H0.916504L10.3829 1.47767C10.5517 1.32411 10.7717 1.23901 10.9998 1.23901C11.228 1.23901 11.448 1.32411 11.6168 1.47767L21.0832 10.0833H18.3332V18.3333ZM10.0832 11.9167V17.4167H11.9165V11.9167H10.0832Z"/>
      </g>
      <defs>
        <clipPath id="clip0_871_12510">
          <rect width="22" height="22" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default Icon;
