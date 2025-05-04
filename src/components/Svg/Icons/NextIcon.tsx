import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg {...props} onClick={props.onClick} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
        <path d="M11.0002 1.83301C16.0602 1.83301 20.1668 5.93967 20.1668 10.9997C20.1668 16.0597 16.0602 20.1663 11.0002 20.1663C5.94016 20.1663 1.8335 16.0597 1.8335 10.9997C1.8335 5.93967 5.94016 1.83301 11.0002 1.83301ZM11.0002 10.083H7.3335V11.9163H11.0002V14.6663L14.6668 10.9997L11.0002 7.33301V10.083Z"/>
    </svg>
  );
};

export default Icon;