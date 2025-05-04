import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M1.8335 17.4166H20.1668V19.25H1.8335V17.4166ZM1.8335 4.58331L6.41683 7.33331L11.0002 1.83331L15.5835 7.33331L20.1668 4.58331V15.5833H1.8335V4.58331Z"/>
  </svg>
  );
};

export default Icon;