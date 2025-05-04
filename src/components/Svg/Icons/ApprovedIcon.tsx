import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11.0002 20.1666C5.93741 20.1666 1.8335 16.0627 1.8335 11C1.8335 5.93723 5.93741 1.83331 11.0002 1.83331C16.0629 1.83331 20.1668 5.93723 20.1668 11C20.1668 16.0627 16.0629 20.1666 11.0002 20.1666ZM10.0862 14.6666L16.5671 8.1849L15.2709 6.88873L10.0862 12.0743L7.493 9.48106L6.19683 10.7772L10.0862 14.6666Z" />
    </svg>
  );
};

export default Icon;