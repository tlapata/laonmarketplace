
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props} onClick={props.onClick} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 11C3.2385 11 1 8.7615 1 6C1 3.2385 3.2385 1 6 1C8.7615 1 11 3.2385 11 6C11 8.7615 8.7615 11 6 11ZM5.5 5.5V8.5H6.5V5.5H5.5ZM5.5 3.5V4.5H6.5V3.5H5.5Z"/>
    </Svg>
  );
};

export default Icon;
