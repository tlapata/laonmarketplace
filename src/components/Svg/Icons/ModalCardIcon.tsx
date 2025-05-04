import React from "react";
import { SvgProps } from "../types";

const Modal: React.FC<SvgProps> = (props) => {
  return (
    <svg
      width="1085"
      height="727"
      viewBox="0 0 1085 727"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {props.children}
      <path
        d="M39.7826 2.46989L25.0515 17.2011V98.2223V287.181L1 311.202V701.888L24.9889 725.877H444.583L464.256 706.173H951.501L968.422 689.283H1061.53L1083.8 667.046V35.4039L1060.56 12.1968H835.896L824.699 1H376.933L364.172 13.7606H183.599L172.027 2.18851L39.7826 2.46989Z"
        fill="#17171A"
        stroke="white"
        stroke-width="0.57938"
        stroke-miterlimit="10"
      />
    </svg>
  );
};

export default Modal;
