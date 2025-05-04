import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
        <path d="M10.9998 1.83337C5.93984 1.83337 1.83317 5.94004 1.83317 11C1.83317 16.06 5.93984 20.1667 10.9998 20.1667C16.0598 20.1667 20.1665 16.06 20.1665 11C20.1665 5.94004 16.0598 1.83337 10.9998 1.83337ZM10.9998 10.0834H14.6665V11.9167H10.9998V14.6667L7.33317 11L10.9998 7.33337V10.0834Z" />
    </svg>
  );
};

export default Icon;