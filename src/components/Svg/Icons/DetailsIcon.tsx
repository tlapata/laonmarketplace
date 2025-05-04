import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11.0002 1.83331C16.0602 1.83331 20.1668 5.93998 20.1668 11C20.1668 16.06 16.0602 20.1666 11.0002 20.1666C5.94016 20.1666 1.8335 16.06 1.8335 11C1.8335 5.93998 5.94016 1.83331 11.0002 1.83331ZM11.0002 10.0833H7.3335V11.9166H11.0002V14.6666L14.6668 11L11.0002 7.33331V10.0833Z"/>
    </svg>
  );
};

export default Icon;
